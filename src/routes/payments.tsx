import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Lock,
  KeyRound,
  Server,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Mail,
  ShieldQuestion,
  FileText,
  Shield,
  ArrowUpRight,
  ArrowRight,
  User,
  Fingerprint,
} from "lucide-react";

import { JoinModal } from "@/components/kamalo/JoinModal";
import { KamaloMark } from "@/components/kamalo/KamaloMark";
import { Reveal } from "@/components/kamalo/Reveal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Payments & Security — KAMALO" },
      {
        name: "description",
        content:
          "How payments work with KAMALO: the customer journey from purchase to reward, and the security principles behind our payment infrastructure.",
      },
      { property: "og:title", content: "Payments & Security — KAMALO" },
      {
        property: "og:description",
        content:
          "The customer journey from purchase to reward, and the security principles behind KAMALO's payment infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamalo.app/payments" }],
  }),
  component: Payments,
});

const journey = [
  {
    step: "01",
    title: "Customer",
    desc: "You — discovering something worth buying, or a bill that's due.",
  },
  {
    step: "02",
    title: "KAMALO",
    desc: "You open KAMALO to see the offer, the reward rate, and how you'd like to pay.",
  },
  {
    step: "03",
    title: "Service / Offer / Purchase",
    desc: "You choose what you're paying for — a merchant purchase, a bill, or a partner offer.",
  },
  {
    step: "04",
    title: "Secure Payment",
    desc: "You pay the way you already do — UPI, card, or net banking — over an encrypted connection.",
  },
  {
    step: "05",
    title: "Payment Processing",
    desc: "Your payment is authorised and processed by regulated, authorised payment infrastructure.",
  },
  {
    step: "06",
    title: "Confirmation",
    desc: "You receive a confirmation, and any KAMALO rewards are credited to your account ledger.",
  },
];

const security = [
  {
    icon: Lock,
    title: "Secure HTTPS communication",
    desc: "Every page and form on kamalo.app is served over encrypted HTTPS, end to end.",
  },
  {
    icon: KeyRound,
    title: "Encrypted payment communication",
    desc: "Payment-related data in transit is designed to travel over modern TLS encryption — never in plaintext.",
  },
  {
    icon: Fingerprint,
    title: "Secure authentication",
    desc: "Access to your KAMALO account and any payment action is designed to require secure authentication, protecting your identity and session.",
  },
  {
    icon: Server,
    title: "Server-side credential protection",
    desc: "Payment credentials and secrets are designed to be handled only in secure server-side environments, never exposed in the browser.",
  },
  {
    icon: CheckCircle2,
    title: "Transaction status verification",
    desc: "Every payment is designed to be verified against the payment processor before it is ever marked complete.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment infrastructure",
    desc: "KAMALO is designed to integrate with authorised payment infrastructure, rather than handling raw card or bank data directly.",
  },
  {
    icon: RefreshCw,
    title: "Payment status reconciliation",
    desc: "Transaction and reward status are designed to be reconciled with the payment processor, so your ledger stays accurate.",
  },
];

