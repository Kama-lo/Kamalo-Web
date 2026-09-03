import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { JoinModal } from "@/components/kamalo/JoinModal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KAMALO — The reward layer for everyday payments" },
      {
        name: "description",
        content:
          "KAMALO is building the reward layer for everyday payments. Built in India, designed for everyday life.",
      },
      { property: "og:title", content: "About KAMALO" },
      {
        property: "og:description",
        content: "We're building the reward layer for everyday payments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={() => setOpen(true)} />
      <main className="px-5 pt-28 pb-24 sm:px-10 sm:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="display mt-5 sm:mt-6 text-[clamp(2.2rem,8vw,6.5rem)]">
            We're building the reward layer for everyday payments.
          </h1>
          <p className="mt-8 sm:mt-10 text-base sm:text-lg text-muted-foreground">
            Money moves every day — for chai, for groceries, for the things you already buy. KAMALO
            makes that movement give something back, without asking you to change how you pay.
          </p>
          <p className="display mt-10 sm:mt-14 text-2xl sm:text-4xl">
            Built in India.
            <br />
            <span className="text-muted-foreground">Designed for everyday life.</span>
          </p>
          <button
            onClick={() => setOpen(true)}
            className="cta-surface mt-10 sm:mt-14 w-full sm:w-auto rounded-full px-10 py-4 sm:py-5 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Join KAMALO
          </button>
        </div>
      </main>
      <SiteFooter onJoin={() => setOpen(true)} />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
