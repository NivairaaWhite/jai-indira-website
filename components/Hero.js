import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedMachines } from "../data/machines";
import { site } from "../data/site";
import VideoLightbox from "./VideoLightbox";

export default function Hero() {
  const featured = getFeaturedMachines().slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Agricultural machinery operating in the field"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-shell relative flex min-h-[min(92vh,820px)] flex-col justify-end pb-8 pt-28">
        <div className="max-w-3xl pb-10 md:pb-16">
          <p className="eyebrow text-white/60">{site.name} · Est. {site.established}</p>
          <h1 className="display mt-5 text-[2.75rem] font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
            Agricultural
            <br />
            Machinery Built
            <br />
            for Real Farms.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Heavy-duty shredders, pulverizers and chaff cutters for residue management,
            fodder processing and real field work — manufactured in Pollachi since 2009.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/machinery"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-cream"
            >
              Explore Machinery <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Request a Quote
            </Link>
            <VideoLightbox
              youtubeId={site.media.heroVideoId}
              title={site.media.heroVideoTitle}
              triggerLabel="Watch it in Action"
              triggerClassName="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            />
          </div>
        </div>

        {/* Floating machine cards from data */}
        <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((m) => (
            <Link
              key={m.slug}
              href={`/machinery/${m.slug}`}
              className="glass group rounded-3xl p-5 text-ink shadow-2xl transition hover:-translate-y-1"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-leaf">
                {m.category}
              </p>
              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold leading-snug sm:text-xl">{m.name}</h2>
                  <p className="mt-1 text-xs text-ink/55">
                    {m.keySpecs[0]?.value} · {m.keySpecs[0]?.label}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-white transition group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