function Payments() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={() => setOpen(true)} />

      <main className="px-5 pt-28 pb-24 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <Reveal>
            <p className="eyebrow">Payments & Security</p>
            <h1 className="display mt-5 text-[clamp(2.2rem,8vw,6.5rem)]">
              How paying with
              <br />
              <span className="text-ember">KAMALO works.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
              KAMALO is the reward layer for everyday payments —{" "}
              <Link to="/about" className="text-primary hover:underline">
                read more about KAMALO
              </Link>
              . This page explains, in plain terms, how a payment is meant to flow through
              KAMALO and the security principles behind that flow.
            </p>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={160}>
            <div className="mt-8 rounded-2xl border border-border bg-surface/50 p-4 sm:mt-10 sm:p-6">
              <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 min-w-0">
                  <p className="font-semibold text-foreground break-words">
                    Kamal Intellect Private Limited · Platform:{" "}
                    <span className="font-mono text-primary">kamalo.app</span>
                  </p>
                  <p className="text-muted-foreground">
                    Currently in pre-launch (waitlist) stage · Mumbai, Maharashtra, India
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
          </Reveal>

          {/* SECTION — CUSTOMER JOURNEY */}
          <section className="mt-16 sm:mt-24">
            <Reveal>
              <p className="eyebrow">The customer journey</p>
              <h2 className="display mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">
                From purchase to reward.
              </h2>
            </Reveal>

            <div className="mt-10 sm:mt-14">
              {journey.map((item, i) => (
                <Reveal key={item.step} delay={i * 70}>
                  <div className="flex gap-5 sm:gap-8">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary">
                        {item.step}
                      </span>
                      {i < journey.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                      )}
                    </div>
                    <div className={`min-w-0 ${i < journey.length - 1 ? "pb-8 sm:pb-10" : ""}`}>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                KAMALO is currently open for waitlist sign-ups only. The flow above describes the
                intended customer experience once the KAMALO platform is live — it is not a
                description of a currently active payment product.
              </p>
            </Reveal>
          </section>

          {/* SECTION — SECURITY */}
          <section className="hairline mt-16 pt-16 sm:mt-24 sm:pt-24">
            <Reveal>
              <p className="eyebrow">Payment security</p>
              <h2 className="display mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">
                Built on secure foundations.
              </h2>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                KAMALO is designed to integrate with authorised payment infrastructure. These are
                the security and infrastructure principles our payment architecture is being
                built around.
              </p>
            </Reveal>

            {/* Simple visual flow: Customer -> KAMALO -> Secure Payment Infrastructure -> Confirmation */}
            <Reveal delay={60}>
              <div className="mt-10 rounded-3xl border border-border bg-surface/30 p-5 sm:mt-14 sm:p-8">
                <p className="eyebrow text-center sm:text-left">At a glance</p>
                <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-border bg-background p-5 text-center sm:p-6">
                    <User className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground">Customer</p>
                  </div>

                  <ArrowRight
                    className="mx-auto h-5 w-5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0"
                    aria-hidden="true"
                  />

                  <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-border bg-background p-5 text-center sm:p-6">
                    <KamaloMark variant="vector" className="h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold text-foreground">KAMALO</p>
                  </div>

                  <ArrowRight
                    className="mx-auto h-5 w-5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0"
                    aria-hidden="true"
                  />

                  <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center sm:p-6">
                    <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground">
                      Secure Payment Infrastructure
                    </p>
                  </div>

                  <ArrowRight
                    className="mx-auto h-5 w-5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0"
                    aria-hidden="true"
                  />

                  <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-border bg-background p-5 text-center sm:p-6">
                    <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground">Payment Confirmation</p>
                  </div>
                </div>
                <p className="mt-5 text-center text-xs text-muted-foreground sm:text-sm">
                  A high-level view only — payments are designed to be routed through secure,
                  authorised infrastructure rather than handled directly by KAMALO.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
              {security.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-surface/50 p-5 space-y-2 sm:p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <s.icon className="h-4 w-4 text-primary shrink-0" />
                      {s.title}
                    </div>
                    <p className="text-xs text-muted-foreground sm:text-sm">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground sm:mt-8 sm:p-5">
                <ShieldQuestion className="h-4 w-4 shrink-0 text-primary" />
                <p>
                  KAMALO does not process card, bank, or wallet credentials directly — payment
                  processing is designed to be handled by authorised, regulated payment
                  infrastructure providers. No card numbers, CVVs, or bank credentials are ever
                  stored on KAMALO's own systems.
                </p>
              </div>
            </Reveal>
          </section>

          {/* SECTION — AFTER PAYMENT */}
          <section className="hairline mt-16 pt-16 sm:mt-24 sm:pt-24">
            <Reveal>
              <p className="eyebrow">After payment</p>
              <h2 className="display mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">
                What happens next.
              </h2>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Once KAMALO launches, completing a payment is intended to trigger an immediate
                confirmation, with any eligible rewards credited to your KAMALO account ledger.
                Reward accrual, clearing, and payout mechanics are described in full under{" "}
                <Link to="/terms#rewards-referrals" className="text-primary hover:underline">
                  Rewards &amp; Commissions
                </Link>{" "}
                and{" "}
                <Link to="/terms#rupay-card" className="text-primary hover:underline">
                  the KAMALO RuPay Card
                </Link>{" "}
                sections of our Terms of Service.
              </p>
            </Reveal>
          </section>

          {/* SECTION — HELP */}
          <section className="hairline mt-16 pt-16 sm:mt-24 sm:pt-24">
            <Reveal>
              <p className="eyebrow">Need help?</p>
              <h2 className="display mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">Talk to us.</h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    General & waitlist questions
                  </div>
                  <a
                    href="mailto:hello@kamalo.app"
                    className="block font-mono text-sm text-primary hover:underline"
                  >
                    hello@kamalo.app
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    Support & Redressal Desk
                  </div>
                  <a
                    href="mailto:support@kamalo.app"
                    className="block font-mono text-sm text-primary hover:underline"
                  >
                    support@kamalo.app
                  </a>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                Full contact & support details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </section>

          {/* SECTION — LEGAL */}
          <section className="hairline mt-16 pt-16 sm:mt-24 sm:pt-24">
            <Reveal>
              <p className="eyebrow">Legal & policies</p>
              <h2 className="display mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">Where to read more.</h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
                <Link
                  to="/terms"
                  className="group rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:bg-surface sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      Terms of Service
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    Rewards, referral commissions, card fees, and payout rules.
                  </p>
                </Link>
                <Link
                  to="/privacy"
                  className="group rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:bg-surface sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <Shield className="h-4 w-4 text-primary" />
                      Privacy Policy
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    How payment and personal data is collected, secured, and retained.
                  </p>
                </Link>
              </div>
            </Reveal>
          </section>

          <Reveal delay={120}>
            <button
              onClick={() => setOpen(true)}
              className="cta-surface mt-16 w-full sm:mt-20 sm:w-auto rounded-full px-10 py-4 sm:py-5 text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Join KAMALO
            </button>
          </Reveal>
        </div>
      </main>

      <SiteFooter onJoin={() => setOpen(true)} />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
