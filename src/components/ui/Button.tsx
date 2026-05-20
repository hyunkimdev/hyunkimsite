import { ChevronRight } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "darkSecondary";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  trailing?: ReactNode;
  leading?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      withArrow = true,
      trailing,
      leading,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent-600)] whitespace-nowrap";

    const sizes: Record<Size, string> = {
      sm: "px-3 h-7 text-[13px]",
      md: "px-4 h-8 text-[14px]",
    };

    const variants: Record<Variant, string> = {
      primary:
        "bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
      secondary:
        "bg-white text-[var(--color-ink-900)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-tint)]",
      ghost:
        "bg-transparent text-[var(--color-ink-700)] hover:bg-[var(--color-surface-tint-2)]",
      dark:
        "bg-white text-[var(--color-ink-900)] hover:bg-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
      darkSecondary:
        "bg-transparent text-white border border-white/30 hover:bg-white/10",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...rest}
      >
        {leading}
        <span>{children}</span>
        {trailing ? trailing : withArrow ? (
          <ChevronRight className="h-3.5 w-3.5 -mr-0.5" strokeWidth={2.5} />
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";
