import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { site } from "../../data/site";
import { milestones, awards, fieldGallery } from "../../data/history";

export const metadata = {
  title: "About Jai Indira Agro Engineering | Agricultural Machinery Manufacturer",
  description:
    "Jai Indira Agro Engineering, established 2009 in Pollachi, Coimbatore. National Farm Innovators Meet recognition, 2010 & 2011. Manufacturer of agricultural machinery for Indian farms.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-pad">
          <div className="container-shell max-w-3xl">
            <p className="eyebrow text-leaf">About Us</p>
            <h1 className="display mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Built on Experience.
              <br />
              Engineered for Agriculture.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              Jai Indira Agro Engineering manufactures practical agricultural machinery
              for the realities of Indian farming — residue management, fodder processing
              and durable field equipment.
            </p>
          </div>
        </section>

        <section className="border-t border-black/5 bg-white py-16">
          <div className="container-shell grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">Established</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{site.established}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">Leadership</p>
              <p className="mt-2 text-xl font-semibold text-ink">{site.founder}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">Manufacturing</p>
              <p className="mt-2 text-xl font-semibold text-ink">
                {site.location.city}, {site.location.state}
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-ink/70">
              <p>
                From a manufacturing base in Pollachi, Coimbatore district, we focus on
                heavy-duty machines that solve everyday agricultural problems: processing
                banana waste, coconut fronds, crop residue and preparing fodder.
              </p>
              <p>
                The philosophy is straightforward — engineer practical machinery for the
                realities of Indian agriculture. That means tractor compatibility, clear
                specifications, and equipment that can be maintained and supported over
                years of farm use.
              </p>
              <p>
                We welcome enquiries from large farms, distributors, institutional buyers
                and partners who need reliable residue-management and fodder-processing
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey — sourced timeline, see data/history.js */}
        <section className="border-t border-black/5 bg-white py-16">
          <div className="container-shell">
            <h2 className="text-2xl font-semibold">Our Journey</h2>
            <p className="mt-3 max-w-2xl text-ink/60">
              Every milestone below is drawn from a supplied certificate, letter or public
              listing — see the source note on each.
            </p>
            <div className="mt-10 space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 sm:gap-10">
                  <div className="flex flex-col items-center">
                    <span className="grid h-11 w-20 shrink-0 place-items-center rounded-full bg-forest text-xs font-bold text-white sm:w-24 sm:text-sm">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-black/10" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-base font-semibold text-ink sm:text-lg">{m.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
                      {m.text}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-ink/35">
                      Source: {m.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing — real yard/factory/field photography */}
        <section className="section-pad">
          <div className="container-shell">
            <h2 className="text-2xl font-semibold">Manufacturing</h2>
            <p className="mt-3 max-w-2xl text-ink/60">
              A look at the JIAE yard, workshop and field demonstrations in Pollachi.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fieldGallery.map((g, i) => (
                <figure
                  key={i}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand"
                >
                  <Image
                    src={g.image}
                    alt={g.caption}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 text-xs text-white">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition & Awards — real certificates, kept separate from generic quality claims */}
        <section id="recognition" className="border-t border-black/5 bg-white py-16">
          <div className="container-shell max-w-5xl">
            <h2 className="text-2xl font-semibold">Recognition & Awards</h2>
            <p className="mt-3 max-w-2xl text-ink/60">
              Driven by quality, reliability and agricultural innovation. Explore our awards
              and recognitions received for our contribution to agricultural engineering.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((a, i) => (
                <div key={i} className="overflow-hidden rounded-3xl border border-black/5 bg-cream/60">
                  <div className="relative aspect-[4/5] w-full bg-white">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-contain p-3"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-leaf">{a.year}</p>
                    <h3 className="mt-1 text-sm font-semibold leading-snug text-ink">{a.title}</h3>
                    <p className="mt-1 text-xs text-ink/55">{a.org}</p>
                    <p className="mt-2 text-xs leading-5 text-ink/60">{a.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-white py-16">
          <div className="container-shell">
            <div className="rounded-4xl bg-forest px-8 py-12 text-white sm:px-12">
              <h2 className="text-2xl font-semibold sm:text-3xl">Visit or contact us</h2>
              <p className="mt-3 max-w-lg text-white/70">{site.location.address}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href={`tel:+${site.contact.phoneRaw}`} className="font-semibold underline-offset-2 hover:underline">
                  {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="font-semibold underline-offset-2 hover:underline">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
