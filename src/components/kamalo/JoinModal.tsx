import { useEffect, useRef, useState } from "react";
import coin from "@/assets/kamalo-coin.png";

type Stage = "form" | "done";

function makeCode() {
  const chars = "ACDEFHJKLMNPRTUVWXY3479";
  let out = "";
  for (let i = 0; i < 5; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `KMLO-${out}`;
}

export function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [stage, setStage] = useState<Stage>("form");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [code, setCode] = useState("KMLO-00000");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStage("form");
        setPhone("");
        setError(null);
        setCopied(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10 || !/^[6-9]/.test(digits)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setBusy(true);
    setError(null);
    setTimeout(() => {
      setCode(makeCode());
      setBusy(false);
      setStage("done");
    }, 700);
  };

  const share = async () => {
    const text = `I'm on the KAMALO list. Use my code ${code}.`;
    try {
      if (navigator.share) await navigator.share({ text, title: "KAMALO" });
      else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      /* dismissed */
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Join KAMALO"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-background/85 backdrop-blur-xl animate-fade-in"
      />
      <div className="relative w-full max-w-lg animate-scale-in overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-deep)] sm:p-12">
        <div className="ember pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2" />
        <div className="relative">
          <div className="flex items-start justify-between">
            <span className="eyebrow">{stage === "form" ? "Waitlist" : "Confirmed"}</span>
            <button
              onClick={onClose}
              className="-mt-1 -mr-1 rounded-full px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close dialog"
            >
              Close
            </button>
          </div>

          {stage === "form" ? (
            <form onSubmit={submit} className="mt-8">
              <h2 className="display text-5xl sm:text-6xl">You're almost in.</h2>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                One number. Nothing else. We'll reach out when KAMALO opens.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-input bg-background px-4 py-3 transition-colors focus-within:border-primary">
                <span className="font-mono text-sm text-muted-foreground">+91</span>
                <span className="h-6 w-px bg-border" />
                <input
                  ref={inputRef}
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full bg-transparent text-lg tracking-wide outline-none placeholder:text-muted-foreground"
                />
              </div>
              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={busy}
                className="cta-surface mt-6 w-full rounded-2xl px-8 py-4 text-sm font-semibold tracking-[0.18em] uppercase disabled:opacity-70"
              >
                {busy ? "Adding you…" : "Get me in"}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                By joining you agree to our Terms and Privacy Policy.
              </p>
            </form>
          ) : (
            <div className="mt-8">
              <img
                src={coin}
                alt="KAMALO reward coin"
                width={912}
                height={912}
                loading="lazy"
                className="float-slow h-20 w-20"
              />
              <h2 className="display mt-6 text-5xl sm:text-6xl">You're on the list.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Welcome to KAMALO.
                <br />
                We'll see you soon.
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-background p-5">
                <p className="eyebrow">Your invite code</p>
                <p className="mt-2 font-mono text-2xl tracking-[0.2em] text-reward">{code}</p>
              </div>

              <button
                onClick={share}
                className="mt-4 w-full rounded-2xl border border-input px-8 py-4 text-sm font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-accent"
              >
                {copied ? "Copied" : "Share your code"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
