export default function Icon({ name, size = 20, filled = false, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        ...(filled ? { fontVariationSettings: "'FILL' 1" } : {}),
      }}
    >
      {name}
    </span>
  );
}
