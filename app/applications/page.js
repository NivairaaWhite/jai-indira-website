import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { applications } from "../../data/applications";
import { getMachine } from "../../data/machines";

export const metadata = {
  title: "Applications",
  description:
    "Banana waste management, coconut waste processing, farm residue shredding, fodder preparation — see which JIAE machines solve your application.",
};

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-pad pb-8">
          <div className="container-shell max-w-3xl">
            <p className="eyebrow text-leaf">Applications</p>
            <h1 className="display mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Problems our machinery solves
            </h1>
            <p className="mt-5 text-base leading-7 text-ink/60">
              Instead of a simple product list, see the farm challenges each machine is
              built for — and which equipment we recommend.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-shell space-y-6">
            {applications.map((app) => (
              <article
                key={app.slug}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8"
              >
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{app.title}</h2>
                <p className="mt-2 text-ink/60">{app.summary}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">
                      The challenge
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{app.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">
                      Our approach
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{app.solution}</p>
                  </div>
                </div>
                {app.recommended?.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">
                      Recommended machinery
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {app.recommended.map((slug) => {
                        const m = getMachine(slug);
                        if (!m) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/machinery/${slug}`}
                            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-sm font-medium text-forest transition hover:bg-sand"
                          >
                            {m.name} <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
