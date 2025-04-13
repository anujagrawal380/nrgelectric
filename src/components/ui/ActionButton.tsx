import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  href: string;
  text: string;
  variant: "orange" | "white";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  text,
  variant = "orange",
  showArrow = true,
  className,
  onClick,
}) => {
  const buttonStyles = cn(
    "rounded-md text-base py-2 px-6 transition-colors",
    variant === "orange"
      ? "bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] text-white"
      : "bg-white text-orange-600 hover:bg-orange-50 hover:scale-[1.02] border border-transparent",
    className
  );

  const buttonContent = (
    <>
      {text}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (onClick) {
    return (
      <Button className={buttonStyles} onClick={onClick}>
        {buttonContent}
      </Button>
    );
  }

  return (
    <Link href={href}>
      <Button className={buttonStyles}>{buttonContent}</Button>
    </Link>
  );
};
