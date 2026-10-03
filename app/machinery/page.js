import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MachineCard from "../../components/MachineCard";
import { getActiveMachines, getCategories, getMachinesByCategory } from "../../data/machines";

export const metadata = {
  title: "Machinery",
  description:
    "Explore agricultural machinery from Jai Indira Agro Engineering — tractor-operated shredders, pulverizers, chaff cutters and waste-shredding equipment.",
};

const categoryBlurb = {
  "residue-management": "Tractor-operated machines for banana waste, coconut fronds and general crop residue.",
  "shredding-pulverizing": "Higher-capacity shredding and pulverizing for demanding processing needs.",
  "fodder-processing": "Equipment for preparing fodder on dairy and mixed farms.",
  "waste-biomass-shredding": "Shredders for poultry, municipal and general organic/biomass waste.",
};

export default function MachineryPage() {
  const categories = getCategories();
  const total = getActiveMachines().length;

  return (
    <>
      <Navbar />
      <main>
        <section className="section-pad pb-8">
          <div className="container-shell">
            <p className="eyebrow text-leaf">Catalogue</p>
            <h1 className="display mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Our Machinery
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60">
              {total} machines across {categories.length} categories. Choose the equipment for
              your agricultural application — every model has specifications, applications
              and a clear path to request a quotation.
            </p>
          </div>
        </section>

        {categories.map((cat) => {
          const items = getMachinesByCategory(cat.slug);
          return (
            <section key={cat.slug} id={cat.slug} className="border-t border-black/5 py-14 first:border-t-0">
              <div className="container-shell">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-ink">{cat.name}</h2>
                    {categoryBlurb[cat.slug] && (
                      <p className="mt-2 max-w-xl text-sm text-ink/55">{categoryBlurb[cat.slug]}</p>
                    )}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink/35">
                    {items.length} {items.length === 1 ? "machine" : "machines"}
                  </span>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((m) => (
                    <MachineCard key={m.slug} machine={m} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
