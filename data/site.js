/**
 * Central site configuration.
 *
 * Sourced from: JIAE_Website_Content_Pack (supplied certificates, spec chart,
 * pamphlet, 2022 email) + a live fetch of indiamart.com/jaiindiraagroengineerings
 * on 2026-08-26, reviewed and approved by the client. See data/history.js for
 * citations on each claim below.
 */

export const site = {
  name: "Jai Indira Agro Engineering",
  tagline: "Engineering Agriculture for Tomorrow.",
  description:
    "Agricultural machinery manufacturer in Pollachi, Tamil Nadu since 2009 — tractor-operated shredders, pulverizers and chaff cutters for residue management and fodder processing.",
  url: "https://jaiindiraagro.com", // set to the final domain once registered
  established: 2009,
  founder: "Mr. K. Natarajan",
  location: {
    city: "Pollachi",
    state: "Tamil Nadu",
    country: "India",
    address: "3/136, Udhavipalayam, Chinnanegamam Post, Pollachi, Coimbatore – 642120",
  },
  contact: {
    phone: "+91 97158 50469",
    phoneRaw: "919715850469",
    whatsapp: "919715850469",
    email: "jiaenatarajan@gmail.com",
    hours: "Mon–Sat 9:00–18:00 IST",
  },
  media: {
    // Tractor-operated shredder processing banana farm waste — real field footage.
    heroVideoId: "1cJQeU17psE",
    heroVideoTitle: "JIAE Tractor Operated Farm Waste Shredder — Banana Waste in Action",
  },
  // Primary navbar — kept short on purpose (feedback: only what helps a
  // customer decide). Applications/Resources still exist as pages; see footerNav.
  nav: [
    { label: "Machinery", href: "/machinery" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  // Fuller sitemap for the footer.
  footerNav: [
    { label: "Home", href: "/" },
    { label: "Machinery", href: "/machinery" },
    { label: "Applications", href: "/applications" },
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: { label: "Request a Quote", href: "/contact" },
  trustItems: [
    { title: "Established 2009", text: "Manufacturing in Pollachi, Tamil Nadu" },
    { title: "Direct Manufacturer", text: "Factory-direct enquiries" },
    { title: "National Recognition", text: "ICAR Farm Innovators Meet, 2010 & 2011" },
    { title: "Direct Assistance", text: "Get in touch with JIAE for product information, specifications and quotations." },
  ],
  // Standard note shown with every indicative price on the site.
  pricingDisclaimer:
    "Includes GST and transport, as specified by JIAE. Please confirm the current price and payment terms with JIAE before ordering.",
  keywords: [
    "Jai Indira Agro Engineering",
    "agricultural machinery Pollachi",
    "farm waste shredder",
    "tractor operated shredder",
    "banana waste shredder",
    "coconut waste shredder",
    "chaff cutter Tamil Nadu",
    "agricultural equipment manufacturer Coimbatore",
    "biomass shredder",
    "municipal solid waste shredder",
  ],
};
