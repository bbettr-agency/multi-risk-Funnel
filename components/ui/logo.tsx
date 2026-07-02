import Image from "next/image";
import { cn } from "@/utils/cn";

type LogoProps = {
  /** "white" for dark backgrounds, "color" for light backgrounds */
  variant?: "white" | "color";
  /** "full" = full stacked lockup, "mark" = symbol only */
  type?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

// Intrinsic dimensions of the processed assets (keeps aspect ratio correct).
const DIMS = {
  full: { w: 720, h: 806 },
  mark: { w: 350, h: 557 },
};

export default function Logo({
  variant = "white",
  type = "full",
  className,
  priority = false,
}: LogoProps) {
  const src = `/logo${type === "mark" ? "-mark" : ""}-${variant}.png`;
  const { w, h } = DIMS[type];

  return (
    <Image
      src={src}
      alt="Multi Risk Brokers · Makelaars · FSP 6280"
      width={w}
      height={h}
      priority={priority}
      // Consumers set the height (e.g. `h-9`); width scales automatically.
      className={cn("w-auto object-contain", className)}
    />
  );
}
