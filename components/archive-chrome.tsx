import Link from "next/link";
import type { ReactNode } from "react";

export function ArchiveChrome({ children }: { children: ReactNode }) {
  return (
    <main className="archive-site">
      <nav className="site-nav" aria-label="주요 메뉴">
        <Link className="brand" href="/">JM<span>.</span></Link>
        <div className="nav-links">
          <Link href="/#work">작업물</Link>
          <Link href="/#about">소개</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/#contact">연락하기</Link>
        </div>
        <Link className="availability" href="/#contact"><i /> Available for a new build</Link>
      </nav>
      {children}
      <footer className="site-footer">
        <span>© 2026 LEE JUNG-MYUNG</span>
        <span>MADE WITH CURIOSITY</span>
        <Link href="/archive">BACK TO ARCHIVE ↑</Link>
      </footer>
    </main>
  );
}
