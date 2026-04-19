import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "case-studies");

export interface CaseStudyLinks {
  playStore?: string;
  appStore?: string;
  web?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  /** For meta description only: frontmatter → first paragraph after H1 (no Overview section parsing) */
  metaDescription: string | null;
  role: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  techStack: string[];
  impact: string[];
  visibility: string | null;
  links: CaseStudyLinks | null;
}

function extractBulletItems(text: string): string[] {
  const items: string[] = [];
  const lines = text.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^[-*]\s+(.+)$/);
    if (match) {
      const content = match[1].replace(/\*\*(.+?)\*\*/g, "$1").trim();
      if (content) items.push(content);
    }
  }
  return items;
}

function extractOverview(sectionContent: string): string {
  const lines = sectionContent.split("\n").filter((l) => l.trim());
  const paragraphs: string[] = [];
  let current = "";

  for (const line of lines) {
    if (line.match(/^[-*]\s/)) break;
    const trimmed = line.trim();
    if (trimmed === "---") continue;
    if (trimmed) {
      current += (current ? " " : "") + trimmed.replace(/\*\*(.+?)\*\*/g, "$1");
    } else if (current) {
      paragraphs.push(current);
      current = "";
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs.join(" ").trim() || "";
}

function extractLinks(sectionContent: string): CaseStudyLinks | null {
  const links: CaseStudyLinks = {};
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const text = sectionContent.toLowerCase();
  const urls = sectionContent.match(urlRegex) || [];

  if (text.includes("play store") || text.includes("google play")) {
    const playUrl = urls.find((u) => u.includes("play.google.com"));
    if (playUrl) links.playStore = playUrl.trim();
  }
  if (text.includes("app store") || text.includes("apps.apple.com")) {
    const appUrl = urls.find((u) => u.includes("apps.apple.com"));
    if (appUrl) links.appStore = appUrl.trim();
  }
  if (text.includes("web") || urls.some((u) => !u.includes("play.google") && !u.includes("apps.apple"))) {
    const webUrl = urls.find((u) => !u.includes("play.google.com") && !u.includes("apps.apple.com"));
    if (webUrl) links.web = webUrl.trim();
  }

  return Object.keys(links).length > 0 ? links : null;
}

/** Extract first paragraph of text after the H1 heading, before next ## section. */
function extractFirstParagraphAfterH1(content: string): string {
  const afterH1 = content.replace(/^#\s+.+$/m, "").trim();
  const lines = afterH1.split("\n");
  const parts: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("##")) break;
    if (t && !t.startsWith("---")) {
      parts.push(t.replace(/\*\*(.+?)\*\*/g, "$1"));
    }
    if (parts.length > 0 && !t) break;
  }
  return parts.join(" ").trim().slice(0, 300) || "";
}

/** Truncate text for meta description (max 160 chars, no newlines, trimmed). */
export function truncateForMeta(text: string, maxLen = 160): string {
  const cleaned = String(text || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  const cut = cleaned.slice(0, maxLen - 3);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 120 ? cut.slice(0, lastSpace) : cut).trim() + "...";
}

function extractVisibility(sectionContent: string): string | null {
  const lines = sectionContent.split("\n").filter((l) => l.trim());
  const paragraphs: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.match(/^https?:\/\//)) {
      paragraphs.push(trimmed.replace(/\*\*(.+?)\*\*/g, "$1"));
    }
  }
  const text = paragraphs.join(" ").trim();
  return text || null;
}

function parseCaseStudyContent(slug: string, rawContent: string): CaseStudy {
  const { data: frontmatter, content } = matter(rawContent);

  const sections: Record<string, string> = {};
  const sectionRegex = /^##\s+(.+?)$/gm;
  let match;
  let lastKey = "";
  let lastIndex = 0;

  while ((match = sectionRegex.exec(content)) !== null) {
    if (lastKey) {
      sections[lastKey] = content.slice(lastIndex, match.index).trim();
    }
    lastKey = match[1].trim();
    lastIndex = match.index + match[0].length;
  }
  if (lastKey) {
    sections[lastKey] = content.slice(lastIndex).trim();
  }

  const titleMatch = content.match(/^#\s+(.+)$/m);
  let title = frontmatter?.title ?? "Untitled";
  let subtitle = frontmatter?.subtitle ?? "";

  if (titleMatch) {
    const fullTitle = titleMatch[1].replace(/\*\*(.+?)\*\*/g, "$1");
    const parts = fullTitle.split(/[—–-]/).map((p) => p.trim());
    title = frontmatter?.title ?? parts[0] ?? title;
    subtitle = frontmatter?.subtitle ?? (parts[1] ?? subtitle);
  }

  const getSection = (keys: string[]): string => {
    for (const k of keys) {
      const keyNorm = k.toLowerCase().replace(/\s+/g, " ");
      const found = Object.keys(sections).find((s) => {
        const sNorm = s.toLowerCase().replace(/\s+/g, " ");
        return sNorm === keyNorm || sNorm.startsWith(keyNorm) || keyNorm.startsWith(sNorm);
      });
      if (found) return sections[found] ?? "";
    }
    return "";
  };

  const overviewSection = getSection(["Overview"]);
  // Display overview: keep section parsing for page content
  const overview =
    frontmatter?.overview ??
    (typeof frontmatter?.description === "string" ? frontmatter.description : null) ??
    extractFirstParagraphAfterH1(content) ??
    extractOverview(overviewSection);
  // Meta description (robust, no section parsing): frontmatter → first paragraph → truncate at use
  const firstPara = extractFirstParagraphAfterH1(content).trim();
  const metaDescription =
    (typeof frontmatter?.description === "string" ? frontmatter.description.trim() : null) ??
    (firstPara || null);

  const roleSection = getSection(["My Role"]);
  const role = frontmatter?.role ?? extractBulletItems(roleSection);

  const featuresSection = getSection(["Key Features", "Key Features Delivered"]);
  const features = frontmatter?.features ?? extractBulletItems(featuresSection);

  const challengesSection = getSection(["Technical Challenges"]);
  const challenges = frontmatter?.challenges ?? extractBulletItems(challengesSection);

  const solutionsSection = getSection(["Solutions"]);
  const solutions = frontmatter?.solutions ?? extractBulletItems(solutionsSection);

  const techSection = getSection(["Tech Stack"]);
  const techStack = frontmatter?.techStack ?? extractBulletItems(techSection);

  const impactSection = getSection(["Impact"]);
  const impact = frontmatter?.impact ?? extractBulletItems(impactSection);

  const liveSection = getSection(["Live Application"]);
  const visibilitySection = getSection(["Project Visibility", "Notes"]);
  const links = frontmatter?.links ?? extractLinks(liveSection);
  const visibility = frontmatter?.visibility ?? extractVisibility(visibilitySection) ?? (links ? null : extractVisibility(liveSection));

  return {
    slug,
    title,
    subtitle,
    overview,
    metaDescription,
    role,
    features,
    challenges,
    solutions,
    techStack,
    impact,
    visibility,
    links,
  };
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseCaseStudyContent(slug, raw);
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  const studies: CaseStudy[] = [];
  for (const slug of slugs) {
    const study = getCaseStudyBySlug(slug);
    if (study) studies.push(study);
  }
  return studies;
}
