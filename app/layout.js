import "./globals.css";
import localFont from "next/font/local";
import { site } from "../data/site";
import MobileCtaBar from "../components/MobileCtaBar";

// Self-hosted (no build-time fetch to Google Fonts — see app/fonts/README.txt).
const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Agricultural Machinery Manufacturer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/images/hero.webp", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icons/icon-512.png`,
    foundingDate: String(site.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.address,
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: site.location.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "sales",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
