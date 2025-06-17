"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  hoverable?: boolean;
}

export const BentoCard = ({ className, children, hoverable = true }: BentoCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300",
        hoverable && "hover:bg-card/80 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5",
        className
      )}
    >
      {children}
    </Card>
  );
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("grid gap-4 p-4", className)}>
      {children}
    </div>
  );
};