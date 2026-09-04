import { Link } from "@tanstack/react-router";
import { KamaloMark } from "./KamaloMark";

const social = [
  { label: "Instagram", handle: "@kamalo", href: "https://kamalo.app" },
  { label: "X", handle: "@kamalo", href: "https://kamalo.app" },
  { label: "LinkedIn", handle: "/kamalo", href: "https://kamalo.app" },
];

export function SiteFooter({ onJoin }: { onJoin: () => void }) {
  return (
    <footer className="hairline px-5 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
          <KamaloMark className="h-14 w-14 sm:h-20 sm:w-20 shrink-0" />
          <p className="display text-[14vw] leading-[0.8] tracking-[-0.05em] text-foreground/10 select-none sm:text-[11rem]">
            KAMALO
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Everyday payments.
            <br />A little more rewarding.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <button
              onClick={onJoin}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Join
            </button>
            <Link
              to="/payments"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Payments
            </Link>
            <Link
              to="/brand"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Brand
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="hairline mt-10 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label} {s.handle}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} KAMALO · Built in India
          </p>
        </div>
      </div>
    </footer>
  );
}
