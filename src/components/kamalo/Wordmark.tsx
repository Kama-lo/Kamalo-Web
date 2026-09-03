import { KamaloMark } from "./KamaloMark";

export function Wordmark({
  className = "",
  showMark = true,
}: {
  className?: string;
  showMark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {showMark && <KamaloMark className="h-7 w-7 shrink-0" />}
      <span className="display text-[1.05rem] tracking-[0.32em] uppercase">Kamalo</span>
    </span>
  );
}
