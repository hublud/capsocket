"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center select-none group", className)}>
      <img
        src="/logo.png"
        alt="CapSocket Logo"
        className="h-16 w-auto object-contain block mix-blend-multiply"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="hidden font-heading font-bold text-3xl tracking-tight text-primary">
        CapSocket<span className="text-primary italic">®</span>
      </span>
    </div>
  );
}




