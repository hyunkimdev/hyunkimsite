import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Brand mark placeholder — original wordmark is a trademark of its owner.
 * We render a simple typographic mark in our own colors instead.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const color = tone === "dark" ? "var(--color-ink-900)" : "#ffffff";
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-semibold tracking-tight select-none",
        className,
      )}
      style={{ color }}
    >
      <span className="text-[22px] leading-none">Hyun Kim</span>
    </span>
  );
}
