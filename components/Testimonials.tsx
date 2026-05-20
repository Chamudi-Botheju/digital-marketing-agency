import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Testimonials
          </span>
          <h2 className="section-heading mt-3">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="glass-card relative p-8 lg:p-10"
            >
              <Quote className="absolute right-8 top-8 h-10 w-10 text-brand-500/20" />
              <p className="relative text-lg leading-relaxed text-zinc-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="relative mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


