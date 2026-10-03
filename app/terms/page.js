import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

export const metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <div className="container-shell max-w-3xl">
          <h1 className="display text-4xl font-semibold">Terms & Conditions</h1>
          <p className="mt-4 text-ink/60">Last updated: August 2026</p>
          <div className="mt-10 space-y-6 text-base leading-8 text-ink/75">
            <p>
              By using this website you agree to these terms. Specifications, capacities
              and availability described on the site are indicative and subject to
              confirmation at the time of quotation and order.
            </p>
            <h2 className="text-xl font-semibold text-ink">Quotations & orders</h2>
            <p>
              Submitting a quote request does not create a binding contract. Prices,
              delivery schedules and commercial terms are confirmed only in a formal
              quotation or order acceptance issued by {site.name}.
            </p>
            <h2 className="text-xl font-semibold text-ink">Product information</h2>
            <p>
              We strive for accurate technical information. If any specification requires
              verification, it will be confirmed before order finalisation. Images are
              representative and may not show the exact configuration supplied.
            </p>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p>
              Questions about these terms: {site.contact.email} · {site.contact.phone}.
            </p>
            <p className="text-sm text-ink/50">
              Baseline terms only. Review with legal counsel before production use.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
