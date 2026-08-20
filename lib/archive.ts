import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const archiveCategories = ["Development", "Experience", "Thoughts"] as const;
export type ArchiveCategory = (typeof archiveCategories)[number];

export type ArchivePost = {
  slug: string;
  title: string;
  date: string;
  category: ArchiveCategory;
  description: string;
  tags: string[];
  thumbnail?: string;
  content: string;
};

const archiveDirectory = path.join(process.cwd(), "content", "archive");

function isArchiveCategory(value: unknown): value is ArchiveCategory {
  return typeof value === "string" && archiveCategories.includes(value as ArchiveCategory);
}

function normalizeArchiveDate(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  const date = String(value);
  return date.match(/^\d{4}-\d{2}-\d{2}$/) ? date : new Date(date).toISOString().slice(0, 10);
}

export function formatArchiveDate(date: string) {
  return date.replace(/-/g, ".");
}

function readArchivePost(slug: string): ArchivePost {
  const filePath = path.join(archiveDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  if (!isArchiveCategory(data.category)) {
    throw new Error(`Invalid archive category in ${slug}.mdx`);
  }

  return {
    slug,
    title: String(data.title),
    date: normalizeArchiveDate(data.date),
    category: data.category,
    description: String(data.description),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    content,
  };
}

export function getArchiveSlugs() {
  return fs
    .readdirSync(archiveDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getArchivePosts() {
  return getArchiveSlugs()
    .map(readArchivePost)
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getArchivePost(slug: string) {
  if (!getArchiveSlugs().includes(slug)) {
    return null;
  }

  return readArchivePost(slug);
}
