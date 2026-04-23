"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Animação: "up" (padrão), "fade", "scale" */
  variant?: "up" | "fade" | "scale";
  /** Delay em ms (útil para stagger manual) */
  delay?: number;
  /** Threshold do IntersectionObserver (0–1) */
  threshold?: number;
}

export default function FadeIn({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Se o elemento já está visível na viewport ao montar, anima imediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass =
    variant === "scale"
      ? "animate-on-scroll animate-scale-in"
      : variant === "fade"
        ? "animate-on-scroll animate-fade-in"
        : "animate-on-scroll";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
