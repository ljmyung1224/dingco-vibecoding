import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArchiveChrome } from "@/components/archive-chrome";
import { formatArchiveDate, getArchivePost, getArchivePosts, getArchiveSlugs } from "@/lib/archive";

type ArchivePostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getArchiveSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: ArchivePostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArchivePost(slug);
  if (!post) return { title: "Archive | 이정명" };
  return { title: `${post.title} | Archive | 이정명`, description: post.description, keywords: post.tags, openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date, tags: post.tags, images: post.thumbnail ? [post.thumbnail] : undefined } };
}

export default async function ArchivePostPage({ params }: ArchivePostPageProps) {
  const { slug } = await params;
  const posts = getArchivePosts();
  const postIndex = posts.findIndex((item) => item.slug === slug);
  const post = posts[postIndex];
  if (!post) notFound();
  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return (
    <ArchiveChrome>
      <article className={`archive-post category-${post.category.toLowerCase()}`}>
        <header className="archive-post-header section-wrap">
          <Link className="back-link" data-reveal href="/archive">← Archive</Link>
          <div className="archive-post-meta" data-reveal data-delay="60"><span>{post.category}</span><time dateTime={post.date}>{formatArchiveDate(post.date)}</time><span>{post.tags.length.toString().padStart(2, "0")} keywords</span></div>
          <h1 data-reveal data-delay="120">{post.title}</h1>
          <p data-reveal data-delay="190">{post.description}</p>
          <div className="archive-tags" data-reveal data-delay="240">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        </header>
        <div className="archive-post-body" data-reveal><MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} /></div>
        <nav className="archive-post-navigation" data-reveal aria-label="게시글 탐색">
          {previousPost ? <Link href={`/archive/${previousPost.slug}`}><small>← PREVIOUS</small><strong>{previousPost.title}</strong><span>{previousPost.category}</span></Link> : <span />}
          {nextPost ? <Link className="next-post" href={`/archive/${nextPost.slug}`}><small>NEXT →</small><strong>{nextPost.title}</strong><span>{nextPost.category}</span></Link> : <Link className="next-post" href="/archive"><small>INDEX →</small><strong>모든 기록 보기</strong><span>Archive</span></Link>}
        </nav>
      </article>
    </ArchiveChrome>
  );
}
