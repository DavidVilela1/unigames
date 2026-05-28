import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Badge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full border border-border bg-elevated",
      "px-2 py-0.5 text-[11px] font-medium text-muted", className
    )} {...rest} />
  );
}
