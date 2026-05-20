import {
  Megaphone,
  PenLine,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<(typeof SERVICES)[number]["icon"], LucideIcon> = {
  share2: Share2,
  search: Search,
  megaphone: Megaphone,
  pen: PenLine,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            What We Do
          </span>
          <h2 className="section-heading mt-3">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="section-subheading mx-auto">
            End-to-end digital marketing solutions tailored to scale your brand
            and maximize every marketing dollar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="group glass-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-brand-500/5 hover:shadow-lg hover:shadow-brand-600/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 text-brand-400 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


