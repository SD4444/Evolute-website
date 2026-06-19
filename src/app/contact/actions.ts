"use server";

import { redirect } from "next/navigation";
import { appendFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const submissionLogFile = join(tmpdir(), "evolute-contact-submissions.jsonl");

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(formData: FormData) {
  const website = readField(formData, "website");

  if (website) {
    redirect("/contact?status=success");
  }

  const name = readField(formData, "name");
  const company = readField(formData, "company");
  const email = readField(formData, "email");
  const topic = readField(formData, "topic");
  const message = readField(formData, "message");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    name.length < 2 ||
    company.length < 2 ||
    !isValidEmail ||
    topic.length < 2 ||
    message.length < 20
  ) {
    redirect("/contact?status=invalid");
  }

  try {
    await appendFile(
      submissionLogFile,
      `${JSON.stringify({
        company,
        email,
        message,
        name,
        submittedAt: new Date().toISOString(),
        topic,
      })}\n`,
      "utf8",
    );
  } catch {
    redirect("/contact?status=error");
  }

  redirect("/contact?status=success");
}
