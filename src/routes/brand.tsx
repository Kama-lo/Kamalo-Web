import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { JoinModal } from "@/components/kamalo/JoinModal";
import { KamaloMark } from "@/components/kamalo/KamaloMark";
import { Reveal } from "@/components/kamalo/Reveal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";
import { Wordmark } from "@/components/kamalo/Wordmark";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "KAMALO Brand Kit — logo, palette, type, voice" },
      {
        name: "description",
        content:
          "The KAMALO brand kit: the lotus mark, wordmark, Ember Saffron palette, type scale, voice and social handles.",
      },
      { property: "og:title", content: "KAMALO Brand Kit" },
      {
        property: "og:description",
        content: "Logo, palette, typography, voice and handles for KAMALO.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Brand,
});

const palette = [
  { name: "Ink", token: "--background (dark)", cls: "bg-[oklch(0.158_0.012_58)]", note: "Canvas, night" },
  { name: "Paper", token: "--background (light)", cls: "bg-[oklch(0.973_0.013_86)]", note: "Canvas, day" },
  { name: "Ember Saffron", token: "--primary", cls: "bg-primary", note: "The KAMALO colour" },
  { name: "Coin Ochre", token: "--reward", cls: "bg-reward", note: "Rewards only" },
  { name: "Ash", token: "--muted-foreground", cls: "bg-muted-foreground", note: "Secondary copy" },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="hairline grid gap-6 py-10 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10">
      <p className="eyebrow pt-2">{label}</p>
      <div>{children}</div>
    </div>
  );
}

function Brand() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteNav onJoin={() => setOpen(true)} />
      <main className="px-5 pt-32 pb-24 sm:px-10 sm:pt-52">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow">Brand kit · v1.0</p>
            <h1 className="display mt-5 text-[clamp(2.6rem,9vw,6.5rem)]">
              How KAMALO
              <br />
              <span className="text-ember">looks and sounds.</span>
            </h1>
          </Reveal>

          <div className="mt-16">
            <Row label="The mark">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-surface">
                  <KamaloMark className="h-20 w-20 text-primary" title="KAMALO mark" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-foreground">
                  <KamaloMark className="h-20 w-20 text-background" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-primary">
                  <KamaloMark className="h-20 w-20 text-primary-foreground" />
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Six petals from one centre — a lotus drawn as geometry, not decoration. Keep clear
                space of one petal on every side. Never rotate, stretch, outline or re-colour it
                outside these three lockups.
              </p>
            </Row>

            <Row label="Wordmark">
              <div className="flex flex-wrap items-center gap-10 rounded-2xl border border-border bg-surface p-8">
                <Wordmark className="scale-125 origin-left" />
                <Wordmark showMark={false} className="scale-125 origin-left" />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                KAMALO is always set in caps, Bricolage Grotesque, tracked at 0.32em. Mark on the
                left for headers; wordmark alone when the mark already appears nearby.
              </p>
            </Row>

            <Row label="Palette">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {palette.map((c) => (
                  <div key={c.name} className="overflow-hidden rounded-2xl border border-border">
                    <div className={`h-20 w-full ${c.cls}`} />
                    <div className="bg-surface p-3">
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">{c.token}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Warm neutrals, one saffron, one ochre. No blues, no violets, no gradients beyond the
                ember wash. Ochre is reserved for rewards so it always means something.
              </p>
            </Row>

            <Row label="Typography">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <p className="display text-5xl sm:text-7xl">Pay. Get more.</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  Bricolage Grotesque · 700 · −0.045em
                </p>
                <p className="mt-8 text-lg">
                  Instrument Sans carries every line of copy — plain, warm, unhurried.
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  Instrument Sans · 400–600 · JetBrains Mono for labels and codes
                </p>
              </div>
            </Row>

            <Row label="Voice">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="eyebrow">We say</p>
                  <p className="mt-4 text-lg">Pay. Get more.</p>
                  <p className="text-lg">Every move counts.</p>
                  <p className="text-lg">You could be early.</p>
                </div>
                <div className="rounded-2xl border border-dashed border-border p-6">
                  <p className="eyebrow">We never say</p>
                  <p className="mt-4 text-lg text-muted-foreground line-through">
                    Revolutionising the financial ecosystem
                  </p>
                  <p className="text-lg text-muted-foreground line-through">Seamless synergy</p>
                  <p className="text-lg text-muted-foreground line-through">Unlock your potential</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Short sentences. Full stops. Never more than two lines when one will do.
              </p>
            </Row>

            <Row label="Handles">
              <ul className="grid gap-3 font-mono text-sm sm:grid-cols-3">
                <li className="rounded-xl border border-border bg-surface px-4 py-3">@kamalo · Instagram</li>
                <li className="rounded-xl border border-border bg-surface px-4 py-3">@kamalo · X</li>
                <li className="rounded-xl border border-border bg-surface px-4 py-3">/kamalo · LinkedIn</li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">hello@kamalo.in · kamalo.in</p>
            </Row>
          </div>
        </div>
      </main>
      <SiteFooter onJoin={() => setOpen(true)} />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
