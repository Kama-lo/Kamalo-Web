import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, Scale, CreditCard, Users, Landmark, AlertTriangle, FileCheck } from "lucide-react";

import { LegalPage, type TocItem } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — KAMALO | Kamal Intellect Private Limited" },
      {
        name: "description",
        content:
          "Terms of Service governing the use of KAMALO Platform, website (kamalo.app), waitlist, RuPay rewards card, and referral commission ecosystem by Kamal Intellect Private Limited.",
      },
      { property: "og:title", content: "Terms of Service — KAMALO" },
      {
        property: "og:description",
        content:
          "Terms of Service governing KAMALO platform, rewards, RuPay card integration, and referral system.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamalo.app/terms" }],
  }),
  component: Terms,
});

const TOC: TocItem[] = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "eligibility", title: "Eligibility & SSO Account" },
  { id: "kyc-compliance", title: "Mandatory KYC Verification" },
  { id: "rewards-referrals", title: "Rewards & 5-Tier Commissions" },
  { id: "rupay-card", title: "KAMALO RuPay Card" },
  { id: "communication", title: "Communication Policy" },
  { id: "prohibited-conduct", title: "Prohibited Conduct & Brand IP" },
  { id: "inactivity-termination", title: "Inactivity & Termination" },
  { id: "liability-disclaimer", title: "Limitation of Liability" },
  { id: "indemnity", title: "Indemnification" },
  { id: "governing-law", title: "Arbitration & Mumbai Jurisdiction" },
  { id: "support", title: "Customer Support & Contact" },
];

