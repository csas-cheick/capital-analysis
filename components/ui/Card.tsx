import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div">;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
