import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <div className="container-shell max-w-3xl">
          <h1 className="display text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-ink/60">Last updated: August 2026</p>
          <div className="mt-10 space-y-6 text-base leading-8 text-ink/75">
            <p>
              {site.name} (“we”, “us”) respects your privacy. This policy describes how we
              handle information submitted through this website.
            </p>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p>
              When you submit a quote request or contact form, we collect the details you
              provide — typically name, phone/WhatsApp number, email, location, machine of
              interest and requirement description. We do not sell this information.
            </p>
            <h2 className="text-xl font-semibold text-ink">How we use it</h2>
            <p>
              We use submitted information solely to respond to your enquiry, prepare
              quotations, and provide related sales or support communication. Analytics
              tools (if enabled) may collect anonymised usage data to improve the site.
            </p>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p>
              For privacy-related questions, contact us at {site.contact.email} or{" "}
              {site.contact.phone}.
            </p>
            <p className="text-sm text-ink/50">
              This is a baseline policy. Have your legal advisor review and customise
              before production launch.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
