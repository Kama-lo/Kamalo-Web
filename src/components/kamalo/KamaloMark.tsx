export function KamaloMark({
  className = "",
  title = "KAMALO",
  variant = "favicon",
}: {
  className?: string;
  title?: string;
  variant?: "favicon" | "coin" | "vector";
}) {
  if (variant === "favicon" || variant === "coin") {
    return (
      <img
        src="/favicon.png"
        alt={title || "KAMALO"}
        width={64}
        height={64}
        loading="eager"
        className={`inline-block aspect-square object-contain rounded-xl select-none drop-shadow-[0_4px_14px_rgba(242,128,47,0.3)] transition-transform duration-300 hover:scale-105 ${className}`}
      />
    );
  }

  const petal = "M16 16.6C12.7 11.4 12.7 7.2 16 3.2C19.3 7.2 19.3 11.4 16 16.6Z";
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <g fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <path
            key={deg}
            d={petal}
            transform={`rotate(${deg} 16 16)`}
            opacity={i % 2 === 0 ? 1 : 0.58}
          />
        ))}
      </g>
      <circle cx="16" cy="16" r="2.15" fill="var(--reward, #E6B23C)" />
    </svg>
  );
}
