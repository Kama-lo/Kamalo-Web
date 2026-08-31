import { useState, type ReactNode } from "react";

import { JoinModal } from "./JoinModal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteNav onJoin={() => setOpen(true)} />
      <main className="px-6 pt-40 pb-28 sm:px-10 sm:pt-52">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-6 text-[clamp(2.4rem,7vw,4.5rem)]">{title}</h1>
          {updated && <p className="mt-4 font-mono text-xs text-muted-foreground">{updated}</p>}
          <div className="mt-12 space-y-8 text-[0.975rem] leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-2 [&_a]:text-primary">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter onJoin={() => setOpen(true)} />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
