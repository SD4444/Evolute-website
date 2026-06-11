"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="ghost"
      disabled={pending}
      className="self-start p-0 text-base font-medium text-navy-700 hover:bg-transparent hover:underline disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send →"}
    </Button>
  );
}