function Terms() {
  return (
    <LegalPage
      eyebrow="Legal Agreement"
      title="Terms of Service"
      updated="Last updated: October 2025 · Effective September 2026"
      subtitle="Please review these Terms of Service carefully before registering, browsing, downloading, or using the KAMALO platform and associated digital payment reward services."
      activeTab="terms"
      toc={TOC}
    >
      {/* 1. Acceptance */}
      <section id="acceptance" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            01
          </span>
          <h2 className="text-xl font-bold text-foreground">Acceptance of Terms & Corporate Entity</h2>
        </div>
        <p>
          Welcome to <strong>KAMALO</strong>. The KAMALO website located at{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-foreground">
            https://kamalo.app
          </code>
          , associated mobile applications, Single Sign-On ID (&ldquo;SSOID&rdquo;) services, digital reward ledgers,
          and payment integrations (collectively, the &ldquo;KAMALO Platform&rdquo;) are owned and operated by{" "}
          <strong>Kamal Intellect Private Limited</strong> (hereinafter referred to as &ldquo;the Company&rdquo;,
          &ldquo;KAMALO&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a private limited company
          incorporated under the Companies Act, with its registered corporate presence in Mumbai, Maharashtra, India.
        </p>
        <p>
          By accessing, browsing, registering on the waitlist, downloading the application, or utilizing any KAMALO
          service, you (&ldquo;User&rdquo;, &ldquo;You&rdquo;, or &ldquo;Your&rdquo;) confirm that you have read,
          understood, and irrevocably agree to be bound by these Terms of Service (&ldquo;Terms&rdquo; or &ldquo;T&Cs&rdquo;)
          in conjunction with our{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          . If at any time you do not accept or agree with any provision of these Terms, you must immediately refrain
          from accessing the KAMALO Platform and terminate your participation.
        </p>
      </section>

      {/* 2. Eligibility & Account */}
      <section id="eligibility" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            02
          </span>
          <h2 className="text-xl font-bold text-foreground">Eligibility & Single Sign-On (SSOID) Account Integrity</h2>
        </div>
        <p>
          The KAMALO Platform and associated reward services are exclusively available to individuals who are at least
          <strong> 18 years of age</strong> and legally capable of entering into binding contracts under the Indian
          Contract Act, 1872. Services are provided within the territory of India and to eligible Non-Resident Indians
          (NRIs). Legally registered business entities, corporations, and partnerships are also permitted to enroll for
          merchant or institutional accounts subject to separate commercial agreements.
        </p>

        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-xs leading-relaxed text-foreground">
          <p className="font-semibold text-destructive flex items-center gap-1.5 mb-1">
            <AlertTriangle className="h-4 w-4" />
            Strict Prohibition: Multi-SIM, Multi-Accounting & Device Emulators
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Registration is restricted to exactly <strong>one individual per verified mobile number</strong> and associated
              mobile device. Registering multiple accounts using multi-SIM devices or synthetic identities is strictly
              prohibited.
            </li>
            <li>
              The KAMALO Platform cannot be accessed via Android/iOS emulators, virtual machines, automated scripts, or
              headless browsers. Any account identified through our hardware verification telemetry as operating via
              emulators or bots will be <strong>permanently suspended and all accumulated balances forfeited</strong>.
            </li>
          </ul>
        </div>

        <p>
          Your login credentials and SSOID are strictly for your personal use. You must maintain their confidentiality
          and immediately notify us at <a href="mailto:hello@kamalo.app">hello@kamalo.app</a> if you discover any
          unauthorized access or compromise of your account credentials.
        </p>
      </section>

      {/* 3. KYC Verification */}
      <section id="kyc-compliance" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            03
          </span>
          <h2 className="text-xl font-bold text-foreground">Mandatory KYC Verification (RBI & PMLA Compliance)</h2>
        </div>
        <p>
          In full accordance with Master Directions issued by the Reserve Bank of India (RBI) on Prepaid Payment
          Instruments (PPI), the Prevention of Money Laundering Act, 2002 (PMLA), and Know Your Customer (KYC)
          guidelines, you must submit valid, verified documentation before you can disburse rewards, execute bank account
          transfers, or receive a co-branded payment card.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <p className="font-mono text-xs font-semibold text-foreground">1. Tax Identification</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Valid Permanent Account Number (PAN) Card verified via NSDL/Income Tax database.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <p className="font-mono text-xs font-semibold text-foreground">2. Officially Valid Document</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Aadhaar (masked e-KYC/offline XML), Voter ID, Driving License, or Passport for identity and address proof.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <p className="font-mono text-xs font-semibold text-foreground">3. Bank Verification</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Cancelled cheque, bank passbook copy, or penny-drop validation for registered bank account payouts.
            </p>
          </div>
        </div>
        <p className="text-xs">
          Upon termination or cessation of your relationship with the Company, Kamal Intellect Private Limited is legally
          obligated to retain your KYC and transaction records for statutory audit and law enforcement compliance
          periods mandated under applicable Indian legislation.
        </p>
      </section>

      {/* 4. Rewards, Referrals & Commissions */}
      <section id="rewards-referrals" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            04
          </span>
          <h2 className="text-xl font-bold text-foreground">Reward Engine, Referral Architecture & Commission Ledgers</h2>
        </div>
        <p>
          KAMALO offers an everyday payment reward and referral ecosystem. Upon successful registration and onboard
          verification, your account ledger tracks three distinct reward components:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Hold Account:</strong> Stores unearned, probationary, or team qualification referral allocations.
            Hold commissions are subject to monthly qualification criteria and team card activation requirements.
          </li>
          <li>
            <strong>Under Clearing Balance:</strong> Reflects provisional commission generated by completed merchant
            transactions of your referred network. The referral amount transitions from Under Clearing Balance into your
            Commission Account within 90 days of transaction completion, following partner merchant settlement.
          </li>
          <li>
            <strong>Commission Account:</strong> Houses fully cleared, confirmed referral commission funds eligible for
            direct withdrawal to your verified Indian bank account.
          </li>
        </ul>

        {/* 5-tier referral structure callout */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs">
              <p className="font-semibold text-foreground text-sm">
                5-Tier Referral Network (Direct & Indirect Referees)
              </p>
              <p className="text-muted-foreground">
                Your Commission Account receives referral bonuses based on transactions completed by users referred
                directly by you (&ldquo;Direct Referees&rdquo;) and users referred down the lineage (&ldquo;Indirect
                Referees&rdquo;) up to <strong>five (5) tiers/levels</strong>, as specified in the platform reward schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2 text-xs">
          <p className="font-semibold text-foreground">Withdrawal & Payout Rules:</p>
          <ol className="list-decimal pl-5 space-y-1.5 text-muted-foreground">
            <li>
              <strong>Minimum Withdrawal Threshold:</strong> You may transfer funds from your Commission Account to your
              verified Indian bank account only when you maintain a minimum balance of <strong>₹1,000/-</strong> in your
              Commission Account.
            </li>
            <li>
              <strong>Bank Transfer Charges:</strong> Any IMPS/NEFT/RTGS transaction charges levied by banking partners
              will be deducted from the transferred sum.
            </li>
            <li>
              <strong>Monthly Qualification Spend:</strong> To maintain the right of transferring referral amounts from
              the Hold Account to the Commission Account, you must complete at least one (1) eligible transaction with a
              minimum spend of <strong>₹1,000/-</strong> in that calendar month.
            </li>
            <li>
              <strong>Direct Referral Criteria:</strong> A minimum of ten (10) active Direct Referees is required to
              unlock full entitlement for Hold-to-Commission transfers. Accounts with fewer active direct referrals
              receive proportionate transfers (e.g. 7 direct referrals equals 70% transfer eligibility; the remaining 30%
              is unlocked upon achieving 10 direct referrals).
            </li>
            <li>
              <strong>One-Year Hold Expiry:</strong> Any commission remaining in the Hold Account due to lack of
              qualification will remain held for a maximum of <strong>one (1) year</strong>, after which it will
              automatically expire and be nullified without further liability to the Company.
            </li>
            <li>
              <strong>Statutory TDS Deduction:</strong> Tax Deducted at Source (TDS) under applicable provisions of the
              Indian Income Tax Act, 1961 (such as Sections 194H/194R) will be compulsorily deducted on all referral
              commission payouts. Certificates will be filed against your verified PAN.
            </li>
          </ol>
        </div>
      </section>

      {/* 5. RuPay Card */}
      <section id="rupay-card" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            05
          </span>
          <h2 className="text-xl font-bold text-foreground">KAMALO RuPay Prepaid & Reward Card</h2>
        </div>
        <p>
          Eligible users may apply for a co-branded RuPay Card (&ldquo;Card&rdquo;) issued in strategic partnership with
          Reserve Bank of India (RBI) authorized banking institutions and Prepaid Payment Instrument (PPI) issuers.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-border bg-surface/50 p-4 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <CreditCard className="h-4 w-4 text-primary" />
              Usage & Acceptance
            </div>
            <p className="text-muted-foreground">
              The Card is linked directly to your verified KAMALO Wallet balance and can be utilized across millions of
              online payment gateways and offline POS merchant terminals across India on the National Payments Corporation
              of India (NPCI) RuPay network.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Landmark className="h-4 w-4 text-primary" />
              Fees & Non-Refundability
            </div>
            <p className="text-muted-foreground">
              Card issuance fees, personalization charges, and Annual Maintenance Charges (AMC) as established by Kamal
              Intellect and partner banks will apply. If card services are suspended, blocked, or discontinued by banking
              partners, card issuance costs are strictly non-refundable.
            </p>
          </div>
        </div>
        <p className="text-xs">
          <strong>Third-Party Merchant Settlement Disclaimer:</strong> When executing purchases, utility bill payments,
          or travel bookings through partner merchants linked within KAMALO, merchant fulfillment disputes and delivery
          issues must be addressed directly with the respective third-party merchant. The Company bears no liability for
          unfulfilled merchant orders or partner network downtime.
        </p>
      </section>

      {/* 6. Communication Policy */}
      <section id="communication" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            06
          </span>
          <h2 className="text-xl font-bold text-foreground">Communication Policy & Device Reformat Procedures</h2>
        </div>
        <p>
          By registering on the KAMALO Platform, you expressly consent to receive service alerts, one-time passwords
          (OTPs), transactional confirmations, and promotional notifications via SMS, WhatsApp, push notifications, and
          email. You are responsible for ensuring that your contact details remain accurate.
        </p>
        <p>
          <strong>Device Reformatting / IMEI Verification:</strong> If you reset or reformat your mobile handheld device
          and experience account desynchronization, you must contact our Customer Support team in writing along with
          your International Mobile Station Equipment Identity (&ldquo;IMEI&rdquo;) number and registered phone number.
          Upon multi-level authentication and verification, the Company may restore your wallet and under-clearing
          balances.
        </p>
      </section>

      {/* 7. Prohibited Conduct & Brand Protection */}
      <section id="prohibited-conduct" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            07
          </span>
          <h2 className="text-xl font-bold text-foreground">Prohibited Conduct, Intermediary Guidelines & Brand Protection</h2>
        </div>
        <p>
          In accordance with Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics
          Code) Rules, 2021, you agree that you shall not host, display, upload, modify, transmit, or share any
          information that:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
          <li>Belongs to another person without authorization or infringes any patent, trademark, or copyright;</li>
          <li>Is defamatory, obscene, pornographic, pedophilic, invasive of another's privacy, or ethnically objectionable;</li>
          <li>Encourages money laundering, illegal gambling, or financial fraud;</li>
          <li>Harms minors in any manner or deceives recipients about the origin of such communications;</li>
          <li>
            Threatens the unity, integrity, defense, security, or sovereignty of India, friendly relations with foreign
            states, or public order.
          </li>
        </ul>

        <div className="rounded-xl border border-border bg-surface/60 p-5 space-y-2 text-xs">
          <p className="font-semibold text-foreground flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-primary" />
            Strict Protection of the KAMALO Brand & Intellectual Property
          </p>
          <p className="text-muted-foreground">
            The brand name <strong>&ldquo;KAMALO&rdquo;</strong>, the KAMALO lotus token emblem, graphical interfaces,
            visual code, soundmarks, domain names, and algorithms are proprietary intellectual property owned exclusively
            by <strong>Kamal Intellect Private Limited</strong> under Indian copyright and trademark laws.
          </p>
          <p className="text-muted-foreground">
            Users are <strong>strictly prohibited</strong> from registering or creating social media accounts, handles,
            pages, groups, or channels incorporating &ldquo;KAMALO&rdquo; as a prefix, suffix, or standalone identifier
            (including on Instagram, X/Twitter, Facebook, Telegram, YouTube, or LinkedIn). Any unauthorized use or
            impersonation will result in immediate termination of account balances and aggressive legal prosecution under
            the Indian Penal Code and the Trade Marks Act, 1999.
          </p>
        </div>
      </section>

      {/* 8. Inactivity & Termination */}
      <section id="inactivity-termination" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            08
          </span>
          <h2 className="text-xl font-bold text-foreground">Inactivity, Suspension & Account Termination</h2>
        </div>
        <p>
          You agree to maintain active, lawful use of your account. Failure to notify the Company of changes to your
          mobile number or non-use of the KAMALO Platform for <strong>ninety (90) consecutive days</strong> may result in
          account review and forfeiture of unredeemed promotional amounts.
        </p>
        <p>
          The Company reserves the unilateral right to suspend, disable, or terminate any account where there is zero
          transactional activity for a continuous period of <strong>six (6) consecutive months</strong>, or where the
          Company detects fraudulent conduct, fake identity creation, or breach of these Terms.
        </p>
      </section>

      {/* 9. Limitation of Liability */}
      <section id="liability-disclaimer" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            09
          </span>
          <h2 className="text-xl font-bold text-foreground">Limitation of Liability & Disclaimer of Warranties</h2>
        </div>
        <p>
          The KAMALO Platform, services, and content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          basis without warranties of any kind, whether express or implied. The Company does not guarantee uninterrupted,
          secure, or error-free platform functionality, nor does it guarantee that the platform will be free from viruses,
          network delays, or payment gateway failures caused by third-party banks or telecommunication service providers.
        </p>
        <div className="rounded-xl border border-border bg-surface/30 p-4 font-mono text-xs leading-relaxed text-muted-foreground uppercase">
          To the maximum extent permitted by applicable Indian law, Kamal Intellect Private Limited, its directors,
          shareholders, officers, employees, and affiliates will not be liable for any direct, indirect, incidental, or
          consequential loss of profits, goodwill, data, or downtime. In any event, our aggregate cumulative liability
          for any claims arising out of or related to these Terms will not exceed ₹100/- (Rupees One Hundred Only) or the
          total administrative fees paid by you to the Company in the twelve (12) months preceding the claim, whichever
          is lower.
        </div>
      </section>

      {/* 10. Indemnification */}
      <section id="indemnity" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            10
          </span>
          <h2 className="text-xl font-bold text-foreground">Indemnification</h2>
        </div>
        <p>
          You agree to defend, indemnify, and hold harmless Kamal Intellect Private Limited, its subsidiaries, affiliates,
          officers, directors, employees, banking partners, and licensors from and against any claims, liabilities,
          damages, losses, demands, and expenses (including reasonable legal counsel fees) arising out of or in any way
          connected with: (i) your access to or misuse of the KAMALO Platform; (ii) your violation of any provision of
          these Terms; (iii) any fraudulent, inaccurate, or fake information submitted by you; or (iv) your infringement
          of any third-party intellectual property or privacy right.
        </p>
      </section>

      {/* 11. Governing Law & Mumbai Jurisdiction */}
      <section id="governing-law" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            11
          </span>
          <h2 className="text-xl font-bold text-foreground">Governing Law, Arbitration & Exclusive Mumbai Jurisdiction</h2>
        </div>
        <p>
          These Terms of Service and any dispute, controversy, or claim arising out of or in relation to the KAMALO
          Platform shall be governed by, construed, and interpreted in accordance with the <strong>laws of India</strong>,
          without regard to principles of conflicts of law.
        </p>
        <div className="rounded-2xl border border-border bg-surface/50 p-5 space-y-3 text-xs">
          <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
            <Scale className="h-4 w-4 text-primary" />
            Arbitration Clause (Arbitration and Conciliation Act, 1996)
          </div>
          <p className="text-muted-foreground">
            Any dispute, difference, or claim arising out of or relating to these Terms shall be referred to and finally
            resolved by arbitration administered by a <strong>sole arbitrator appointed by Kamal Intellect Private Limited</strong>.
            The arbitration shall be conducted in accordance with the provisions of the Arbitration and Conciliation Act,
            1996 (as amended from time to time).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong>Seat & Venue of Arbitration:</strong> Mumbai, Maharashtra, India.</li>
            <li><strong>Language of Arbitration:</strong> English.</li>
            <li><strong>Exclusive Court Jurisdiction:</strong> The competent courts located exclusively in <strong>Mumbai, Maharashtra, India</strong> shall have exclusive jurisdiction over all matters arising out of or relating to these Terms, including applications for interim relief under Section 9 of the Arbitration and Conciliation Act, 1996.</li>
          </ul>
        </div>
      </section>

      {/* 12. Customer Support & Contact */}
      <section id="support" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            12
          </span>
          <h2 className="text-xl font-bold text-foreground">Customer Support & Corporate Contact</h2>
        </div>
        <p>
          In accordance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics
          Code) Rules, 2021 and Section 12 of the Digital Personal Data Protection Act, 2023, the details of our
          Customer Support and Redressal desk are as follows:
        </p>

        <div className="rounded-2xl border border-border bg-surface/60 p-6 space-y-4 text-xs">
          <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
            <FileCheck className="h-4 w-4 text-primary" />
            Customer Support & Redressal Desk
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">Entity</p>
              <p className="mt-1 font-semibold text-foreground">Kamal Intellect Private Limited</p>
              <p className="text-muted-foreground">Division: KAMALO Platform (kamalo.app)</p>
              <p className="mt-2 font-mono uppercase text-muted-foreground text-[0.7rem]">Registered Jurisdiction</p>
              <p className="text-foreground">Mumbai, Maharashtra, India</p>
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">Support Officer</p>
                <p className="font-semibold text-foreground">Customer Support & Redressal Cell</p>
              </div>
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">Official Support Email</p>
                <a href="mailto:support@kamalo.app" className="font-mono text-primary hover:underline">
                  support@kamalo.app
                </a>
              </div>
              <div>
                <p className="font-mono uppercase text-muted-foreground text-[0.7rem]">General Inquiries</p>
                <a href="mailto:hello@kamalo.app" className="font-mono text-primary hover:underline">
                  hello@kamalo.app
                </a>
              </div>
            </div>
          </div>
          <p className="pt-2 border-t border-border text-muted-foreground text-[0.75rem]">
            The Support team will acknowledge received requests within 48 hours and endeavor to resolve any issue
            expeditiously within thirty (30) days in compliance with applicable statutory timelines.
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
