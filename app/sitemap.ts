import type { MetadataRoute } from "next";
import { getArchivePosts } from "@/lib/archive";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getArchivePosts();
  const latestPostDate = posts[0]?.date;

  return [
    {
      url: siteUrl,
      lastModified: latestPostDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/archive`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/archive/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
