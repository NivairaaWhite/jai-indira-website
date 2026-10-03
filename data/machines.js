/**
 * Machine catalogue — single source of truth.
 *
 * To add a new machine:
 * 1. Add an object below with a unique slug.
 * 2. Drop images into public/images/machines/[slug]/
 *    Recommended: main.webp, front.webp, side.webp, rear.webp, field.webp, detail.webp
 * 3. Mark every technical value as verified or needs confirmation in comments.
 *
 * Status: "active" | "coming-soon" | "draft"
 *
 * Sourcing note: specs/prices for the six machines added below (bio-mass-shredder
 * through coconut-waste-shredder-pulverizor, plus the enrichments to the
 * original four) come from a live fetch of
 * https://www.indiamart.com/jaiindiraagroengineerings/ on 2026-08-26, cross-checked
 * against JIAE_Website_Content_Pack where available. IndiaMART prices are seller-listed
 * "Unit" prices, not a binding quote — label them as indicative on the page.
 */

export const machines = [
  {
    slug: "jiae-shakthi-6x42",
    name: "JIAE SHAKTHI 6X42",
    model: "SHAKTHI 6X42",
    category: "Residue Management",
    categorySlug: "residue-management",
    status: "active",
    featured: true,
    shortDescription:
      "Tractor-operated farm waste shredder engineered for banana waste, coconut fronds and general agricultural residue.",
    description:
      "The JIAE SHAKTHI 6X42 is a heavy-duty, PTO-driven shredder designed for real farm residue loads. Built for tractor ranges commonly available in Indian agriculture, it processes wet and dry biomass into manageable output sizes suitable for mulching, composting or further handling. It mounts on a tractor's 3-point linkage and draws power from the PTO.",
    applications: [
      "Banana wet waste",
      "Coconut fronds",
      "Crop residue",
      "Farm waste processing",
      "Organic material preparation",
    ],
    benefits: [
      "Tractor-mounted convenience",
      "PTO-driven reliability",
      "Suitable for wet banana waste",
      "Compact footprint for farm yards",
    ],
    keySpecs: [
      { label: "Tractor", value: "42–75 HP" },
      { label: "Capacity", value: "2,500–2,900 kg/hr" },
      { label: "Weight", value: "425 kg" },
    ],
    indicativePrice: "₹1,41,120 / unit",
    general: [
      { label: "Model", value: "JIAE SHAKTHI 6X42" },
      { label: "Machine Type", value: "Tractor Operated Shredder cum Pulverizer" },
      { label: "Mounting", value: "Tractor 3-point linkage + PTO" },
      { label: "Tractor Requirement", value: "42–75 HP" },
      { label: "PTO", value: "Universal 6-Spline" },
      { label: "Weight", value: "425 kg" },
      { label: "Dimensions (L × W × H)", value: "1725 × 915 × 1475 mm" },
      { label: "Diesel Consumption", value: "3.25–4.1 L/hr" },
      { label: "Payment Terms", value: "100% advance (Demand Draft), per JIAE's specification chart" },
    ],
    performance: [
      { application: "Banana Wet Waste", capacity: "2,500–2,900 kg/hr" },
      { application: "Coconut Fronds", capacity: "1,150–1,450 kg/hr" },
    ],
    material: [
      { label: "Output Size", value: "10–50 mm" },
      { label: "Maximum Input", value: "203 × 203 × 203 mm" },
      { label: "Structure/Body/Cover", value: "MS, L-angle" },
      { label: "Primary Chamber", value: "6 running blades + 1 fixed blade, EN8 mild hardened" },
      { label: "Secondary Chamber", value: "42 knives, EN8" },
    ],
    image: "/images/machines/jiae-shakthi-6x42/main.webp",
    gallery: [
      "/images/machines/jiae-shakthi-6x42/main.webp",
      "/images/company/site/yard-01.webp",
    ],
    video: {
      youtubeId: "",
      title: "JIAE SHAKTHI 6X42 in Action",
    },
    warranty: "One year replacement warranty for manufacturing defects, ex-factory.",
    faqs: [
      {
        q: "What tractor horsepower is required?",
        a: "The SHAKTHI 6X42 is designed for tractors in the 42–75 HP range with a universal 6-spline PTO.",
      },
      {
        q: "Can it handle wet banana waste?",
        a: "Yes. The machine is specified for banana wet waste at approximately 2,500–2,900 kg/hr under typical operating conditions.",
      },
      {
        q: "How do I get a quotation?",
        a: "Use the Request a Quote form or contact us via WhatsApp / phone with your tractor model and primary application.",
      },
    ],
    related: ["tractor-operated-farm-waste-shredder", "100-hp-shredder-pulverizer"],
  },
  {
    slug: "100-hp-shredder-pulverizer",
    name: "100 HP Shredder Pulverizer",
    model: "100 HP Shredder Pulverizer",
    category: "Shredding & Pulverizing",
    categorySlug: "shredding-pulverizing",
    status: "active",
    featured: true,
    shortDescription:
      "Electric heavy-duty residue processing for demanding yard and processing-line applications.",
    description:
      "A robust electric shredder-pulverizer configured for higher power requirements. Suitable for intensive residue management where higher throughput and tougher material handling are required.",
    applications: [
      "Heavy crop residue",
      "Farm waste pulverizing",
      "Organic material processing",
    ],
    benefits: [
      "Higher power envelope",
      "Suitable for continuous duty",
      "Stationary electric operation",
    ],
    keySpecs: [
      { label: "Power", value: "60–150 HP" },
      { label: "Capacity", value: "700 kg/hr" },
      { label: "Power Source", value: "Electric" },
    ],
    indicativePrice: "₹12,50,000 / unit",
    general: [
      { label: "Model", value: "100 HP Shredder Pulverizer" },
      { label: "Machine Type", value: "Shredder / Pulverizer" },
      { label: "Power Range", value: "60–150 HP" },
      { label: "Power Source", value: "Electric" },
    ],
    performance: [
      { application: "General residue", capacity: "700 kg/hr" },
    ],
    material: [],
    image: "/images/machines/100-hp-shredder-pulverizer/main.webp",
    gallery: ["/images/machines/100-hp-shredder-pulverizer/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [
      {
        q: "What power options are available?",
        a: "The unit is offered in a broad power band. Share your available electrical supply so we can recommend the correct configuration.",
      },
    ],
    related: ["jiae-shakthi-6x42", "tractor-operated-farm-waste-shredder"],
  },
  {
    slug: "tractor-operated-farm-waste-shredder",
    name: "Tractor Operated Farm Waste Shredder",
    model: "Farm Waste Shredder",
    category: "Residue Management",
    categorySlug: "residue-management",
    status: "active",
    featured: true,
    shortDescription:
      "PTO-operated shredding solution for agricultural waste and residue.",
    description:
      "A versatile tractor-operated farm waste shredder for day-to-day residue management. Ideal for mixed crop waste, pruning and general farm clean-up. Diesel/PTO-driven off the tractor.",
    applications: [
      "Farm residue management",
      "Crop waste shredding",
      "Pruning and garden waste",
    ],
    benefits: [
      "PTO-driven simplicity",
      "Wide material acceptance",
      "Practical for mixed farms",
    ],
    keySpecs: [
      { label: "Tractor", value: "24–75 HP PTO" },
      { label: "Capacity", value: "1,250 kg/hr" },
      { label: "Drive", value: "Tractor PTO, diesel" },
    ],
    indicativePrice: "₹2,25,000 / unit",
    general: [
      { label: "Model", value: "Tractor Operated Farm Waste Shredder" },
      { label: "Machine Type", value: "Tractor Operated Shredder" },
      { label: "Tractor Requirement", value: "24–75 HP PTO" },
      { label: "Drive", value: "PTO, diesel" },
    ],
    performance: [{ application: "General farm waste", capacity: "1,250 kg/hr" }],
    material: [],
    image: "/images/machines/tractor-operated-farm-waste-shredder/main.webp",
    gallery: [
      "/images/machines/tractor-operated-farm-waste-shredder/main.webp",
      "/images/machines/tractor-operated-farm-waste-shredder/alt.webp",
    ],
    video: {
      youtubeId: "1cJQeU17psE",
      title: "Tractor Operated Farm Waste Shredder — Banana Waste in Action",
    },
  },
  {
    slug: "standard-chaff-cutter",
    name: "Standard Chaff Cutter",
    model: "Standard Chaff Cutter",
    category: "Fodder Processing",
    categorySlug: "fodder-processing",
    status: "active",
    featured: false,
    shortDescription:
      "Compact electric fodder-processing equipment for everyday farm operations.",
    description:
      "A practical chaff cutter for preparing fodder on the farm. Suitable for dairy and mixed farming operations that need consistent cut lengths for livestock feed.",
    applications: ["Fodder preparation", "Dairy farm feed processing"],
    benefits: ["Compact footprint", "Straightforward operation", "Suitable for daily use"],
    keySpecs: [
      { label: "Capacity", value: "500 kg/hr" },
      { label: "Blade", value: "High carbon steel" },
      { label: "Power", value: "Electric" },
    ],
    general: [
      { label: "Model", value: "Standard Chaff Cutter" },
      { label: "Machine Type", value: "Chaff Cutter" },
      { label: "Blade Material", value: "High carbon steel" },
      { label: "Power Source", value: "Electric" },
    ],
    performance: [{ application: "Fodder cutting", capacity: "500 kg/hr" }],
    material: [],
    image: "/images/machines/standard-chaff-cutter/main.webp",
    gallery: ["/images/machines/standard-chaff-cutter/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["tractor-operated-farm-waste-shredder"],
  },
  {
    slug: "trolley-model-shredder-pulverizor",
    name: "Trolley Model Shredder Pulverizor",
    model: "Trolley Model Shredder Pulverizor",
    category: "Shredding & Pulverizing",
    categorySlug: "shredding-pulverizing",
    status: "active",
    featured: false,
    shortDescription:
      "Wheeled, tractor-towed shredder-pulverizer for farms that need to move the machine between fields.",
    description:
      "A trolley-mounted version of JIAE's shredder-pulverizer, built on its own axle and wheels so it can be towed behind a tractor from field to field. PTO operated.",
    applications: ["Farm residue management", "Mobile field-to-field shredding"],
    benefits: ["Towable between fields", "PTO operated", "No fixed installation required"],
    keySpecs: [
      { label: "Capacity", value: "1,500 kg" },
      { label: "Drive", value: "PTO operated" },
      { label: "Engine Type", value: "Tractor" },
    ],
    indicativePrice: "₹2,25,000 / unit",
    general: [
      { label: "Model", value: "Trolley Model Shredder Pulverizor" },
      { label: "Machine Type", value: "Trolley-mounted Shredder / Pulverizer" },
      { label: "Power Source", value: "PTO Operated" },
      { label: "Engine Type", value: "Tractor" },
    ],
    performance: [{ application: "Agriculture & farming residue", capacity: "1,500 kg" }],
    material: [],
    image: "/images/machines/trolley-model-shredder-pulverizor/main.webp",
    gallery: ["/images/machines/trolley-model-shredder-pulverizor/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["100-hp-shredder-pulverizer", "jiae-shakthi-6x42"],
  },
  {
    slug: "mini-tractor-operated-shredder-18hp",
    name: "Mini Tractor Operated Shredder 18 HP Mitsubishi",
    model: "Mini Tractor Operated Shredder 18HP",
    category: "Residue Management",
    categorySlug: "residue-management",
    status: "active",
    featured: false,
    shortDescription:
      "Compact shredder sized for 18 HP mini tractors — suited to smaller holdings and nurseries.",
    description:
      "A smaller-footprint version of JIAE's tractor-operated shredder, matched to 18 HP mini tractors (Mitsubishi-class). Aimed at smallholders and nursery operations that don't need a full-size 42+ HP unit.",
    applications: ["Small farm residue", "Nursery waste", "Smallholder operations"],
    benefits: ["Matched to 18 HP mini tractors", "Lower entry cost", "Compact for small yards"],
    keySpecs: [
      { label: "Tractor", value: "18 HP (mini tractor)" },
      { label: "Capacity", value: "1,250 kg" },
      { label: "Drive", value: "Tractor PTO" },
    ],
    indicativePrice: "₹84,000 / unit",
    general: [
      { label: "Model", value: "Mini Tractor Operated Shredder 18HP Mitsubishi" },
      { label: "Machine Type", value: "Tractor Operated Shredder" },
      { label: "Tractor Requirement", value: "18 HP mini tractor" },
      { label: "Drive", value: "Tractor PTO" },
    ],
    performance: [{ application: "Small farm residue", capacity: "1,250 kg" }],
    material: [],
    image: "/images/machines/mini-tractor-operated-shredder-18hp/main.webp",
    gallery: ["/images/machines/mini-tractor-operated-shredder-18hp/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["tractor-operated-farm-waste-shredder", "jiae-shakthi-6x42"],
  },
  {
    slug: "coconut-waste-shredder-pulverizor",
    name: "Coconut Waste Shredder and Pulverizor",
    model: "6X35XH",
    category: "Residue Management",
    categorySlug: "residue-management",
    status: "active",
    featured: false,
    shortDescription:
      "High-throughput shredder purpose-built for coconut waste, branches and general organic/agricultural waste.",
    description:
      "The 6X35XH is JIAE's higher-capacity coconut waste shredder and pulverizer, built for coconut waste, branches and general organic or agricultural waste at high throughput.",
    applications: ["Coconut waste", "Branches", "Organic waste", "General agricultural waste"],
    benefits: ["High throughput", "Purpose-built for coconut waste", "Handles branches and mixed organic waste"],
    keySpecs: [
      { label: "Model", value: "6X35XH" },
      { label: "Capacity", value: ">2,000 kg/hr" },
      { label: "Application", value: "Branches, coconut & organic waste" },
    ],
    indicativePrice: "₹1,50,000 / unit",
    general: [
      { label: "Model", value: "6X35XH" },
      { label: "Machine Type", value: "Shredder / Pulverizer" },
      { label: "Shredding Material", value: "Coconut waste, organic waste, agricultural waste" },
    ],
    performance: [{ application: "Coconut waste & branches", capacity: ">2,000 kg/hr" }],
    material: [],
    image: "/images/machines/coconut-waste-shredder-pulverizor/main.webp",
    gallery: ["/images/machines/coconut-waste-shredder-pulverizor/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["jiae-shakthi-6x42", "bio-mass-shredder"],
  },
  {
    slug: "bio-mass-shredder",
    name: "Bio Mass Shredder",
    model: "Bio Mass Shredder",
    category: "Waste & Biomass Shredding",
    categorySlug: "waste-biomass-shredding",
    status: "active",
    featured: false,
    shortDescription:
      "Rotary disk shredder for coconut waste, general organic waste and other soft biomass.",
    description:
      "A rotary-disk biomass shredder for coconut waste, organic waste, chicken waste and other soft agricultural or organic materials.",
    applications: ["Coconut waste", "Organic waste", "Chicken waste", "Soft biomass"],
    benefits: ["Rotary disk design", "Handles a wide range of soft waste", "Flexible capacity range"],
    keySpecs: [
      { label: "Capacity", value: "1–500 kg/hr" },
      { label: "Type", value: "Rotary disk shredder" },
      { label: "Material", value: "Coconut, organic & chicken waste" },
    ],
    indicativePrice: "₹3,50,000 / unit",
    general: [
      { label: "Machine Type", value: "Rotary Disk Shredder" },
      { label: "Shredding Material", value: "Coconut waste, organic waste, chicken waste and other soft wastes" },
    ],
    performance: [{ application: "Soft biomass / organic waste", capacity: "1–500 kg/hr" }],
    material: [],
    image: "/images/machines/bio-mass-shredder/main.webp",
    gallery: ["/images/machines/bio-mass-shredder/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["municipal-solid-waste-shredder", "chicken-waste-shredder"],
  },
  {
    slug: "municipal-solid-waste-shredder",
    name: "Municipal Solid Waste Shredder",
    model: "10Hp Shredder",
    category: "Waste & Biomass Shredding",
    categorySlug: "waste-biomass-shredding",
    status: "active",
    featured: false,
    shortDescription:
      "Electric rotary-blade shredder sized for organic municipal solid waste.",
    description:
      "A 10 HP electric rotary-blade shredder for organic municipal solid waste (MSW), suited to institutional and municipal-scale waste reduction.",
    applications: ["Organic municipal solid waste", "Institutional waste management"],
    benefits: ["Electric, stationary operation", "Rotary blade design", "Sized for institutional use"],
    keySpecs: [
      { label: "Capacity", value: "1,000–1,500 kg/hr" },
      { label: "Motor", value: "10 HP" },
      { label: "Type", value: "Rotary blade" },
    ],
    indicativePrice: "₹1,65,000 / unit",
    general: [
      { label: "Model Name/Number", value: "10Hp Shredder" },
      { label: "Machine Type", value: "Rotary Blade Shredder" },
      { label: "Shredding Material", value: "Organic MSW" },
    ],
    performance: [{ application: "Organic municipal solid waste", capacity: "1,000–1,500 kg/hr" }],
    material: [],
    image: "/images/machines/municipal-solid-waste-shredder/main.webp",
    gallery: ["/images/machines/municipal-solid-waste-shredder/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["bio-mass-shredder", "chicken-waste-shredder"],
  },
  {
    slug: "chicken-waste-shredder",
    name: "Chicken Waste Shredder",
    model: "JIAE-DI 6x36X Turbo Drive",
    category: "Waste & Biomass Shredding",
    categorySlug: "waste-biomass-shredding",
    status: "active",
    featured: false,
    shortDescription:
      "Turbo-drive rotary blade chipper for chicken waste, coconut waste and municipal solid waste.",
    description:
      "The JIAE-DI 6x36X Turbo Drive is a rotary blade chipper built to handle chicken waste alongside coconut waste and municipal solid waste — useful for poultry farms and mixed waste operations.",
    applications: ["Chicken/poultry waste", "Coconut waste", "Municipal solid waste"],
    benefits: ["Turbo drive design", "Handles poultry waste", "Multi-material capability"],
    keySpecs: [
      { label: "Capacity", value: "1,000–1,500 kg/hr" },
      { label: "Model", value: "JIAE-DI 6x36X Turbo Drive" },
      { label: "Type", value: "Rotary blade chipper" },
    ],
    indicativePrice: "₹2,25,000 / unit",
    general: [
      { label: "Model Name/Number", value: "JIAE-DI 6x36X Turbo Drive" },
      { label: "Machine Type", value: "Rotary Blade Chipper" },
      { label: "Shredding Material", value: "Coconut waste, municipal solid waste, chicken waste" },
    ],
    performance: [{ application: "Chicken / poultry waste", capacity: "1,000–1,500 kg/hr" }],
    material: [],
    image: "/images/machines/chicken-waste-shredder/main.webp",
    gallery: ["/images/machines/chicken-waste-shredder/main.webp"],
    video: { youtubeId: "", title: "" },
    warranty: "Contact us for current warranty terms.",
    faqs: [],
    related: ["bio-mass-shredder", "municipal-solid-waste-shredder"],
  },
];

export function getMachine(slug) {
  return machines.find((m) => m.slug === slug);
}

export function getFeaturedMachines() {
  return machines.filter((m) => m.featured && m.status === "active");
}

export function getActiveMachines() {
  return machines.filter((m) => m.status === "active");
}

export function getMachinesByCategory(categorySlug) {
  return machines.filter((m) => m.categorySlug === categorySlug && m.status === "active");
}

export function getCategories() {
  const seen = new Map();
  for (const m of getActiveMachines()) {
    if (!seen.has(m.categorySlug)) seen.set(m.categorySlug, m.category);
  }
  return Array.from(seen, ([slug, name]) => ({ slug, name }));
}
