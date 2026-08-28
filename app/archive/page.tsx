import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchiveChrome } from "@/components/archive-chrome";
import { archiveCategories, formatArchiveDate, getArchivePosts } from "@/lib/archive";

export const metadata: Metadata = {
  title: "Archive | 이정명",
  description: "개발, 경험, 생각을 기록하는 이정명의 개인 아카이브입니다.",
};

const categoryCopy = {
  Development: "만들고 부딪히며 배운 기술과 과정",
  Experience: "지나온 장면과 그 안에서 발견한 것",
  Thoughts: "오래 붙잡고 싶은 생각과 질문",
};

export default function ArchivePage() {
  const posts = getArchivePosts();
  return (
    <ArchiveChrome>
      <header className="archive-hero section-wrap">
        <div><p className="eyebrow" data-reveal>04 / Personal archive</p><h1><span className="title-line" data-reveal data-delay="70">기억하고 싶은</span><br /><span className="title-line" data-reveal data-delay="150"><em>장면과 생각.</em></span></h1></div>
        <div className="archive-intro" data-reveal data-delay="220"><p>만들면서 배운 것, 살아가며 오래 남은 시간, 그리고 아직 생각 중인 것들을 천천히 기록합니다.</p><span>{posts.length.toString().padStart(2, "0")} records · since 2026</span></div>
      </header>

      <nav className="archive-tabs section-wrap" aria-label="아카이브 카테고리">
        {archiveCategories.map((category, index) => <a href={`#archive-${category}`} data-reveal data-delay={String(70 + index * 60)} key={category}><span>0{index + 1}</span>{category}</a>)}
      </nav>

      <section className="archive-list section-wrap" aria-label="Archive posts">
        {archiveCategories.map((category, categoryIndex) => {
          const categoryPosts = posts.filter((post) => post.category === category);
          return (
            <section className={`archive-category-section category-${category.toLowerCase()}`} key={category} id={`archive-${category}`}>
              <div className="archive-category-heading" data-reveal>
                <div><span>0{categoryIndex + 1}</span><h2>{category}</h2></div>
                <p>{categoryCopy[category]}</p>
                <small>{categoryPosts.length.toString().padStart(2, "0")} records</small>
              </div>
              {categoryPosts.length ? (
                <div className="archive-grid">
                  {categoryPosts.map((post, index) => (
                    <Link className="archive-card" data-reveal data-delay={String(60 + index * 80)} href={`/archive/${post.slug}`} key={post.slug}>
                      <div className="archive-card-art" aria-hidden="true">
                        {post.thumbnail ? <Image className="archive-card-image" src={post.thumbnail} alt="" fill sizes="(max-width: 720px) 100vw, 50vw" /> : <><div className="archive-card-symbol"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><small>{category} · Journal</small></>}
                      </div>
                      <div className="archive-card-top"><span>{post.category}</span><time dateTime={post.date}>{formatArchiveDate(post.date)}</time></div>
                      <div className="archive-card-copy"><h3>{post.title}</h3><p>{post.description}</p><div className="archive-tags">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div>
                      <span className="card-arrow" aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              ) : <p className="archive-empty">아직 이 서랍에 담긴 기록이 없습니다.</p>}
            </section>
          );
        })}
      </section>
    </ArchiveChrome>
  );
}
