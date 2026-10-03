import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MachineCard from "../../../components/MachineCard";
import QuoteForm from "../../../components/QuoteForm";
import { getMachine, getActiveMachines } from "../../../data/machines";
import { site } from "../../../data/site";

export function generateStaticParams() {
  return getActiveMachines().map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const m = getMachine(params.slug);
  if (!m || m.status !== "active") return { title: "Machine not found" };
  return {
    title: m.name,
    description: m.shortDescription,
    openGraph: {
      title: m.name,
      description: m.shortDescription,
      images: [{ url: m.image }],
    },
  };
}

export default function MachinePage({ params }) {
  const machine = getMachine(params.slug);
  if (!machine || machine.status !== "active") notFound();

  const related = (machine.related || [])
    .map((slug) => getMachine(slug))
    .filter(Boolean);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: machine.shortDescription,
    image: machine.image,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${site.url}/machinery/${machine.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Machinery", item: `${site.url}/machinery` },
      {
        "@type": "ListItem",
        position: 3,
        name: machine.name,
        item: `${site.url}/machinery/${machine.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="pb-20">
        {/* Breadcrumb */}
        <div className="border-b border-black/5 bg-white">
          <div className="container-shell py-3 text-sm text-ink/50">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span className="mx-2">→</span>
            <Link href="/machinery" className="hover:text-ink">
              Machinery
            </Link>
            <span className="mx-2">→</span>
            <span className="text-ink">{machine.name}</span>
          </div>
        </div>

        {/* Product header */}
        <section className="section-pad pb-10">
          <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
              <Image
                src={machine.image}
                alt={machine.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="eyebrow text-leaf">{machine.category}</p>
              <h1 className="display mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
                {machine.name}
              </h1>
              <p className="mt-2 text-lg text-ink/55">{machine.model}</p>
              <p className="mt-5 text-base leading-7 text-ink/70">{machine.shortDescription}</p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {machine.keySpecs.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white p-4 shadow-card">
                    <p className="text-lg font-semibold text-ink">{s.value}</p>
                    <p className="mt-0.5 text-xs text-ink/45">{s.label}</p>
                  </div>
                ))}
              </div>

              {machine.indicativePrice && (
                <div className="mt-5 rounded-2xl bg-forest/5 px-5 py-4">
                  <p className="text-xl font-semibold text-ink">
                    {machine.indicativePrice}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-forest">Indicative price</p>
                  <p className="mt-1.5 text-xs leading-5 text-ink/50">{site.pricingDisclaimer}</p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#quote"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white hover:bg-leaf"
                >
                  Request a Quote
                </Link>
                <a
                  href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello, I am interested in ${machine.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </a>
                <a
                  href={`tel:+${site.contact.phoneRaw}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-t border-black/5 bg-white py-14">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-semibold">Machine Overview</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">{machine.description}</p>
            {machine.benefits?.length > 0 && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {machine.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Applications */}
        {machine.applications?.length > 0 && (
          <section className="py-14">
            <div className="container-shell">
              <h2 className="text-2xl font-semibold">Applications</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {machine.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-card"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specs */}
        <section className="border-t border-black/5 bg-white py-14">
          <div className="container-shell">
            <h2 className="text-2xl font-semibold">Technical Specifications</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {machine.general?.length > 0 && (
                <div className="overflow-hidden rounded-3xl border border-black/5">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th colSpan={2}>General</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machine.general.map((row) => (
                        <tr key={row.label}>
                          <td className="w-2/5 font-medium text-ink/70">{row.label}</td>
                          <td className="font-semibold text-ink">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {machine.performance?.length > 0 && (
                <div className="overflow-hidden rounded-3xl border border-black/5">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>Application</th>
                        <th>Capacity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machine.performance.map((row) => (
                        <tr key={row.application}>
                          <td className="font-medium text-ink/70">{row.application}</td>
                          <td className="font-semibold text-ink">{row.capacity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {machine.material?.length > 0 && (
                <div className="overflow-hidden rounded-3xl border border-black/5">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th colSpan={2}>Material / Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machine.material.map((row) => (
                        <tr key={row.label}>
                          <td className="w-2/5 font-medium text-ink/70">{row.label}</td>
                          <td className="font-semibold text-ink">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {machine.gallery?.length > 0 && (
          <section className="py-14">
            <div className="container-shell">
              <h2 className="text-2xl font-semibold">Gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {machine.gallery.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                    <Image src={src} alt={`${machine.name} photo ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video placeholder */}
        {machine.video?.youtubeId && (
          <section className="border-t border-black/5 bg-white py-14">
            <div className="container-shell">
              <h2 className="text-2xl font-semibold">See It in Action</h2>
              <p className="mt-2 text-ink/60">{machine.video.title || machine.name}</p>
              <div className="mt-6 aspect-video overflow-hidden rounded-3xl bg-ink">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${machine.video.youtubeId}`}
                  title={machine.video.title || machine.name}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* Warranty */}
        <section className="py-10">
          <div className="container-shell">
            <div className="rounded-3xl bg-sand/60 px-6 py-5 text-sm text-ink/70">
              <strong className="text-ink">Warranty:</strong> {machine.warranty}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {machine.faqs?.length > 0 && (
          <section className="border-t border-black/5 bg-white py-14">
            <div className="container-shell max-w-3xl">
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-6">
                {machine.faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-ink">{f.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/65">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="py-14">
            <div className="container-shell">
              <h2 className="text-2xl font-semibold">Related Machinery</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((m) => (
                  <MachineCard key={m.slug} machine={m} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quote form */}
        <section id="quote" className="border-t border-black/5 bg-white py-16">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow text-leaf">Request a Quote</p>
              <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
                Interested in {machine.name}?
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/60">
                Tell us your application and tractor details. We will respond with a
                practical recommendation and quotation.
              </p>
            </div>
            <QuoteForm preselectedSlug={machine.slug} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
