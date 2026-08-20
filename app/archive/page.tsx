import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchiveChrome } from "@/components/archive-chrome";
import { archiveCategories, formatArchiveDate, getArchivePosts } from "@/lib/archive";

export const metadata: Metadata = {
  title: "Archive | 이정명",
  description: "개발, 경험, 생각을 기록하는 이정명의 개인 아카이브입니다.",
};

export default function ArchivePage() {
  const posts = getArchivePosts();

  return (
    <ArchiveChrome>
      <header className="archive-hero section-wrap">
        <div>
          <p className="eyebrow">04 / Personal archive</p>
          <h1>기억하고 싶은<br /><em>장면들.</em></h1>
        </div>
        <p className="archive-intro">만들면서 배운 것, 살아가며 오래 남은 순간, 그리고 아직 생각 중인 것들을 천천히 기록합니다.</p>
      </header>

      <section className="archive-list section-wrap" aria-label="Archive posts">
        <div className="archive-list-heading">
          <p className="eyebrow">All entries</p>
          <span>{posts.length.toString().padStart(2, "0")} records</span>
        </div>
        <div className="archive-category-sections">
          {archiveCategories.map((category) => {
            const categoryPosts = posts.filter((post) => post.category === category);

            return (
              <section className="archive-category-section" key={category} aria-labelledby={`archive-${category}`}>
                <div className="archive-category-heading">
                  <h2 id={`archive-${category}`}>{category}</h2>
                  <span>{categoryPosts.length.toString().padStart(2, "0")} Records</span>
                </div>
                {categoryPosts.length > 0 ? (
                  <div className="archive-grid">
                    {categoryPosts.map((post, index) => (
                      <Link className={`archive-card archive-card-${(index % 3) + 1}`} href={`/archive/${post.slug}`} key={post.slug}>
                        <div className="archive-card-top">
                          <span>{post.category}</span>
                          <span>{formatArchiveDate(post.date)}</span>
                        </div>
                        <div className="archive-card-art" aria-hidden="true">
                          {post.thumbnail ? <Image className="archive-card-image" src={post.thumbnail} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" /> : <><span>{String(index + 1).padStart(2, "0")}</span><i /></>}
                        </div>
                        <div className="archive-card-copy">
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                          <div className="archive-tags">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="archive-empty">No entries yet.</p>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </ArchiveChrome>
  );
}
