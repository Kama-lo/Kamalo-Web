import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import artifact from "@/assets/kamalo-artifact.png";
import coin from "@/assets/kamalo-coin.png";
import { JoinModal } from "@/components/kamalo/JoinModal";
import { Reveal } from "@/components/kamalo/Reveal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAMALO — Everyday payments, more rewarding" },
      {
        name: "description",
        content:
          "KAMALO is building a smarter way to make everyday payments more rewarding. Join the list and be early.",
      },
      { property: "og:title", content: "KAMALO — Everyday payments, more rewarding" },
      {
        property: "og:description",
        content: "Pay the way you already do. Get more back. Join the KAMALO list.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
}

function Index() {
  const [joinOpen, setJoinOpen] = useState(false);
  const coinRef = useRef<HTMLDivElement>(null);
  const [coinsVisible, setCoinsVisible] = useState(false);
  const coins = useCountUp(250, coinsVisible);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = coinRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setCoinsVisible(true), io.disconnect()),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = () => setJoinOpen(true);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={open} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-32 pb-24 sm:px-10">
        <div className="ember pointer-events-none absolute top-[-10%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 opacity-70" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Coming soon · India</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(3.4rem,13vw,9.5rem)]">
                Pay.
                <br />
                <span className="text-ember">Get more.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-lg text-muted-foreground">
                KAMALO is building a smarter way to make everyday payments more rewarding.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  onClick={open}
                  className="cta-surface rounded-full px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase"
                >
                  Join KAMALO
                </button>
                <a
                  href="#idea"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  See what's coming ↓
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="float-slow w-[70vw] max-w-[440px] lg:w-full"
              style={{ transform: `translateY(${scrollY * -0.04}px)` }}
            >
              <img
                src={artifact}
                alt="The KAMALO mark, a metal token with a glowing lotus emblem"
                width={1280}
                height={1280}
                className="h-auto w-full drop-shadow-[0_50px_90px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE IDEA */}
      <section id="idea" className="hairline px-6 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display max-w-4xl text-[clamp(2.6rem,7.5vw,6rem)]">
              What if paying gave you more back?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
              {[
                ["Discover", "something."],
                ["Pay", "normally."],
                ["Get", "rewarded."],
              ].map(([a, b], i) => (
                <div key={a} className="bg-background p-8 sm:p-10">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <p className="display mt-8 text-3xl sm:text-4xl">
                    {a}
                    <br />
                    <span className="text-muted-foreground">{b}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — THE EXPERIENCE */}
      <section className="hairline px-6 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow">The KAMALO experience</p>
          </Reveal>
          <div className="mt-14 divide-y divide-border">
            {[
              ["Discover", "Something worth buying."],
              ["Pay", "The way you already do."],
              ["Get more", "Rewards, cashback, and more."],
            ].map(([title, line], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="grid gap-4 py-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:py-14">
                  <h3 className="display text-[clamp(2.4rem,6vw,4.5rem)] uppercase">{title}</h3>
                  <p className="self-end text-xl text-muted-foreground sm:text-2xl">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COINS */}
      <section className="hairline relative overflow-hidden px-6 py-32 sm:px-10 sm:py-44">
        <div className="ember pointer-events-none absolute inset-x-0 bottom-[-30%] h-[80vh] opacity-60" />
        <div ref={coinRef} className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-[clamp(2.6rem,7.5vw,6rem)]">Every move counts.</h2>
            <p className="mt-8 text-lg text-muted-foreground">Collect. Unlock. Repeat.</p>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative flex items-center gap-8 rounded-3xl border border-border bg-surface/80 p-10 backdrop-blur-sm sm:p-14">
              <img
                src={coin}
                alt="KAMALO coin"
                width={912}
                height={912}
                loading="lazy"
                className="float-slow h-24 w-24 shrink-0 sm:h-32 sm:w-32"
              />
              <div>
                <p className="display text-6xl text-reward tabular-nums sm:text-7xl">+{coins}</p>
                <p className="eyebrow mt-3">Kamalo coins</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — EXCLUSIVITY */}
      <section className="hairline px-6 py-32 text-center sm:px-10 sm:py-52">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="display text-[clamp(3rem,10vw,8rem)]">You could be early.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-md text-lg text-muted-foreground">
              Join the KAMALO list and hear it first when we open.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <button
              onClick={open}
              className="cta-surface mt-12 rounded-full px-12 py-6 text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Join KAMALO
            </button>
          </Reveal>
        </div>
      </section>

      <SiteFooter onJoin={open} />

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/85 p-4 backdrop-blur-xl sm:hidden">
        <button
          onClick={open}
          className="cta-surface w-full rounded-full py-4 text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Join KAMALO
        </button>
      </div>
      <div className="h-20 sm:hidden" />

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
