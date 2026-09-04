import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReducedMotion(true);
      setShown(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );
    io.observe(el);

    const fallback = setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      data-shown={shown}
      className={`reveal ${className}`}
      style={{
        transitionProperty: reducedMotion ? "none" : "opacity, transform",
        transitionDuration: reducedMotion ? "0ms" : "800ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: reducedMotion ? "0ms" : `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(24px)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}
