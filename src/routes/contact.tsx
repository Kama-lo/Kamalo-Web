import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/kamalo/LegalPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KAMALO" },
      { name: "description", content: "Reach the KAMALO team — press, partnerships and support." },
      { property: "og:title", content: "Contact KAMALO" },
      { property: "og:description", content: "Press, partnerships and general enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <LegalPage eyebrow="Contact" title="Say hello.">
      <section>
        <h2>General</h2>
        <p>hello@kamalo.in</p>
      </section>
      <section>
        <h2>Press</h2>
        <p>press@kamalo.in</p>
      </section>
      <section>
        <h2>Partnerships</h2>
        <p>partners@kamalo.in</p>
      </section>
      <section>
        <h2>Where we are</h2>
        <p>Built in India.</p>
      </section>
    </LegalPage>
  );
}
