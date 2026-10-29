"use client";

import posthog from "posthog-js";

type LogAttributes = Record<string, string>;

export const posthogAnalyticsLogger = {
  info(message: string, attributes: LogAttributes) {
    posthog.logger.info(message, attributes);
  },
};
