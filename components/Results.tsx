import { STATS } from "@/lib/constants";

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface to-surface" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Proven Results
          </span>
          <h2 className="section-heading mt-3">
            Impact That <span className="gradient-text">Speaks Numbers</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real outcomes from real campaigns. Here is what we have delivered for
            our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-card to-surface-elevated p-8 text-center transition-all duration-500 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-600/10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-all group-hover:bg-brand-500/20" />
              <p
                className="relative font-display text-5xl font-bold gradient-text"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {stat.value}
              </p>
              <p className="relative mt-2 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


