import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import artifact from "@/assets/kamalo-artifact.png";
import artifactLight from "@/assets/kamalo-artifact-light.png";

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
    links: [{ rel: "canonical", href: "https://kamalo.app/" }],
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
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCoinsVisible(true);
          io.disconnect();
        }
      },
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
      <section className="relative flex min-h-[100svh] flex-col justify-center px-5 pt-28 pb-20 sm:px-10 sm:pt-32 sm:pb-24">
        <div className="ember pointer-events-none absolute top-[-10%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                Coming soon · India
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-5 text-[clamp(2.75rem,11vw,9.5rem)] sm:mt-6">
                Pay.
                <br />
                <span className="text-ember">Get more.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base text-muted-foreground sm:mt-8 sm:text-lg">
                KAMALO is building a smarter way to make everyday payments more rewarding.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-10">
                <button
                  onClick={open}
                  className="cta-surface w-full rounded-full px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase sm:w-auto"
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

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              className="w-[46vw] max-w-[420px] sm:w-[44vw] lg:w-full"
              style={{ transform: `translateY(${scrollY * -0.04}px)` }}
            >
              <div className="float-slow">
                <img
                  src={artifactLight}
                  alt="The KAMALO mark, a token carved with a lotus emblem"
                  width={1024}
                  height={1024}
                  className="h-auto w-full drop-shadow-[0_40px_70px_oklch(0.185_0.014_58/0.25)] dark:hidden"
                />
                <img
                  src={artifact}
                  alt=""
                  width={1280}
                  height={1280}
                  className="hidden h-auto w-full drop-shadow-[0_50px_90px_rgba(0,0,0,0.65)] dark:block"
                />
              </div>
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
      <section className="hairline relative overflow-hidden px-5 py-24 sm:px-10 sm:py-44">
        <div className="ember pointer-events-none absolute inset-x-0 bottom-[-30%] h-[80vh] opacity-60" />
        <div
          ref={coinRef}
          className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <Reveal>
            <h2 className="display text-[clamp(2.2rem,7vw,6rem)]">Every move counts.</h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground">
              Collect. Unlock. Repeat.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl border border-border bg-surface/80 p-6 sm:p-14 backdrop-blur-sm text-center sm:text-left">
              <img
                src={coin}
                alt="KAMALO token"
                width={512}
                height={512}
                loading="lazy"
                className="float-slow h-20 w-20 shrink-0 rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(242,128,47,0.35)] sm:h-32 sm:w-32"
              />
              <div>
                <p className="display text-5xl text-reward tabular-nums sm:text-7xl">+{coins}</p>
                <p className="eyebrow mt-2 sm:mt-3">Kamalo coins</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — EXCLUSIVITY */}
      <section className="hairline px-5 py-24 text-center sm:px-10 sm:py-52">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,8.5vw,8rem)]">You could be early.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-md text-base sm:text-lg text-muted-foreground">
              Join the KAMALO list and hear it first when we open.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <button
              onClick={open}
              className="cta-surface mt-10 w-full sm:w-auto rounded-full px-12 py-5 sm:py-6 text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Join KAMALO
            </button>
          </Reveal>
        </div>
      </section>

      <SiteFooter onJoin={open} />

      {/* Mobile sticky CTA — only shown once scrolled past hero */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-all duration-300 sm:hidden ${
          scrollY > 400
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={scrollY <= 400}
      >
        <button
          onClick={open}
          className="cta-surface w-full rounded-full py-3.5 text-xs font-semibold tracking-[0.2em] uppercase shadow-lg"
        >
          Join KAMALO
        </button>
      </div>
      {scrollY > 400 && <div className="h-20 sm:hidden" />}

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
