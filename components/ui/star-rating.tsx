import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

export default function StarRating({
  rating = 5,
  className,
  size = "sm",
}: {
  rating?: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className={cn("flex", className)} aria-label={`${rating} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            dim,
            i < Math.round(rating)
              ? "fill-brand-accent text-brand-accent"
              : "fill-brand-ink/10 text-brand-ink/10"
          )}
        />
      ))}
    </div>
  );
}
