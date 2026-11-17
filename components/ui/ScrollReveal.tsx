"use client";

import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = ComponentPropsWithoutRef<"div">;

export default function ScrollReveal({
  className,
  ...props
}: ScrollRevealProps) {
  const [revealRef, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className={cn(
        "transition-all duration-700",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      {...props}
    />
  );
}
