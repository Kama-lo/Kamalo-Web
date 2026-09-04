import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Star, ShieldCheck, ArrowDown } from "lucide-react";

import { CheckoutOverlay } from "@/components/kamalo/CheckoutOverlay";
import { EvStatBadges } from "@/components/kamalo/EvStatBadges";
import { JoinModal } from "@/components/kamalo/JoinModal";
import { ProductTile } from "@/components/kamalo/ProductTile";
import { Reveal } from "@/components/kamalo/Reveal";
import { SiteFooter } from "@/components/kamalo/SiteFooter";
import { SiteNav } from "@/components/kamalo/SiteNav";
import { formatINR, products, type Product } from "@/lib/products";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — KAMALO" },
      {
        name: "description",
        content:
          "Shop electric bikes, scooters, gift cards and bill payments on KAMALO and earn rewards on every purchase.",
      },
      { property: "og:title", content: "Marketplace — KAMALO" },
      {
        property: "og:description",
        content: "Shop bikes, scooters, gift cards and bill payments on KAMALO and earn rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamalo.app/marketplace" }],
  }),
  component: Marketplace,
});

const filters = ["All", "Scooter", "Bike", "Gift Card", "Recharge & Bills"] as const;

const filterLabel: Record<(typeof filters)[number], string> = {
  All: "Everything",
  Scooter: "Scooters",
  Bike: "Bikes",
  "Gift Card": "Gift cards",
  "Recharge & Bills": "Recharge & bills",
};

function defaultAmount(product: Product) {
  if (!product.denominations) return product.price;
  return product.denominations[Math.floor(product.denominations.length / 2)]!;
}

function Marketplace() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [payTarget, setPayTarget] = useState<Product | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteNav onJoin={() => setJoinOpen(true)} />

      <main className="px-5 pt-28 pb-24 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <Reveal>
            <p className="eyebrow">Marketplace</p>
            <h1 className="display mt-5 text-[clamp(2.2rem,8vw,5.5rem)]">
              Shop smarter.
              <br />
              <span className="text-ember">Get rewarded.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
              Electric bikes, scooters, gift cards and everyday bill payments — paid for through
              KAMALO, with rewards credited to your account the moment checkout completes.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <a
              href="#grid"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/15 sm:mt-10"
            >
              Browse products
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-border bg-surface/50 px-4 py-3.5 text-xs text-muted-foreground sm:mt-10 sm:px-6">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Secure checkout
              </span>
              <span className="hidden h-3.5 w-px bg-border sm:block" />
              <span>Rewards credited on every order</span>
              <span className="hidden h-3.5 w-px bg-border sm:block" />
              <span>Prices inclusive of applicable charges</span>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-2 sm:mt-14">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                    filter === f
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {filterLabel[f]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div
            id="grid"
            className="mt-8 scroll-mt-24 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((product, i) => {
              const amount = defaultAmount(product);
              return (
                <Reveal key={product.id} delay={(i % 6) * 60}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-deep)]">
                    <Link
                      to="/marketplace/$productId"
                      params={{ productId: product.id }}
                      className="absolute inset-0 z-0"
                      aria-label={`View ${product.name}`}
                    />

                    <div className="pointer-events-none relative z-10 aspect-[4/3] w-full overflow-hidden bg-surface-2">
                      {product.tile ? (
                        <ProductTile product={product} />
                      ) : (
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      {product.badge && (
                        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-primary uppercase backdrop-blur">
                          {product.badge}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase backdrop-blur">
                        {product.rewardPercent}% back
                      </span>
                    </div>

                    {product.stats && (
                      <div className="pointer-events-none">
                        <EvStatBadges stats={product.stats} size="sm" />
                      </div>
                    )}

                    <div className="pointer-events-none relative z-10 flex flex-1 flex-col gap-3 p-5">
                      <div>
                        <p className="eyebrow">{product.category}</p>
                        <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5 fill-reward text-reward" />
                        <span className="font-medium text-foreground">{product.rating}</span>
                        <span>({product.reviews.toLocaleString("en-IN")})</span>
                      </div>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                        <div>
                          <p className="text-lg font-bold text-foreground sm:text-xl">
                            {product.denominations ? "From " : ""}
                            {formatINR(
                              product.denominations ? product.denominations[0]! : product.price,
                            )}
                          </p>
                          {!product.denominations && product.mrp > product.price && (
                            <p className="text-xs text-muted-foreground line-through">
                              {formatINR(product.mrp)}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPayTarget(product);
                          }}
                          className="cta-surface pointer-events-auto relative z-20 shrink-0 rounded-xl px-4 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase"
                        >
                          Pay {formatINR(amount)}
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>

      <SiteFooter onJoin={() => setJoinOpen(true)} />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <CheckoutOverlay
        open={payTarget !== null}
        onClose={() => setPayTarget(null)}
        productName={payTarget?.name ?? ""}
        amount={payTarget ? defaultAmount(payTarget) : 0}
        rewardPercent={payTarget?.rewardPercent ?? 0}
      />
    </div>
  );
}
