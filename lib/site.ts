const fallbackSiteUrl = "http://localhost:3000";

function withProtocol(url: string) {
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

export const siteUrl = withProtocol(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    fallbackSiteUrl,
).replace(/\/$/, "");

export const siteName = "LEE JEONGMYEONG";
export const siteDescription = "아주대학교 소프트웨어학과 이정명의 포트폴리오";
