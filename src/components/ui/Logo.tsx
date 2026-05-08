import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <svg
        viewBox="0 0 280 80"
        className="h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 55.2C18.2 55.2 12.5 52.8 8.4 48C4.3 43.2 2.2 36.5 2.2 27.9C2.2 19.3 4.3 12.6 8.4 7.8C12.5 3 18.2 0.6 25.5 0.6C30.5 0.6 34.8 1.8 38.4 4.2C42 6.6 44.5 10.2 45.9 15H34.4C33.3 12.6 31.8 10.9 29.9 9.9C28 8.9 25.9 8.4 23.6 8.4C20.4 8.4 17.8 9.5 15.8 11.7C13.8 13.9 12.8 17.3 12.8 21.9V33.9C12.8 38.5 13.8 41.9 15.8 44.1C17.8 46.3 20.4 47.4 23.6 47.4C25.9 47.4 28 46.9 29.9 45.9C31.8 44.9 33.3 43.2 34.4 40.8H45.9C44.5 45.6 42 49.2 38.4 51.6C34.8 54 30.5 55.2 25.5 55.2Z"
          fill="#005EB8"
        />
        {/* Simplified paths for the rest of the logo to ensure clean rendering */}
        <text
          x="48"
          y="54"
          fill="#005EB8"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: "bold",
            fontSize: "48px",
            fontStyle: "italic",
            letterSpacing: "-0.05em"
          }}
        >
          apSoc
        </text>
        <g transform="translate(182, 54)">
          <text
            fill="#005EB8"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: "bold",
              fontSize: "48px",
              fontStyle: "italic",
              letterSpacing: "-0.05em"
            }}
          >
            k
          </text>
          {/* Arrow on the k */}
          <path
            d="M20 -38L32 -50L32 -36L20 -38Z"
            fill="#005EB8"
            transform="translate(4, 0)"
          />
          <path
            d="M18 -25L28 -45L35 -40L25 -20L18 -25Z"
            fill="#005EB8"
            transform="translate(2, 0)"
          />
        </g>
        <text
          x="215"
          y="54"
          fill="#005EB8"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: "bold",
            fontSize: "48px",
            fontStyle: "italic",
            letterSpacing: "-0.05em"
          }}
        >
          et
        </text>
        <circle cx="270" cy="15" r="8" stroke="#005EB8" strokeWidth="1.5" />
        <text
          x="266"
          y="19"
          fill="#005EB8"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          R
        </text>
      </svg>
    </div>
  );
}

