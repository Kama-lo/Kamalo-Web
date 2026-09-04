import { BatteryCharging, Gauge, Zap } from "lucide-react";

import type { EvStats } from "@/lib/products";

export function EvStatBadges({ stats, size = "md" }: { stats: EvStats; size?: "sm" | "md" }) {
  const items = [
    { icon: BatteryCharging, label: "Range", value: stats.range },
    { icon: Gauge, label: "Speed", value: stats.speed },
    { icon: Zap, label: "Motor", value: stats.power },
  ];

  const pad = size === "sm" ? "px-2 py-2" : "px-3 py-3 sm:px-4 sm:py-3.5";
  const valueSize = size === "sm" ? "text-xs" : "text-sm sm:text-base";

  return (
    <div className="relative z-10 -mt-6 grid grid-cols-3 gap-2 px-4 sm:-mt-7 sm:gap-3 sm:px-5">
      {items.map((item) => (
        <div
          key={item.label}
          className={`flex flex-col items-center gap-1 rounded-xl border border-border bg-background text-center shadow-[var(--shadow-deep)] ${pad}`}
        >
          <item.icon className="h-4 w-4 text-primary" />
          <p className={`font-bold text-foreground ${valueSize}`}>{item.value}</p>
          <p className="text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
