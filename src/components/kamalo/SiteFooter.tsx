import { Link } from "@tanstack/react-router";

export function SiteFooter({ onJoin }: { onJoin: () => void }) {
  return (
    <footer className="hairline px-6 pt-20 pb-12 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="display text-[18vw] leading-[0.8] tracking-[-0.05em] text-foreground/10 select-none sm:text-[13rem]">
          KAMALO
        </p>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Everyday payments.
            <br />A little more rewarding.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <button onClick={onJoin} className="text-muted-foreground transition-colors hover:text-foreground">
              Join
            </button>
            <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        <p className="mt-12 font-mono text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} KAMALO · Built in India
        </p>
      </div>
    </footer>
  );
}
