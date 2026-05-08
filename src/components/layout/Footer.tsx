import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite/80 py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="bg-white p-2 inline-block rounded mb-6">
            <Logo />
          </div>
          <p className="max-w-sm mb-6 text-sm leading-relaxed">
            Connecting agricultural production to commercial markets through responsible sourcing, trade coordination, and wholesale distribution across African and international markets.
          </p>
        </div>

        <div>
          <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="block text-white/50 text-xs mb-1">Address</span>
              75 Shelton Street<br />
              London WC1H 9JQ<br />
              United Kingdom
            </li>
            <li>
              <span className="block text-white/50 text-xs mb-1">Email</span>
              <a href="mailto:contact@capsocket.com" className="hover:text-white transition-colors">
                contact@capsocket.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#operating-model" className="hover:text-white transition-colors">Operating Model</a></li>
            <li><a href="#partnerships" className="hover:text-white transition-colors">Partnerships</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
        <p>CapSocket Holdings Limited © {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Registered in the United Kingdom.</p>
      </div>
    </footer>
  );
}
