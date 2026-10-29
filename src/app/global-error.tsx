"use client";

import NextError from "next/error";
import { useEffect } from "react";
import posthog from "posthog-js";

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST
);

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (isPostHogConfigured) {
      posthog.captureException(error);
    }
  }, [error]);

  return (
    <html lang="it">
      <body>
        <NextError statusCode={0} />
        <button type="button" onClick={reset}>
          Riprova
        </button>
      </body>
    </html>
  );
}
