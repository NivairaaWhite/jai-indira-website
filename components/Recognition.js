import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { awards } from "../data/history";

export default function Recognition() {
  return (
    <section className="border-t border-black/5 bg-white py-16">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-leaf">Recognition</p>
            <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-ink/60">
              Recognized for contributions to agricultural innovation and engineering.
            </p>
          </div>
          <Link
            href="/about#recognition"
            className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30"
          >
            Our full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {awards.map((a, i) => (
            <div key={i} className="flex items-center gap-4 rounded-3xl bg-cream/70 p-4">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-white shadow-card">
                <Image src={a.image} alt={a.title} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-leaf">{a.year}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-ink">{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
