import { Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-elevated">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              GrowthLab
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} GrowthLab Marketing Agency. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


