"use client";

import { useEffect } from "react";

/**
 * Dev-only SEO runtime check.
 * Logs console warnings if title, meta description, or canonical are missing.
 * No production impact.
 */
export default function SeoDevCheck() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const warnings: string[] = [];

    const title = document.title;
    if (!title || title.trim() === "") {
      warnings.push("SEO: title is missing");
    }

    const desc = document.querySelector('meta[name="description"]');
    const descContent = desc?.getAttribute("content");
    if (!descContent || descContent.trim() === "") {
      warnings.push("SEO: meta description is missing");
    } else if (descContent.length < 50 || descContent.length > 165) {
      warnings.push(`SEO: meta description length (${descContent.length}) outside 50-165 recommended range`);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalHref = canonical?.getAttribute("href");
    if (!canonicalHref || canonicalHref.trim() === "") {
      warnings.push("SEO: canonical link is missing");
    } else if (!canonicalHref.startsWith("http")) {
      warnings.push("SEO: canonical should be absolute URL");
    } else {
      try {
        const u = new URL(canonicalHref);
        if (u.pathname !== "/" && u.pathname.endsWith("/")) {
          warnings.push("SEO: canonical has trailing slash (prefer no trailing slash)");
        }
        if (canonicalHref.replace(/^https?:\/\//, "").includes("//")) {
          warnings.push("SEO: canonical may have duplicate slashes in path");
        }
      } catch {
        warnings.push("SEO: canonical URL is malformed");
      }
    }

    if (warnings.length > 0) {
      console.warn("[SEO Dev Check]\n" + warnings.join("\n"));
    }
  }, []);

  return null;
}
