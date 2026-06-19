import { type Metadata } from "next";

import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

import { submitContactForm } from "./actions";
import { SubmitButton } from "./submit-button";

export const metadata: Metadata = {
  description:
    "Get in touch with Evolute Partners. Talk to our capital partners for deep tech about M&A, fundraising, and corporate finance.",
  openGraph: {
    description:
      "Get in touch with Evolute Partners. Talk to our capital partners for deep tech about M&A, fundraising, and corporate finance.",
    title: "Contact | Evolute Partners",
    type: "website",
  },
  title: "Contact | Evolute Partners",
};

const statusCopy = {
  error: {
    description:
      "We could not process that message just now. Please email info@evolute.partners directly.",
    title: "Something went wrong",
    variant: "destructive" as const,
  },
  invalid: {
    description:
      "Please check your details and include a short message about what you're working on.",
    title: "Please review the form",
    variant: "destructive" as const,
  },
  success: {
    description:
      "Your message was received. We'll review it and follow up from info@evolute.partners.",
    title: "Message received",
    variant: "default" as const,
  },
};

export default async function ContactPage(props: PageProps<"/contact">) {
  const searchParams = await props.searchParams;
  const status = typeof searchParams.status === "string" ? searchParams.status : undefined;
  const statusMessage =
    status && status in statusCopy ? statusCopy[status as keyof typeof statusCopy] : null;

  return (
    <>
      <Hero
        variant="light"
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Want to get in touch? Fill out the form below and we'll get back to you as soon as possible."
      />

      <section>
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-3xl bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="h-full w-full object-cover" src="/images/contact/office.jpg" />
          </div>
        </div>
      </section>

      <PageSection>
        <div className="grid gap-16 md:grid-cols-[1fr_1.25fr] md:gap-20">
          <aside className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-navy-700">
                Based in the heart of Amsterdam
              </h2>
              <address className="text-base leading-relaxed text-navy-700 not-italic">
                Evolute HQ
                <br />
                Herengracht 450
                <br />
                1017 CA, Amsterdam
                <br />
                Netherlands
              </address>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-navy-700">
                Email
              </h2>
              <a
                href="mailto:info@evolute.partners"
                className="text-base text-navy-700 underline-offset-4 hover:underline"
              >
                info@evolute.partners
              </a>
            </div>
          </aside>

          <div className="flex flex-col gap-6">
            {statusMessage ? (
              <Alert className="border-navy-700/10 bg-white" variant={statusMessage.variant}>
                <AlertTitle>{statusMessage.title}</AlertTitle>
                <AlertDescription>{statusMessage.description}</AlertDescription>
              </Alert>
            ) : null}

            <form action={submitContactForm} className="flex flex-col gap-6">
              <FieldGroup>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="rounded-none border-0 border-b border-navy-700/30 bg-transparent px-0 focus-visible:border-navy-700 focus-visible:ring-0"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="company">Company</FieldLabel>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      className="rounded-none border-0 border-b border-navy-700/30 bg-transparent px-0 focus-visible:border-navy-700 focus-visible:ring-0"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-none border-0 border-b border-navy-700/30 bg-transparent px-0 focus-visible:border-navy-700 focus-visible:ring-0"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="topic">How can we help?</FieldLabel>
                  <NativeSelect
                    id="topic"
                    name="topic"
                    defaultValue=""
                    className="w-full rounded-none border-0 border-b border-navy-700/30 bg-transparent px-0 focus-visible:border-navy-700 focus-visible:ring-0"
                  >
                    <NativeSelectOption value="" disabled>
                      Select a topic
                    </NativeSelectOption>
                    <NativeSelectOption value="fundraising">Fundraising</NativeSelectOption>
                    <NativeSelectOption value="m-a">M&amp;A</NativeSelectOption>
                    <NativeSelectOption value="corporate-finance">
                      Corporate finance
                    </NativeSelectOption>
                    <NativeSelectOption value="investor-advisory">
                      Investor advisory
                    </NativeSelectOption>
                    <NativeSelectOption value="other">Other</NativeSelectOption>
                  </NativeSelect>
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us a little about what you're working on."
                    className="rounded-none border-0 border-b border-navy-700/30 bg-transparent px-0 focus-visible:border-navy-700 focus-visible:ring-0"
                  />
                  <FieldDescription>
                    We treat every message as confidential. Please include a few details so we can
                    route it quickly.
                  </FieldDescription>
                </Field>

                <input
                  aria-hidden="true"
                  autoComplete="off"
                  className="hidden"
                  name="website"
                  tabIndex={-1}
                  type="text"
                />
              </FieldGroup>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to our{" "}
                  <a href="/legal/privacy-statement" className="underline underline-offset-4">
                    privacy statement
                  </a>
                  .
                </p>
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </PageSection>
    </>
  );
}
