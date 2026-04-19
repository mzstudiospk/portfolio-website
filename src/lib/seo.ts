/**
 * SEO utilities: sanitization, absolute URLs, canonical/og consistency.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadzeeshan.dev";

export const SITE_URL_FINAL = SITE_URL.replace(/\/$/, "");

/** Absolute OG image URL - no relative paths. */
export const OG_IMAGE_ABSOLUTE = `${SITE_URL_FINAL}/og-image.jpg`;

const MAX_DESC_LEN = 160;
const MIN_DESC_LEN = 155;

/**
 * Sanitize meta description:
 * - Trim whitespace, remove newlines
 * - Limit to 155-160 characters
 * - Never output undefined/null
 */
export function sanitizeDescription(desc: string | null | undefined): string {
  const raw = typeof desc === "string" ? desc : "";
  const cleaned = raw.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  if (cleaned.length <= MAX_DESC_LEN) return cleaned;
  const cut = cleaned.slice(0, MAX_DESC_LEN - 3);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > MIN_DESC_LEN ? cut.slice(0, lastSpace) : cut).trim() + "...";
}

/**
 * Sanitize page title:
 * - Strip accidental double " | Muhammad Zeeshan"
 * - Ensure non-empty (fallback to site name)
 */
export function sanitizeTitle(title: string | null | undefined): string {
  const raw = typeof title === "string" ? title.trim() : "";
  if (!raw) return "Muhammad Zeeshan";
  const stripped = raw.replace(new RegExp(`\\s*\\|\\s*Muhammad Zeeshan\\s*$`, "i"), "").trim();
  return stripped || "Muhammad Zeeshan";
}

/**
 * Human-readable fallback for slug (e.g. "case-study-slug" -> "Case Study Slug").
 */
export function humanizeSlug(slug: string): string {
  if (!slug) return "Page";
  return slug
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Canonical path: no trailing slash, no double slashes.
 */
export function normalizeCanonical(path: string): string {
  const p = path.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
  return p.startsWith("/") ? p : `/${p}`;
}
