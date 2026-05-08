export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center font-heading font-bold text-2xl tracking-tight text-primary ${className}`}>
      CapSoc<span className="relative inline-flex items-end">k<svg className="absolute -top-1 -right-2 w-4 h-4 text-primary fill-current" viewBox="0 0 24 24"><path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/></svg></span>et<sup className="text-[10px] ml-0.5 relative -top-3">®</sup>
    </div>
  );
}
