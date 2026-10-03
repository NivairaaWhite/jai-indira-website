import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getActiveMachines, getCategories } from "../data/machines";
import MachineCard from "./MachineCard";

export default function ProductBento() {
  const list = getActiveMachines();
  const categories = getCategories();
  const [first, ...rest] = list;

  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-leaf">Machinery</p>
            <h2 className="display mt-3 text-4xl font-semibold sm:text-5xl">
              Built for Real
              <br />
              Agricultural Work
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/60">
              Explore machinery designed for residue management, fodder processing and
              demanding farm applications.
            </p>
          </div>
          <Link
            href="/machinery"
            className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-white"
          >
            View all machinery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/machinery#${cat.slug}`}
              className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-card transition hover:text-forest"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {first && <MachineCard machine={first} large />}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.slice(0, 4).map((m) => (
              <MachineCard key={m.slug} machine={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
