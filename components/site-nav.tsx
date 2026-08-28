import Link from "next/link";

export function SiteNav({ archive = false }: { archive?: boolean }) {
  const prefix = archive ? "/" : "";
  return (
    <div className="nav-shell">
      <nav className="site-nav" aria-label="주요 메뉴">
        <Link className="brand" href={archive ? "/" : "#top"}>JM<span>.</span></Link>
        <div className="nav-links">
          <Link href={`${prefix}#work`}>Work</Link>
          <Link href={`${prefix}#about`}>About</Link>
          <Link href={`${prefix}#contact`}>Contact</Link>
          <Link className={archive ? "is-active" : ""} href="/archive">Archive</Link>
        </div>
        <Link className="availability" href={`${prefix}#contact`}><i /> Available <span>↗</span></Link>
      </nav>
    </div>
  );
}
