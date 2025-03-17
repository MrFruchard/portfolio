import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};

export const Spacing = ({size = "md"}: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h16": size === "sm",
        "h-16 lg:h-32": size === "md",
        "h-24 lg:h-48": size === "lg",
      })}
    />
  );
};
