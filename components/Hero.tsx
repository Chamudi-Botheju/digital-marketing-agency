"use client";

import Image from "next/image";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import { TRUSTED_BY } from "@/lib/constants";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <Zap className="h-4 w-4" />
              <span>Trusted by 120+ brands worldwide</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Grow Your Business With{" "}
              <span className="gradient-text">Smart Digital</span> Marketing
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              We help brands increase visibility, generate leads, and grow
              revenue through creative digital strategies backed by real data.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="btn-primary"
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="btn-secondary"
              >
                <Play className="h-4 w-4" />
                View Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { icon: TrendingUp, value: "250%", label: "Avg. Growth" },
                { icon: Users, value: "120+", label: "Campaigns" },
                { icon: Zap, value: "95%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="mb-2 h-5 w-5 text-brand-400" />
                  <p className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up animate-delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-brand-900/50">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                alt="Digital marketing analytics dashboard"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl border border-white/10 bg-surface-elevated/90 p-4 shadow-xl backdrop-blur-xl sm:-left-8">
              <p className="text-xs font-medium text-zinc-400">Monthly leads</p>
              <p className="font-display text-2xl font-bold text-emerald-400">
                +847%
              </p>
            </div>

            <div className="absolute -right-4 -top-4 animate-float rounded-2xl border border-white/10 bg-surface-elevated/90 p-4 shadow-xl backdrop-blur-xl sm:-right-8 animate-delay-300">
              <p className="text-xs font-medium text-zinc-400">ROI this quarter</p>
              <p className="font-display text-2xl font-bold text-brand-300">
                3.2x
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animate-delay-400">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-zinc-500">
            Trusted by innovative brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_BY.map((brand) => (
              <span
                key={brand}
                className="font-display text-lg font-semibold text-zinc-600 transition-colors hover:text-zinc-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


