import Image from "next/image";
import { CheckCircle2, BarChart3, Lightbulb, Target } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const features = [
  {
    icon: BarChart3,
    title: "Analytics First",
    description: "Every decision backed by real performance data.",
  },
  {
    icon: Lightbulb,
    title: "Creative Edge",
    description: "Campaigns that stand out in crowded markets.",
  },
  {
    icon: Target,
    title: "ROI Focused",
    description: "Measurable outcomes, not vanity metrics.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Marketing team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-surface-elevated p-6 shadow-2xl lg:-right-10">
              <p className="font-display text-4xl font-bold gradient-text">8+</p>
              <p className="mt-1 text-sm text-zinc-400">Years of excellence</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Why Choose Us
            </span>
            <h2 className="section-heading mt-3">
              Your Growth Partner,{" "}
              <span className="gradient-text">Not Just an Agency</span>
            </h2>
            <p className="section-subheading">
              We combine creativity, analytics, and proven marketing strategies
              to help businesses grow faster and smarter.
            </p>

            <ul className="mt-8 space-y-4">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <feature.icon className="mb-2 h-5 w-5 text-brand-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


