import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { FileText, Shield, Mail, ArrowUpRight } from "lucide-react";

import { JoinModal } from "./JoinModal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export interface TocItem {
  id: string;
  title: string;
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  subtitle,
  activeTab,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  subtitle?: string;
  activeTab?: "terms" | "privacy" | "contact";
  toc?: TocItem[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={() => setOpen(true)} />

      <main className="px-4 pt-28 pb-24 sm:px-8 sm:pt-44 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Top Legal Navigation Switcher */}
          {activeTab && (
            <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-4 sm:mb-10 sm:flex-wrap sm:pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-b border-border">
              <Link
                to="/terms"
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "terms"
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "border border-border bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "privacy"
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "border border-border bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <Shield className="h-3.5 w-3.5" />
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "contact"
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "border border-border bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <Mail className="h-3.5 w-3.5" />
                Support
              </Link>
            </div>
          )}

          {/* Header */}
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display mt-4 sm:mt-5 text-[clamp(2.2rem,6vw,4.5rem)]">{title}</h1>
            {subtitle && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
            )}
            {updated && (
              <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-3 py-1.5 font-mono text-[0.75rem] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {updated}
              </div>
            )}
          </div>

          {/* Quick Notice Card */}
          <div className="mt-6 sm:mt-8 rounded-2xl border border-border bg-surface/50 p-4 sm:p-6">
            <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1 min-w-0">
                <p className="font-semibold text-foreground break-words">
                  Kamal Intellect Private Limited · Platform:{" "}
                  <span className="font-mono text-primary">kamalo.app</span>
                </p>
                <p className="text-muted-foreground">
                  Governed under the laws of India · Jurisdiction: Mumbai, Maharashtra, India
                </p>
              </div>
              <a
                href="mailto:support@kamalo.app"
                className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs font-medium text-primary hover:underline"
              >
                support@kamalo.app
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Main Grid: TOC + Content */}
          <div className="mt-10 sm:mt-14 grid gap-8 sm:gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            {/* Table of contents sidebar on large screens */}
            {toc && toc.length > 0 ? (
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-4 rounded-2xl border border-border bg-surface/30 p-5 backdrop-blur-sm">
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Table of Contents
                  </p>
                  <nav className="space-y-1 text-xs">
                    {toc.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <span className="font-mono text-primary/70 mr-1.5">{index + 1}.</span>
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            ) : null}

            {/* Document Content */}
            <article
              className={`space-y-10 sm:space-y-12 text-[0.925rem] sm:text-[0.95rem] leading-relaxed text-muted-foreground min-w-0 break-words ${
                !toc || toc.length === 0 ? "lg:col-span-2 max-w-3xl" : ""
              }`}
            >
              {/* Mobile TOC Collapsible / Pill bar */}
              {toc && toc.length > 0 && (
                <div className="block lg:hidden rounded-2xl border border-border bg-surface/40 p-3.5 sm:p-4">
                  <p className="mb-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Jump to Section:
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {toc.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground hover:text-foreground"
                      >
                        {idx + 1}. {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {children}
            </article>
          </div>
        </div>
      </main>

      <SiteFooter onJoin={() => setOpen(true)} />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
