import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

export function SiteNav({ onJoin }: { onJoin: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-10 sm:py-4">
        <Link to="/" aria-label="KAMALO home" onClick={closeMenu}>
          <Wordmark />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link
            to="/about"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            About
          </Link>
          <Link
            to="/payments"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Payments
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface sm:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/95 px-5 py-6 backdrop-blur-2xl sm:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/payments"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Payments
            </Link>
            <Link
              to="/brand"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Brand
            </Link>
            <Link
              to="/terms"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact & Support
            </Link>

            <div className="pt-2">
              <button
                onClick={() => {
                  closeMenu();
                  onJoin();
                }}
                className="cta-surface w-full rounded-full py-3.5 text-xs font-semibold tracking-[0.18em] uppercase"
              >
                Join KAMALO
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
