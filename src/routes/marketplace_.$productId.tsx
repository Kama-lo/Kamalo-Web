import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ShieldCheck, Lock, ArrowLeft, Sparkles, Gauge, Info } from "lucide-react";

import { CheckoutOverlay } from "@/components/kamalo/CheckoutOverlay";
import { EvStatBadges } from "@/components/kamalo/EvStatBadges";
import { JoinModal } from "@/components/kamalo/JoinModal";
import { ProductTile } from "@/components/kamalo/ProductTile";
import { Reveal } from "@/components/kamalo/Reveal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";
import { formatINR, getProduct } from "@/lib/products";

export const Route = createFileRoute("/marketplace_/$productId")({
  head: ({ params }) => {
    const product = getProduct(params.productId);
    const title = product ? `${product.name} — KAMALO Marketplace` : "Marketplace — KAMALO";
    const description = product
      ? `${product.tagline}. ${formatINR(product.price)} · Earn ${product.rewardPercent}% back when you pay with KAMALO.`
      : "Shop bikes, scooters, gift cards and bill payments on KAMALO and earn rewards.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav onJoin={() => {}} />
      <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <p className="eyebrow">Marketplace</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl">Product not found.</h1>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          This listing isn't available anymore. Take a look at what's currently in stock.
        </p>
        <Link
          to="/marketplace"
          className="cta-surface mt-8 rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.18em] uppercase"
        >
          Back to marketplace
        </Link>
      </main>
    </div>
  );
}

function ProductPage() {
  const { productId } = Route.useParams();
  const product = getProduct(productId);
  const [joinOpen, setJoinOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedDenom, setSelectedDenom] = useState<number | null>(
    product?.denominations
      ? (product.denominations[Math.floor(product.denominations.length / 2)] ?? null)
      : null,
  );

  if (!product) return <ProductNotFound />;

  const amount = product.denominations
    ? (selectedDenom ?? product.denominations[0]!)
    : product.price;
  const savings = product.mrp - product.price;

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={() => setJoinOpen(true)} />

      <main className="px-5 pt-24 pb-24 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Marketplace
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Image */}
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface-2 lg:aspect-square">
                {product.tile ? (
                  <ProductTile product={product} size="lg" />
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                )}
                {product.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-primary uppercase backdrop-blur">
                    {product.badge}
                  </span>
                )}
              </div>
              {product.stats && <EvStatBadges stats={product.stats} />}
            </Reveal>

            {/* Info */}
            <div>
              <Reveal delay={80}>
                <p className="eyebrow">{product.category}</p>
                <h1 className="display mt-4 text-[clamp(2rem,5vw,3.2rem)]">{product.name}</h1>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  {product.tagline}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-sm">
                  <Star className="h-4 w-4 fill-reward text-reward" />
                  <span className="font-semibold text-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews.toLocaleString("en-IN")} reviews)
                  </span>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-8 rounded-3xl border border-border bg-surface/50 p-5 sm:p-6">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="display text-3xl sm:text-4xl">{formatINR(amount)}</p>
                      {!product.denominations && product.mrp > product.price && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          <span className="line-through">{formatINR(product.mrp)}</span>{" "}
                          <span className="text-primary">save {formatINR(savings)}</span>
                        </p>
                      )}
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      Earn {product.rewardPercent}% back
                    </span>
                  </div>

                  {product.denominations && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.denominations.map((d) => (
                        <button
                          key={d}
                          onClick={() => setSelectedDenom(d)}
                          className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
                            amount === d
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {formatINR(d)}
                        </button>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-xs text-muted-foreground">
                    That's about {formatINR(Math.round((amount * product.rewardPercent) / 100))}{" "}
                    credited to your KAMALO account on this order.
                  </p>

                  <button
                    onClick={() => setCheckoutOpen(true)}
                    className="cta-surface mt-6 w-full rounded-2xl px-8 py-4 text-sm font-semibold tracking-[0.18em] uppercase"
                  >
                    Pay {formatINR(amount)}
                  </button>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-primary" />
                      Encrypted checkout
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                      Secure payment infra
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8">
                  <p className="eyebrow">{product.tile ? "Details" : "Specifications"}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                    {product.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-2xl border border-border bg-surface/40 p-4"
                      >
                        <div className="flex items-center gap-1.5 text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase">
                          {product.tile ? (
                            <Info className="h-3 w-3" />
                          ) : (
                            <Gauge className="h-3 w-3" />
                          )}
                          {h.label}
                        </div>
                        <p className="mt-1.5 text-sm font-semibold text-foreground sm:text-base">
                          {h.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter onJoin={() => setJoinOpen(true)} />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <CheckoutOverlay
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        productName={product.name}
        amount={amount}
        rewardPercent={product.rewardPercent}
      />
    </div>
  );
}
