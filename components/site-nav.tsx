import Link from "next/link";

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5.2 7.4A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.4ZM3.3 21h3.8V9H3.3v12Zm6 0h3.8v-6.6c0-1.74.33-3.42 2.49-3.42 2.13 0 2.16 1.99 2.16 3.53V21h3.8v-7.32c0-3.6-.78-6.37-4.98-6.37-2.02 0-3.37 1.11-3.92 2.16h-.05V9H9.3v12Z" />
    </svg>
  );
}

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
        <div className="nav-social" role="group" aria-label="소셜 프로필">
          <a href="https://github.com/ljmyung1224" target="_blank" rel="noreferrer" aria-label="GitHub 프로필"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/ljmyung1224" target="_blank" rel="noreferrer" aria-label="LinkedIn 프로필"><LinkedInIcon /></a>
        </div>
      </nav>
    </div>
  );
}
