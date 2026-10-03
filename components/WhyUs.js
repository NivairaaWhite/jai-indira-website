import { site } from "../data/site";

const points = [
  {
    title: "Direct Manufacturer",
    text: "JIAE manufactures agricultural machinery in Pollachi, Tamil Nadu, with direct enquiries from customers.",
  },
  {
    title: "Built for Indian farm realities",
    text: "Tractor ranges, PTO standards and the materials farmers actually process — wet banana waste, coconut fronds, mixed residue.",
  },
  {
    title: "Clear technical information",
    text: "Specifications, applications and documentation organised so buyers can evaluate machines without chasing PDFs.",
  },
  {
    title: "Direct quotation path",
    text: "Request a quote with your application and tractor details. We respond with practical recommendations.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad border-y border-black/5 bg-white">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-leaf">Why JIAE</p>
          <h2 className="display mt-3 text-4xl font-semibold sm:text-5xl">
            Engineering practical machinery for the realities of Indian agriculture.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/60">
            Established {site.established}. Manufacturing from {site.location.city},{" "}
            {site.location.state}. Focused on durable agricultural equipment that solves
            real residue and fodder challenges.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-3xl border border-black/5 bg-cream p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/60">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
