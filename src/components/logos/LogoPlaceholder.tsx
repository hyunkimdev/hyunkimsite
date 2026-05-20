import { cn } from "@/lib/cn";

interface LogoPlaceholderProps {
  label: string;
  className?: string;
  tone?: "light" | "dark" | "muted";
  weight?: "normal" | "bold";
}

/**
 * Wordmark placeholder. Renders a typographic mark in our own colors so we
 * can show a logo row without using any third-party brand assets.
 */
export function LogoPlaceholder({
  label,
  className,
  tone = "muted",
  weight = "normal",
}: LogoPlaceholderProps) {
  const colors = {
    light: "text-white/80",
    dark: "text-[var(--color-ink-900)]",
    muted: "text-[var(--color-ink-300)]",
  };
  const weights = {
    normal: "font-medium",
    bold: "font-bold",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center text-[18px] tracking-tight select-none lowercase",
        colors[tone],
        weights[weight],
        className,
      )}
      aria-label={`${label} (placeholder)`}
    >
      {label}
    </span>
  );
}
