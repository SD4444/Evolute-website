"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { redirect } from "next/navigation";

type Submission = {
  company: string;
  email: string;
  message: string;
  name: string;
  submittedAt: string;
  topic: string;
};

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Write the submission to D1. Workers have no persistent filesystem, so this
 * (or the email notification) is the only thing that makes a submission real.
 */
async function store(env: CloudflareEnv, submission: Submission) {
  const db = env.CONTACT_SUBMISSIONS;

  if (!db) {
    console.error("contact: CONTACT_SUBMISSIONS binding is missing, cannot store submission");
    return false;
  }

  try {
    await db
      .prepare(
        `INSERT INTO submissions (name, company, email, topic, message, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        submission.name,
        submission.company,
        submission.email,
        submission.topic,
        submission.message,
        submission.submittedAt,
      )
      .run();
    return true;
  } catch (error) {
    console.error("contact: failed to store submission", error);
    return false;
  }
}

/** Email the submission on. Skipped when no provider key is configured. */
async function notify(env: CloudflareEnv, submission: Submission) {
  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_NOTIFY_TO ?? "info@evolute.partners";
  const from = env.CONTACT_NOTIFY_FROM;

  if (!apiKey || !from) {
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      body: JSON.stringify({
        from,
        reply_to: submission.email,
        subject: `Website enquiry: ${submission.name} (${submission.company})`,
        text: [
          `Name: ${submission.name}`,
          `Company: ${submission.company}`,
          `Email: ${submission.email}`,
          `Topic: ${submission.topic}`,
          `Submitted: ${submission.submittedAt}`,
          "",
          submission.message,
        ].join("\n"),
        to,
      }),
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      console.error(`contact: notification failed with ${response.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("contact: failed to send notification", error);
    return false;
  }
}

export async function submitContactForm(formData: FormData) {
  const website = readField(formData, "website");

  // Honeypot: pretend it worked, store nothing.
  if (website) {
    redirect("/contact?status=success");
  }

  const submission: Submission = {
    company: readField(formData, "company"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
    name: readField(formData, "name"),
    submittedAt: new Date().toISOString(),
    topic: readField(formData, "topic"),
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email);

  if (
    submission.name.length < 2 ||
    submission.company.length < 2 ||
    !isValidEmail ||
    submission.topic.length < 2 ||
    submission.message.length < 20
  ) {
    redirect("/contact?status=invalid");
  }

  const { env } = getCloudflareContext();
  const [stored, notified] = await Promise.all([store(env, submission), notify(env, submission)]);

  // Only claim success if the submission actually landed somewhere. Otherwise
  // send the visitor to the error state, which tells them to email us directly.
  if (!stored && !notified) {
    redirect("/contact?status=error");
  }

  redirect("/contact?status=success");
}
