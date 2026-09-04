import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Share2,
  UserCheck,
  AlertCircle,
  FileCheck,
} from "lucide-react";

import { LegalPage, type TocItem } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — KAMALO | Kamal Intellect Private Limited" },
      {
        name: "description",
        content:
          "Privacy Policy governing the collection, use, security, and disclosure of personal data across the KAMALO Platform (kamalo.app) by Kamal Intellect Private Limited in compliance with the DPDP Act, 2023 and IT Rules.",
      },
      { property: "og:title", content: "Privacy Policy — KAMALO" },
      {
        property: "og:description",
        content:
          "How Kamal Intellect Private Limited collects, protects, and handles your data on the KAMALO Platform.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamalo.app/privacy" }],
  }),
  component: Privacy,
});

const TOC: TocItem[] = [
  { id: "overview", title: "Overview & Corporate Scope" },
  { id: "data-collection", title: "Information We Collect" },
  { id: "purpose-processing", title: "Purpose & Legal Grounds" },
  { id: "cookies-tracking", title: "Cookies & Tracking" },
  { id: "sharing-disclosure", title: "Sharing & Disclosures" },
  { id: "security-measures", title: "Data Security Standards" },
  { id: "data-retention", title: "Data Retention & Disposal" },
  { id: "dpdp-rights", title: "Your DPDP Act Rights" },
  { id: "opt-out", title: "Opt-Out & Communication" },
  { id: "support-contact", title: "Support & Contact" },
];

