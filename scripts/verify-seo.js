#!/usr/bin/env node
/**
 * SEO metadata verification script.
 * Run with dev server: npm run dev (in another terminal), then: node scripts/verify-seo.js
 * Or against production: BASE_URL=https://yoursite.com node scripts/verify-seo.js
 */

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const SLUGS_TO_CHECK = ["eh-social-platform", "muslim-kids-tv-mobile"];

async function fetchHtml(path) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, { headers: { "User-Agent": "SEO-Verify" } });
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  return res.text();
}

function extractTag(html, tagName, attr, valueAttr) {
  const regex = attr
    ? new RegExp(`<${tagName}[^>]*${attr}=["']([^"']+)["'][^>]*(?:${valueAttr}=["']([^"']+)["'])?`, "i")
    : new RegExp(`<${tagName}[^>]*>([^<]*)</${tagName}>`, "i");
  const match = html.match(regex);
  if (tagName === "title") return match ? match[1] : null;
  return match ? (valueAttr ? match[2] || match[1] : match[1]) : null;
}

function getMetaContent(html, nameOrProperty) {
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=["']${nameOrProperty}["'][^>]*content=["']([^"']+)["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1] : null;
}

async function verifyPage(path, checks) {
  const html = await fetchHtml(path);
  const title = extractTag(html, "title") || getMetaContent(html, "og:title");
  const description = getMetaContent(html, "description") || getMetaContent(html, "og:description");
  const ogTitle = getMetaContent(html, "og:title");
  const ogDesc = getMetaContent(html, "og:description");
  const ogType = getMetaContent(html, "og:type");
  const ogUrl = getMetaContent(html, "og:url");
  const twCard = getMetaContent(html, "twitter:card");
  const twTitle = getMetaContent(html, "twitter:title");
  const twDesc = getMetaContent(html, "twitter:description");

  const results = {
    title: !!title,
    description: !!description && description.length >= 50 && description.length <= 165,
    ogTitle: !!ogTitle,
    ogDesc: !!ogDesc,
    ogType: !!ogType,
    ogUrl: !!ogUrl,
    twCard: !!twCard,
    twTitle: !!twTitle,
    twDesc: !!twDesc,
    includesPipe: title && title.includes(" | Muhammad Zeeshan"),
  };

  return { path, title, description, results };
}

async function main() {
  console.log(`\nSEO verification (${BASE_URL})\n`);

  try {
    const indexRes = await verifyPage("/case-studies", {
      title: true,
      description: true,
      og: true,
      twitter: true,
    });
    console.log("Index /case-studies");
    console.log("  title:", indexRes.title || "(missing)");
    console.log("  description:", indexRes.description ? `${indexRes.description.length} chars` : "(missing)");
    console.log("  og:title:", indexRes.results.ogTitle ? "✓" : "✗");
    console.log("  og:description:", indexRes.results.ogDesc ? "✓" : "✗");
    console.log("  og:type:", indexRes.results.ogType ? "✓" : "✗");
    console.log("  og:url:", indexRes.results.ogUrl ? "✓" : "✗");
    console.log("  twitter:card:", indexRes.results.twCard ? "✓" : "✗");
    console.log("  twitter:title:", indexRes.results.twTitle ? "✓" : "✗");
    console.log("  twitter:description:", indexRes.results.twDesc ? "✓" : "✗");

    for (const slug of SLUGS_TO_CHECK) {
      const path = `/case-studies/${slug}`;
      const res = await verifyPage(path);
      console.log(`\nCase study /case-studies/${slug}`);
      console.log("  title:", res.title || "(missing)");
      console.log("  includes ' | Muhammad Zeeshan':", res.results.includesPipe ? "✓" : "✗");
      console.log("  description:", res.description ? `${res.description.length} chars` : "(missing)");
      console.log("  og:title:", res.results.ogTitle ? "✓" : "✗");
      console.log("  og:description:", res.results.ogDesc ? "✓" : "✗");
      console.log("  og:type:", res.results.ogType ? "✓" : "✗");
      console.log("  og:url:", res.results.ogUrl ? "✓" : "✗");
      console.log("  twitter:card:", res.results.twCard ? "✓" : "✗");
      console.log("  twitter:title:", res.results.twTitle ? "✓" : "✗");
      console.log("  twitter:description:", res.results.twDesc ? "✓" : "✗");
    }

    console.log("\nDone. Run dev server first if using localhost.\n");
  } catch (err) {
    console.error("Error:", err.message);
    console.error("Ensure dev server is running: npm run dev");
    process.exit(1);
  }
}

main();
