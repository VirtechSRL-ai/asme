import { getHomepageMarkdown } from "../../lib/discovery";

export function GET() {
  return getHomepageMarkdown();
}
