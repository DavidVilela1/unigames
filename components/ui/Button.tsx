"use client";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:   "bg-accent text-accent-fg hover:opacity-90",
  secondary: "bg-elevated text-fg hover:bg-elevated/70 border border-border",
  ghost:     "text-fg hover:bg-elevated",
  danger:    "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20"
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base"
};

export default function Button({ variant = "primary", size = "md", className, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
        "transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        variants[variant], sizes[size], className
      )}
      {...rest}
    />
  );
}
