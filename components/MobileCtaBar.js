"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function MobileCtaBar() {
  const phone = site.contact.phoneRaw;
  const wa = site.contact.whatsapp;

  return (
    <div className="mobile-cta-bar md:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:+${phone}`}
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={`https://wa.me/${wa}?text=${encodeURIComponent("Hello, I am interested in your agricultural machinery.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-full bg-leaf py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
