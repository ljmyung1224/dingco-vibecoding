"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionController() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactMotion = window.matchMedia("(max-width: 800px)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    revealItems.forEach((item) => {
      const delay = item.dataset.delay;
      if (delay) item.style.setProperty("--reveal-delay", `${compactMotion ? Number(delay) * 0.6 : delay}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav-shell");
    if (!nav) return;
    let frame = 0;
    const updateNav = () => {
      frame = 0;
      nav.classList.toggle("is-scrolled", window.scrollY > 36);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNav);
    };
    updateNav();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
