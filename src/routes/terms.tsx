import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — KAMALO" },
      {
        name: "description",
        content: "The terms that apply to the KAMALO launch website and waitlist.",
      },
      { property: "og:title", content: "Terms of Use — KAMALO" },
      {
        property: "og:description",
        content: "Terms that apply to the KAMALO launch website and waitlist.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" updated="Last updated: 31 August 2026">
      <section>
        <h2>This website</h2>
        <p>
          This website presents information about KAMALO, an upcoming product. By using the site or
          joining the waitlist, you agree to these terms.
        </p>
      </section>
      <section>
        <h2>No offer of services</h2>
        <p>
          KAMALO is not yet live. Nothing on this website is an offer to provide financial, payment
          or reward services, and no service relationship is created by joining the waitlist.
        </p>
      </section>
      <section>
        <h2>Waitlist</h2>
        <p>
          Joining the waitlist registers your interest. It does not guarantee access, a specific
          launch date, or any particular reward, benefit or invite code value. Features described
          here may change before launch.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          Please do not attempt to disrupt the site, submit numbers you do not control, or use the
          site for unlawful purposes.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The KAMALO name, marks, visual design and content on this site belong to KAMALO and may
          not be reproduced without permission.
        </p>
      </section>
      <section>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>
    </LegalPage>
  );
}
