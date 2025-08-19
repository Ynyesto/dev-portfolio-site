import { ReactNode } from "react";

interface BookCallButtonProps {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "white" | "glass" | "purple";
}

export default function BookCallButton({
  children = "Book a call",
  className = "",
  size = "md",
  variant = "white",
}: BookCallButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-12 px-8 text-base",
  };

  const variantClasses = {
    white: "bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:border-white/50",
    glass: "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/40",
    purple:
      "bg-purple-500/50 hover:from-cyan-400 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(6,182,246,0.4)] border-hidden",
  };

  const baseClasses =
    "rounded-full border-2 transition-all duration-300 text-white hover:scale-105 font-medium flex items-center shadow-lg relative overflow-hidden group";

  return (
    <a
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      href="https://calendly.com/ynyesto/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Blue wave animation for both variants */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 transform -skew-x-12 blue-wave-animation"></div>
      <span className="relative z-10">{children}</span>
    </a>
  );
}