function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy & Data Protection"
      title="Privacy Policy"
      updated="Last updated: October 2025 · Effective September 2026"
      subtitle="Kamal Intellect Private Limited is committed to upholding the highest standards of data security, transparent processing, and individual privacy on the KAMALO platform."
      activeTab="privacy"
      toc={TOC}
    >
      {/* 1. Overview */}
      <section id="overview" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            01
          </span>
          <h2 className="text-xl font-bold text-foreground">Overview & Corporate Scope</h2>
        </div>
        <p>
          This Privacy Policy (&ldquo;Policy&rdquo;) outlines how{" "}
          <strong>Kamal Intellect Private Limited</strong> (operating the <strong>KAMALO</strong>{" "}
          brand and the website located at{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-foreground">
            https://kamalo.app
          </code>
          , along with its mobile applications, Single Sign-On services, and rewards ecosystem;
          collectively, the &ldquo;Platform&rdquo;) collects, stores, processes, uses, and
          safeguards personal data provided by visitors, waitlist applicants, registered users, and
          merchant partners.
        </p>
        <p>
          We design our data collection and protection architectures in strict compliance with the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (&ldquo;DPDPA&rdquo;)</strong>, the{" "}
          <strong>Information Technology Act, 2000</strong>, and the Information Technology
          (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information)
          Rules, 2011 (&ldquo;SPDI Rules&rdquo;).
        </p>
        <p>
          By accessing the KAMALO Platform, submitting your mobile number to join our launch
          waitlist, or enrolling in our services, you expressly consent to the practices described
          in this Policy.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section id="data-collection" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            02
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Categories of Information We Collect
          </h2>
        </div>
        <p>
          To deliver a secure, seamless, and rewarding experience, we collect specific categories of
          personal information provided by you or generated automatically during your interactions:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1.5">
            <p className="font-semibold text-foreground">A. Waitlist Information</p>
            <p className="text-muted-foreground">
              When joining the launch list, we collect your 10-digit mobile telephone number,
              referral invite code, submission timestamp, and approximate geographical region.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1.5">
            <p className="font-semibold text-foreground">B. Profile & Identity Data</p>
            <p className="text-muted-foreground">
              Upon full account registration: Legal name, date of birth, gender, residential
              address, verified email address, and mobile number.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1.5">
            <p className="font-semibold text-foreground">C. KYC & Statutory Financial Data</p>
            <p className="text-muted-foreground">
              For reward disbursements and statutory compliance: Permanent Account Number (PAN),
              masked Aadhaar data, Voter ID / Driving License / Passport copies, and bank
              verification details (account number, IFSC, cancelled cheque).
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1.5">
            <p className="font-semibold text-foreground">D. Transaction & Referral Telemetry</p>
            <p className="text-muted-foreground">
              Transaction amount, merchant category, referral lineage graph (Direct and Indirect
              Referees across 5 levels), Hold Account balances, and Tax Deducted at Source (TDS)
              filings.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1.5 sm:col-span-2">
            <p className="font-semibold text-foreground">E. Device, Hardware & Telemetry Data</p>
            <p className="text-muted-foreground">
              Internet Protocol (IP) address, operating system, device hardware model, International
              Mobile Station Equipment Identity (IMEI) or unique device identifier, telecom network
              provider, emulator detection signals, crash diagnostics, and session security tokens.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Purpose & Legal Grounds */}
      <section id="purpose-processing" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            03
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Purpose & Legal Grounds for Processing
          </h2>
        </div>
        <p>
          We process your personal information strictly for lawful, legitimate, and specified
          purposes, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
          <li>
            <strong>Service Delivery & Account Management:</strong> Administering your waitlist
            access, Single Sign-On (SSOID) authentication, and maintaining your profile.
          </li>
          <li>
            <strong>Rewards, Clearing & Payouts:</strong> Calculating cashback, tracking 5-tier
            referral commissions between Hold, Under Clearing, and Commission accounts, and routing
            bank transfers.
          </li>
          <li>
            <strong>Statutory Compliance:</strong> Complying with Reserve Bank of India (RBI)
            directions, Prevention of Money Laundering Act, 2002 (PMLA), and Income Tax Act
            obligations (including mandatory TDS deductions on referral earnings).
          </li>
          <li>
            <strong>Fraud Detection & Device Integrity:</strong> Identifying automated bots,
            Android/iOS emulators, multi-SIM farming, synthetic identities, and preventing financial
            crime.
          </li>
          <li>
            <strong>Service Communications:</strong> Dispatching essential one-time passwords
            (OTPs), transaction alerts, security notices, and customer support responses.
          </li>
          <li>
            <strong>Personalized Offers:</strong> Providing relevant merchant rewards and platform
            updates, subject to your right to opt out of promotional messages.
          </li>
        </ul>
      </section>

      {/* 4. Cookies */}
      <section id="cookies-tracking" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            04
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Cookies & Device Tracking Technologies
          </h2>
        </div>
        <p>
          We use cookies, pixel tags, and local storage tokens to analyze website traffic, maintain
          login sessions, measure promotional effectiveness, and promote platform security.
        </p>
        <div className="rounded-xl border border-border bg-surface/50 p-4 space-y-2 text-xs">
          <p className="font-semibold text-foreground">Session vs. Persistent Cookies:</p>
          <p className="text-muted-foreground">
            Most of our cookies are &ldquo;session cookies,&rdquo; which are automatically deleted
            from your device storage at the end of your browser session. You are free to decline
            cookies if your device settings permit; however, certain features, such as persistent
            authentication and interactive reward calculations, may be impaired.
          </p>
        </div>
      </section>

      {/* 5. Sharing & Disclosures */}
      <section id="sharing-disclosure" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            05
          </span>
          <h2 className="text-xl font-bold text-foreground">Sharing & Third-Party Disclosures</h2>
        </div>
        <p>
          <strong>We do not sell, rent, or trade your personal information</strong> with third
          parties for independent marketing purposes. Disclosures occur strictly on a need-to-know
          basis under binding confidentiality and data protection agreements:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <Share2 className="h-3.5 w-3.5 text-primary" />
              Banking & Payout Partners
            </p>
            <p className="text-muted-foreground">
              Shared with RBI-licensed banking institutions and payment partners for account
              verification, direct payout disbursements, and transaction clearing.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-primary" />
              Payment Aggregators & Gateways
            </p>
            <p className="text-muted-foreground">
              Shared with certified payment gateways strictly to facilitate UPI, net banking, and
              card settlements.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5 text-primary" />
              Statutory & Law Enforcement Bodies
            </p>
            <p className="text-muted-foreground">
              Disclosed if mandated by lawful subpoenas, court orders, or statutory notices issued
              by tax, cybercrime, or regulatory authorities under Indian law.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-1">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-primary" />
              Corporate Successors & Restructuring
            </p>
            <p className="text-muted-foreground">
              In the event of a merger, acquisition, or amalgamation, the successor entity will
              remain bound by the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Security Standards */}
      <section id="security-measures" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            06
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Data Security Standards & Infrastructure
          </h2>
        </div>
        <p>
          Kamal Intellect Private Limited implements rigorous technical and organizational security
          measures in compliance with ISO/IEC 27001 standards and the Information Technology (SPDI)
          Rules, 2011:
        </p>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
            <Lock className="h-4 w-4 text-primary" />
            Security & Tokenization Safeguards
          </div>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              <strong>Transit Encryption:</strong> All data transmitted to and from kamalo.app is
              encrypted using Transport Layer Security (TLS 1.3).
            </li>
            <li>
              <strong>Storage Encryption:</strong> Sensitive personal information, KYC indices, and
              financial identifiers are secured using AES-256 encryption.
            </li>
            <li>
              <strong>Cardholder Protection:</strong> Payment card credentials (CVV, card PIN) are
              never stored on KAMALO servers and are tokenized via RBI-mandated frameworks.
            </li>
            <li>
              <strong>Access Controls:</strong> Strict role-based employee access, multi-factor
              authentication, and automated intrusion detection monitoring.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Data Retention */}
      <section id="data-retention" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            07
          </span>
          <h2 className="text-xl font-bold text-foreground">Data Retention & Disposal Schedules</h2>
        </div>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it
          was collected, or to satisfy statutory, legal, accounting, and tax compliance
          requirements:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
          <li>
            <strong>Waitlist Information:</strong> Retained until the public launch of KAMALO or
            until you request its deletion.
          </li>
          <li>
            <strong>Active User Accounts:</strong> Maintained throughout your active membership
            tenure on the Platform.
          </li>
          <li>
            <strong>Statutory Financial & KYC Records:</strong> In accordance with the Prevention of
            Money Laundering Act and Indian tax regulations, KYC documentation and transaction
            ledger entries are retained for a minimum period of{" "}
            <strong>five (5) to eight (8) years</strong> following account termination or
            transaction closure.
          </li>
        </ul>
      </section>

      {/* 8. DPDP Act Rights */}
      <section id="dpdp-rights" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            08
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Your Rights Under the Digital Personal Data Protection Act
          </h2>
        </div>
        <p>As a Data Principal under the DPDP Act, 2023, you hold specific statutory rights:</p>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-border bg-surface/40 p-3.5 space-y-1">
            <p className="font-semibold text-foreground">Right of Access</p>
            <p className="text-muted-foreground">
              Request a summary of your personal data processed by us and the identities of data
              processors with whom it has been shared.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-3.5 space-y-1">
            <p className="font-semibold text-foreground">Right to Correction & Updating</p>
            <p className="text-muted-foreground">
              Request correction, completion, or updating of inaccurate or outdated personal records
              in your account profile.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-3.5 space-y-1">
            <p className="font-semibold text-foreground">Right to Erasure & Withdrawal</p>
            <p className="text-muted-foreground">
              Withdraw your consent and request deletion of personal information, subject to
              mandatory statutory retention rules.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/40 p-3.5 space-y-1">
            <p className="font-semibold text-foreground">Right to Nominate</p>
            <p className="text-muted-foreground">
              Designate another individual to exercise your privacy rights in the event of death or
              physical/mental incapacity.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Opt-Out */}
      <section id="opt-out" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            09
          </span>
          <h2 className="text-xl font-bold text-foreground">
            Opt-Out & Promotional Communication Preferences
          </h2>
        </div>
        <p>
          We provide all users with the opportunity to opt out of receiving promotional and
          marketing communications:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
          <li>
            To unsubscribe from promotional emails, click the &ldquo;Unsubscribe&rdquo; link located
            in the footer of any marketing email.
          </li>
          <li>
            To opt out of promotional SMS or push notifications, adjust your notification settings
            in your device preferences or email{" "}
            <a href="mailto:hello@kamalo.app">hello@kamalo.app</a>.
          </li>
          <li>
            <em>Note:</em> Essential service communications (such as security OTPs, transactional
            receipts, legal updates, and fraud notifications) are mandatory and cannot be opted out
            of while maintaining an active account.
          </li>
        </ul>
      </section>

      {/* 10. Support & Contact */}
      <section id="support-contact" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            10
          </span>
          <h2 className="text-xl font-bold text-foreground">Support & Contact Details</h2>
        </div>
        <p>
          If you have questions, concerns, or requests regarding our privacy practices, data
          handling, or wish to exercise your statutory rights under the DPDP Act, you may contact
          our dedicated Support and Redressal team:
        </p>

        <div className="rounded-2xl border border-border bg-surface/60 p-6 space-y-4 text-xs">
          <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
            <FileCheck className="h-4 w-4 text-primary" />
            Data Protection & Support Desk
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">
                Data Fiduciary
              </p>
              <p className="mt-1 font-semibold text-foreground">Kamal Intellect Private Limited</p>
              <p className="text-muted-foreground">Platform: KAMALO (kamalo.app)</p>
              <p className="mt-2 font-mono uppercase text-muted-foreground text-[0.7rem]">
                Jurisdiction & Corporate Seat
              </p>
              <p className="text-foreground">Mumbai, Maharashtra, India</p>
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">
                  Support Officer
                </p>
                <p className="font-semibold text-foreground">Privacy & Customer Support Cell</p>
              </div>
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">
                  Official Support Email
                </p>
                <a
                  href="mailto:support@kamalo.app"
                  className="font-mono text-primary hover:underline"
                >
                  support@kamalo.app
                </a>
              </div>
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">
                  General Inquiries
                </p>
                <a
                  href="mailto:hello@kamalo.app"
                  className="font-mono text-primary hover:underline"
                >
                  hello@kamalo.app
                </a>
              </div>
            </div>
          </div>
          <p className="pt-2 border-t border-border text-muted-foreground text-[0.75rem]">
            Pursuant to applicable Indian law, your support request will be acknowledged within 48
            hours of receipt and addressed within thirty (30) days from the date of submission.
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
