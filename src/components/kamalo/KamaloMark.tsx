export function KamaloMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  const petal = "M32 33 C25.5 23 25.5 14 32 5 C38.5 14 38.5 23 32 33 Z";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {title && <title>{title}</title>}
      <g fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <path
            key={deg}
            d={petal}
            transform={`rotate(${deg} 32 32)`}
            opacity={i % 2 === 0 ? 1 : 0.55}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="3.2" fill="var(--reward)" />
    </svg>
  );
}
