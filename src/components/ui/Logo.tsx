import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <Image
        src="/logo.png"
        alt="CapSocket Logo"
        width={200}
        height={60}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}


