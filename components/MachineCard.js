import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MachineCard({ machine, large = false }) {
  return (
    <Link
      href={`/machinery/${machine.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft ${
        large ? "min-h-[340px] sm:min-h-[400px]" : "min-h-[300px]"
      }`}
    >
      <div className={`relative ${large ? "h-56 sm:h-64" : "h-44"} w-full overflow-hidden bg-sand`}>
        <Image
          src={machine.image}
          alt={machine.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes={large ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 100vw, 33vw"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-leaf">
          {machine.category}
        </p>
        <h3 className={`mt-2 font-semibold text-ink ${large ? "text-2xl" : "text-lg"}`}>
          {machine.name}
        </h3>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/60">
          {machine.keySpecs.slice(0, 3).map((s) => (
            <span key={s.label}>
              <span className="font-medium text-ink">{s.value}</span>{" "}
              <span className="text-ink/45">{s.label}</span>
            </span>
          ))}
        </div>
        {machine.indicativePrice && (
          <p className="mt-3 text-sm font-semibold text-ink">
            {machine.indicativePrice}{" "}
            <span className="text-xs font-normal text-ink/40">Indicative price</span>
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-sm font-semibold text-forest">View Machine</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
