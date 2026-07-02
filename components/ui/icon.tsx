import {
  Award,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Gem,
  HeartHandshake,
  Home,
  Phone,
  Shield,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  UserCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Gem,
  HeartHandshake,
  Home,
  Phone,
  Shield,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  UserCheck,
  Users,
  Zap,
};

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const Component = iconMap[name] ?? Sparkles;
  return <Component className={className} aria-hidden />;
}
