import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArchiveChrome } from "@/components/archive-chrome";
import { formatArchiveDate, getArchivePost, getArchivePosts, getArchiveSlugs } from "@/lib/archive";

type ArchivePostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArchiveSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArchivePostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArchivePost(slug);

  if (!post) {
    return { title: "Archive | 이정명" };
  }

  return {
    title: `${post.title} | Archive | 이정명`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.thumbnail ? [post.thumbnail] : undefined,
    },
  };
}

export default async function ArchivePostPage({ params }: ArchivePostPageProps) {
  const { slug } = await params;
  const posts = getArchivePosts();
  const postIndex = posts.findIndex((item) => item.slug === slug);
  const post = posts[postIndex];

  if (!post) {
    notFound();
  }

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return (
    <ArchiveChrome>
      <article className="archive-post section-wrap">
        <header className="archive-post-header">
          <Link className="back-link" href="/archive">← Archive로 돌아가기</Link>
          <div className="archive-post-meta"><span>{post.category}</span><time dateTime={post.date}>{formatArchiveDate(post.date)}</time></div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="archive-tags">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        </header>
        <div className="archive-post-body">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
        <nav className="archive-post-navigation" aria-label="게시글 탐색">
          {previousPost ? <Link href={`/archive/${previousPost.slug}`}><small>PREVIOUS</small><strong>{previousPost.title}</strong></Link> : <span />}
          {nextPost ? <Link className="next-post" href={`/archive/${nextPost.slug}`}><small>NEXT</small><strong>{nextPost.title}</strong></Link> : <Link className="next-post" href="/archive"><small>INDEX</small><strong>Archive 전체 보기</strong></Link>}
        </nav>
      </article>
    </ArchiveChrome>
  );
}
