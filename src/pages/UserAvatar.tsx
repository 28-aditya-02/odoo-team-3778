import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
  xl: "h-32 w-32"
};

export function UserAvatar({ src, name, size = "lg", className }: UserAvatarProps) {
  return (
    <Avatar className={`${sizeClasses[size]} ${className} ring-4 ring-green-200 shadow-soft`}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-gradient-subtle text-green-700">
        {name ? name.charAt(0).toUpperCase() : <User className="h-8 w-8" />}
      </AvatarFallback>
    </Avatar>
  );
}