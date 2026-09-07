import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio - LEE JEONGMYEONG",
  description: siteDescription,
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  verification: {
    google: "gAa-aT7kkEA8CD9-DuRnhlcZCuOhtEBXtu1Z3FgjMV0",
    other: {
      "naver-site-verification": "6a0ae81c4746004593f2d7cd98e7f45675ddb361",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7896176132444930" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col"><MotionController />{children}</body>
    </html>
  );
}
