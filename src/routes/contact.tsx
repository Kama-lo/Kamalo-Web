import { createFileRoute } from "@tanstack/react-router";
import { Mail, Shield, Building2, MapPin } from "lucide-react";

import { LegalPage } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — KAMALO | Kamal Intellect Private Limited" },
      { name: "description", content: "Reach the KAMALO team and Customer Support Desk — press, partnerships and support." },
      { property: "og:title", content: "Contact KAMALO" },
      { property: "og:description", content: "Press, partnerships, support, and account assistance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <LegalPage
      eyebrow="Contact & Support"
      title="Say hello."
      subtitle="Reach out to the KAMALO team for general questions, customer support, partnership discussions, or account assistance."
      activeTab="contact"
    >
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Mail className="h-4 w-4 text-primary" />
              General Enquiries
            </div>
            <p className="text-xs text-muted-foreground">
              Questions about our upcoming launch, waitlist, or invite codes.
            </p>
            <a href="mailto:hello@kamalo.app" className="block font-mono text-sm text-primary hover:underline pt-1">
              hello@kamalo.app
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Shield className="h-4 w-4 text-primary" />
              Customer Support Desk
            </div>
            <p className="text-xs text-muted-foreground">
              Help with accounts, rewards, card assistance, and data privacy.
            </p>
            <a href="mailto:support@kamalo.app" className="block font-mono text-sm text-primary hover:underline pt-1">
              support@kamalo.app
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Building2 className="h-4 w-4 text-primary" />
              Partnerships & Merchants
            </div>
            <p className="text-xs text-muted-foreground">
              Brand collaborations, RuPay merchant network, and fintech integrations.
            </p>
            <a href="mailto:partners@kamalo.app" className="block font-mono text-sm text-primary hover:underline pt-1">
              partners@kamalo.app
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Registered Corporate Entity
            </div>
            <p className="text-xs text-muted-foreground">
              Kamal Intellect Private Limited
              <br />
              Mumbai, Maharashtra, India
            </p>
            <span className="inline-block font-mono text-xs text-muted-foreground pt-1">
              Platform: kamalo.app
            </span>
          </div>
        </div>
      </div>
    </LegalPage>
  );
}
