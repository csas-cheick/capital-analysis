import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700",
        className,
      )}
      {...props}
    />
  );
}
