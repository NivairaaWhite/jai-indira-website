import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getActiveMachines } from "../../data/machines";

export const metadata = {
  title: "Resources",
  description:
    "Product brochures, technical specifications, operating information and FAQs from Jai Indira Agro Engineering.",
};

const resourceTypes = [
  {
    title: "Product Brochures",
    text: "Overview brochures for each machine family — available on request via WhatsApp or phone.",
  },
  {
    title: "Technical Specifications",
    text: "Model, capacity, power requirements and dimensions are published on every machine page.",
  },
  {
    title: "Operating Manuals",
    text: "Safety and operating guidance for machine owners, provided at the time of purchase.",
  },
  {
    title: "Videos",
    text: "Field demonstration videos are available on select machine pages.",
  },
  {
    title: "Warranty Information",
    text: "Warranty coverage varies by machine — see the individual product page for current terms.",
  },
  {
    title: "FAQs",
    text: "Common questions on tractor compatibility, capacity and ordering are answered on each product page.",
  },
];

export default function ResourcesPage() {
  const machines = getActiveMachines();

  return (
    <>
      <Navbar />
      <main>
        <section className="section-pad pb-8">
          <div className="container-shell max-w-3xl">
            <p className="eyebrow text-leaf">Resources</p>
            <h1 className="display mt-3 text-4xl font-semibold sm:text-5xl">
              Documentation & downloads
            </h1>
            <p className="mt-5 text-base leading-7 text-ink/60">
              Specifications, brochures and ordering information for every JIAE machine —
              organised in one place for quick reference.
            </p>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTypes.map((r) => (
              <div key={r.title} className="rounded-3xl bg-white p-6 shadow-card">
                <h2 className="font-semibold text-ink">{r.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/55">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 bg-white py-14">
          <div className="container-shell">
            <h2 className="text-xl font-semibold">Browse by machine</h2>
            <ul className="mt-6 divide-y divide-black/5 rounded-3xl border border-black/5 bg-cream">
              {machines.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/machinery/${m.slug}`}
                    className="flex items-center justify-between px-5 py-4 text-sm font-medium text-ink transition hover:bg-white"
                  >
                    <span>{m.name}</span>
                    <span className="text-ink/40">{m.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
