import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";

export function ArchiveChrome({ children }: { children: ReactNode }) {
  return (
    <main className="archive-site" id="top">
      <div className="ambient ambient-archive" aria-hidden="true" />
      <SiteNav archive />
      {children}
      <footer className="site-footer">
        <span>© 2026 LEE JUNG-MYUNG</span>
        <span>NOTES ON BUILDING &amp; LIVING</span>
        <Link href="/archive">BACK TO ARCHIVE ↑</Link>
      </footer>
    </main>
  );
}
