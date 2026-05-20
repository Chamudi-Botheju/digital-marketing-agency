"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "CDJK3A2E1_3HQQCH4";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_bjkoogp";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_858svqu";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.get("name") as string,
        from_email: formData.get("email") as string,
        message: formData.get("message") as string,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-50" />

      <div className="section-container relative">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Get In Touch
            </span>
            <h2 className="section-heading mt-3">
              Let&apos;s Grow Your{" "}
              <span className="gradient-text">Business Together</span>
            </h2>
            <p className="section-subheading">
              Ready to take your marketing to the next level? Tell us about
              your goals and we will craft a strategy that delivers.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href="tel:+94764384522"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  +94 76 438 4522
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href="tel:+94715462816"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  +94 71 546 2816
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-zinc-300">Kandy, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 lg:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-400" />
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-zinc-400">
                  We will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-secondary mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business and goals..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Failed to send message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


