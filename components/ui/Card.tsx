import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5",
        "shadow-[0_1px_0_0_rgb(var(--border))]",
        className
      )}
      {...rest}
    />
  );
}
