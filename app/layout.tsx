import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - LEE JEONGMYEONG",
  description: "아주대학교 소프트웨어학과 이정명의 포트폴리오",
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
