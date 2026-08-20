This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Archive

개인 기록은 `content/archive` 아래에 MDX 파일로 추가합니다. 파일명은 게시글 URL의 slug가 됩니다.

```mdx
---
title: 기록 제목
date: 2026-08-21
category: Thoughts
description: 목록에 표시할 짧은 설명
tags:
	- Reflection
	- Daily
thumbnail: /archive/example.jpg
---

본문을 Markdown으로 작성합니다. **MDX** 문법과 이미지도 사용할 수 있습니다.

![이미지 설명](/archive/example.jpg)
```

카테고리는 `Development`, `Experience`, `Thoughts` 중 하나를 사용합니다. 이미지는 `public/archive`에 넣고 frontmatter의 `thumbnail` 또는 본문 이미지 경로를 `/archive/파일명.jpg`처럼 작성합니다. 새 파일을 추가하면 빌드 시 `/archive/파일명` 경로가 자동으로 생성됩니다.

Vercel에서는 별도 데이터베이스나 환경 변수 설정이 필요하지 않습니다. MDX 파일과 `public` 이미지를 커밋해 배포하면 됩니다.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
