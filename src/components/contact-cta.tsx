"use client";

import type { ReactNode } from "react";
import posthog from "posthog-js";
import { posthogAnalyticsLogger } from "@/lib/posthog-log";

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST
);

type ContactCtaProps = {
  source: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
  tabIndex?: number;
};

export function ContactCta({ source, className, children, onClick, tabIndex }: ContactCtaProps) {
  function handleClick() {
    if (isPostHogConfigured) {
      posthog.capture("contact_cta_clicked", { source });
      posthogAnalyticsLogger.info("contact CTA selected", { source });
    }
    onClick?.();
  }

  return (
    <a href="#contatti" onClick={handleClick} tabIndex={tabIndex} className={className}>
      {children}
    </a>
  );
}
