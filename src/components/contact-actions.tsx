"use client";

import posthog from "posthog-js";
import { posthogAnalyticsLogger } from "@/lib/posthog-log";
import { Posta, Telefono } from "./ui";

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST
);

type ContactActionsProps = {
  emailHref: string;
  phoneHref: string;
  email: string;
  phone: string;
};

export function ContactActions({ emailHref, phoneHref, email, phone }: ContactActionsProps) {
  function captureContactMethod(method: "email" | "phone") {
    if (isPostHogConfigured) {
      posthog.capture("contact_method_selected", { method });
      posthogAnalyticsLogger.info("contact method selected", { method });
    }
  }

  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href={emailHref}
        onClick={() => captureContactMethod("email")}
        className="bottone bottone-verde w-full sm:w-auto"
      >
        <Posta />
        {email}
      </a>
      <a
        href={phoneHref}
        onClick={() => captureContactMethod("phone")}
        className="bottone bottone-contorno w-full sm:w-auto"
      >
        <Telefono />
        {phone}
      </a>
    </div>
  );
}
