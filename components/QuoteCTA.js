import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-4xl bg-forest px-8 py-14 text-white sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow text-white/50">Next step</p>
            <h2 className="display mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Tell us what your operation needs.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              Share your application, tractor horsepower and preferred contact method.
              Our team will help identify the right machinery.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-cream"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* decorative */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
