import { Smartphone, Zap, Tv, Wifi } from "lucide-react";

import type { Product } from "@/lib/products";

const iconMap = {
  smartphone: Smartphone,
  zap: Zap,
  tv: Tv,
  wifi: Wifi,
};

export function ProductTile({
  product,
  size = "md",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
}) {
  if (!product.tile) return null;
  const tile = product.tile;

  if (tile.kind === "logo") {
    const barPad = size === "lg" ? "p-5 sm:p-6" : size === "sm" ? "p-2" : "p-3.5";
    const chipPad = size === "lg" ? "px-6 py-3.5" : size === "sm" ? "px-2.5 py-1.5" : "px-4 py-2.5";
    const logoSize = size === "lg" ? "h-8 sm:h-9" : size === "sm" ? "h-4" : "h-6";

    return (
      <div className="relative h-full w-full overflow-hidden bg-white">
        <img
          src={tile.illustration}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className={`absolute inset-x-0 bottom-0 flex justify-center ${barPad}`}>
          <div
            className={`flex items-center justify-center rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.14)] ring-1 ring-black/5 ${chipPad}`}
          >
            <img
              src={tile.logo}
              alt={`${tile.name} logo`}
              className={`${logoSize} w-auto max-w-[9rem] object-contain sm:max-w-[10rem]`}
            />
          </div>
        </div>
      </div>
    );
  }

  const Icon = iconMap[tile.icon];
  const barPad =
    size === "lg" ? "px-6 py-4 sm:px-7 sm:py-5" : size === "sm" ? "px-2.5 py-1.5" : "px-4 py-3";
  const textSize = size === "lg" ? "text-base sm:text-lg" : size === "sm" ? "text-[0.65rem]" : "text-sm";
  const iconSize = size === "lg" ? "h-5 w-5" : size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <img
        src={tile.illustration}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className={`absolute inset-x-0 bottom-0 flex items-center gap-2 ${barPad}`}
        style={{ backgroundColor: tile.bg, color: tile.fg }}
      >
        <Icon className={`${iconSize} shrink-0 opacity-80`} />
        <p className={`truncate font-semibold ${textSize}`}>{tile.name}</p>
      </div>
    </div>
  );
}
