export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`display inline-flex items-baseline gap-[0.18em] text-[1.05rem] tracking-[0.34em] uppercase ${className}`}
    >
      Kamalo
    </span>
  );
}
