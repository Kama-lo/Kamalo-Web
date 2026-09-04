import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Lock, CheckCircle2, Loader2, Sparkles, X } from "lucide-react";

import { KamaloMark } from "./KamaloMark";
import { formatINR } from "@/lib/products";

const PROCESSING_STEPS = [
  "Verifying payment details…",
  "Contacting your bank securely…",
  "Confirming transaction with KAMALO…",
];

const PROCESSING_MS = 5000;

type CheckoutStage = "processing" | "success";

function makeOrderId() {
  const chars = "ACDEFHJKLMNPRTUVWXY3479";
  let out = "";
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `KMLO-ORD-${out}`;
}

export function CheckoutOverlay({
  open,
  onClose,
  productName,
  amount,
  rewardPercent,
}: {
  open: boolean;
  onClose: () => void;
  productName: string;
  amount: number;
  rewardPercent: number;
}) {
  const [stage, setStage] = useState<CheckoutStage>("processing");
  const [stepIndex, setStepIndex] = useState(0);
  const [orderId, setOrderId] = useState("KMLO-ORD-000000");
  const [progressFull, setProgressFull] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && stage === "success") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, stage]);

  useEffect(() => {
    if (!open) {
      setStage("processing");
      setStepIndex(0);
      setProgressFull(false);
      startRef.current = null;
      return;
    }

    startRef.current = Date.now();
    const stepDuration = PROCESSING_MS / PROCESSING_STEPS.length;
    const stepTimer = window.setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, PROCESSING_STEPS.length - 1));
    }, stepDuration);

    const progressTimer = window.setTimeout(() => setProgressFull(true), 30);

    const doneTimer = window.setTimeout(() => {
      setOrderId(makeOrderId());
      setStage("success");
    }, PROCESSING_MS);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(progressTimer);
      window.clearTimeout(doneTimer);
    };
  }, [open]);

  if (!open) return null;

  const reward = Math.round((amount * rewardPercent) / 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Checkout"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        aria-label="Close"
        onClick={() => stage === "success" && onClose()}
        className="absolute inset-0 cursor-default bg-background/90 backdrop-blur-xl animate-fade-in"
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-deep)] sm:p-10 animate-scale-in">
        <div className="ember pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2" />

        {stage === "processing" ? (
          <div className="relative flex flex-col items-center text-center">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inset-0 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
              <KamaloMark variant="favicon" className="h-11 w-11" />
            </div>

            <p className="eyebrow mt-6">Processing payment</p>
            <h2 className="display mt-3 text-2xl sm:text-3xl">Hang tight.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Paying {formatINR(amount)} for {productName}
            </p>

            <div className="mt-8 w-full space-y-3 rounded-2xl border border-border bg-background/60 p-4 text-left">
              {PROCESSING_STEPS.map((step, i) => {
                const state = i < stepIndex ? "done" : i === stepIndex ? "active" : "pending";
                return (
                  <div key={step} className="flex items-center gap-3">
                    {state === "done" ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    ) : state === "active" ? (
                      <Loader2 className="h-4 w-4 shrink-0 animate-spin text-primary" />
                    ) : (
                      <span className="h-4 w-4 shrink-0 rounded-full border border-border" />
                    )}
                    <span
                      className={`text-xs sm:text-sm ${
                        state === "pending" ? "text-muted-foreground/50" : "text-foreground"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full transition-[width] ease-linear"
                style={{
                  backgroundImage: "var(--gradient-cta)",
                  width: progressFull ? "100%" : "0%",
                  transitionDuration: `${PROCESSING_MS - 30}ms`,
                }}
              />
            </div>

            <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5 text-primary" />
              Encrypted end to end. Do not close this window.
            </p>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -top-1 -right-1 rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="animate-scale-in -mt-2 h-32 w-full max-w-[240px] sm:h-40 sm:max-w-[280px]">
                <img
                  src="/Illustrations/thankyou_success.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="eyebrow mt-4 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                Payment successful
              </p>
              <h2 className="display mt-3 text-3xl sm:text-4xl">You're all set.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your order for <span className="text-foreground">{productName}</span> is
                confirmed.
              </p>
            </div>

            <div className="mt-8 space-y-3 rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-foreground">{orderId}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Amount paid</span>
                <span className="font-semibold text-foreground">{formatINR(amount)}</span>
              </div>
              <div className="hairline flex items-center justify-between pt-3 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-reward" />
                  KAMALO reward earned
                </span>
                <span className="font-semibold text-reward">{formatINR(reward)}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/marketplace"
                onClick={onClose}
                className="cta-surface flex-1 rounded-2xl px-6 py-3.5 text-center text-sm font-semibold tracking-[0.14em] uppercase"
              >
                Continue shopping
              </Link>
              <button
                onClick={onClose}
                className="flex-1 rounded-2xl border border-input px-6 py-3.5 text-sm font-semibold tracking-[0.14em] text-foreground uppercase transition-colors hover:bg-accent"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
