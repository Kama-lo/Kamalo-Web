import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

export function SiteNav({ onJoin }: { onJoin: () => void }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-10 sm:py-4">
        <Link to="/" aria-label="KAMALO home">
          <Wordmark />
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link
            to="/about"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            About
          </Link>
          <Link
            to="/brand"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Brand
          </Link>
          <Link
            to="/terms"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Legal
          </Link>
          <ThemeToggle />
          <button
            onClick={onJoin}
            className="cta-surface hidden rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase sm:block"
          >
            Join KAMALO
          </button>
        </nav>
      </div>
    </header>
  );
}
