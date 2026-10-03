import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";
import { site } from "../../data/site";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a quotation for agricultural machinery from Jai Indira Agro Engineering. Tell us your application and tractor details.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow text-leaf">Request a Quote</p>
              <h1 className="display mt-4 text-4xl font-semibold sm:text-5xl">
                Tell us what you need.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-ink/60">
                Our team will help you identify the right machinery for your application.
                Prefer a direct conversation? Use the channels below.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href={`tel:+${site.contact.phoneRaw}`}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-forest">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">Phone</p>
                    <p className="mt-1 font-semibold text-ink">{site.contact.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-forest">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">WhatsApp</p>
                    <p className="mt-1 font-semibold text-ink">Message us</p>
                  </div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-forest">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">Email</p>
                    <p className="mt-1 font-semibold text-ink">{site.contact.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-forest">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">Head Office</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{site.location.address}</p>
                    <p className="mt-1 text-xs text-ink/45">{site.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
