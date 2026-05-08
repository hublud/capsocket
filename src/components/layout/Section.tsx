import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 w-full",
        dark ? "bg-charcoal text-offwhite" : "bg-offwhite text-charcoal",
        className
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 md:px-12 w-full",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
