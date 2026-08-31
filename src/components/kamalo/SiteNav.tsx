import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

export function SiteNav({ onJoin }: { onJoin: () => void }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link to="/" aria-label="KAMALO home">
          <Wordmark />
        </Link>
        <nav className="flex items-center gap-5 text-sm sm:gap-7">
          <Link to="/about" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block">
            About
          </Link>
          <Link to="/terms" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block">
            Legal
          </Link>
          <button
            onClick={onJoin}
            className="cta-surface rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Join KAMALO
          </button>
        </nav>
      </div>
    </header>
  );
}
