import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — KAMALO" },
      {
        name: "description",
        content: "How KAMALO collects, uses and protects the information you share with us.",
      },
      { property: "og:title", content: "Privacy Policy — KAMALO" },
      {
        property: "og:description",
        content: "How KAMALO collects, uses and protects your information.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="Last updated: 31 August 2026">
      <section>
        <h2>What we collect</h2>
        <p>
          If you join the KAMALO waitlist, we collect the mobile number you provide, along with basic
          technical information such as your device type, browser and approximate region, which is
          generated automatically when you visit this website.
        </p>
      </section>
      <section>
        <h2>Why we collect it</h2>
        <p>
          We use your mobile number solely to contact you about early access to KAMALO and related
          launch updates. Technical information helps us keep the site secure, measure interest and
          improve the experience.
        </p>
      </section>
      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell your information. We share it only with service providers who help us
          operate this website and send launch communications, and only to the extent required for
          that purpose, or where disclosure is required by applicable law.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          We keep waitlist information until KAMALO launches or until you ask us to delete it,
          whichever is earlier.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct or delete the information you have shared at any time by
          writing to hello@kamalo.in. You can also opt out of launch messages at any time.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions about this policy: hello@kamalo.in</p>
      </section>
    </LegalPage>
  );
}
