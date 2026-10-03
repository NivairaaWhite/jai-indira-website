"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        {/* Logo */}
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/brand/jia-logo.webp"
            alt={`${site.name} logo`}
            width={44}
            height={44}
            className="h-9 w-9 rounded-full sm:h-11 sm:w-11"
            priority
          />
          <span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-leaf">
              JAI INDIRA
            </span>
            <span className="block text-sm font-semibold leading-tight text-ink sm:text-base">
              Agro Engineering
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 transition hover:bg-black/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + mobile icons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:+${site.contact.phoneRaw}`}
            className="focus-ring hidden rounded-full p-2.5 text-ink/70 hover:bg-black/5 sm:inline-flex"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={`https://wa.me/${site.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden rounded-full p-2.5 text-ink/70 hover:bg-black/5 sm:inline-flex"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            href={site.primaryCta.href}
            className="focus-ring hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-leaf sm:inline-flex"
          >
            {site.primaryCta.label}
          </Link>
          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-black/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-cream lg:hidden">
          <nav className="container-shell flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.primaryCta.href}
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {site.primaryCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
