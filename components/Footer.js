import Link from "next/link";
import Image from "next/image";
import { Mail, Youtube, Github } from "lucide-react";
import { site } from "../data/site";

const developer = {
  name: "Mahasvin S S",
  email: "mahasvinmanimanjula@gmail.com",
  youtube: "https://youtube.com/@snowwhitedreams",
  github: "https://github.com/NivairaaWhite",
};

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-white md:pb-14">
      <div className="container-shell">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/brand/jia-logo.webp"
              alt={`${site.name} logo`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full"
            />
            <p className="mt-4 text-sm font-bold tracking-[0.12em]">JAI INDIRA AGRO ENGINEERING</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              {site.tagline} Heavy-duty agricultural machinery from {site.location.city},{" "}
              {site.location.state}.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">Explore</p>
            <div className="mt-4 space-y-2.5 text-sm">
              {site.footerNav.map((item) => (
                <Link key={item.href} className="block text-white/70 transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">Contact</p>
            <div className="mt-4 space-y-2.5 text-sm text-white/70">
              <a href={`tel:+${site.contact.phoneRaw}`} className="block hover:text-white">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="block hover:text-white">
                {site.contact.email}
              </a>
              <p className="leading-relaxed">{site.location.address}</p>
              <p className="text-white/45">{site.contact.hours}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">Legal</p>
            <div className="mt-4 space-y-2.5 text-sm">
              <Link className="block text-white/70 transition hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="block text-white/70 transition hover:text-white" href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Pollachi · Coimbatore · Tamil Nadu</p>
        </div>

        <div className="mt-4 flex flex-col items-start gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
          <span>
            Site by <span className="font-semibold text-white/70">{developer.name}</span>
          </span>
          <span className="flex items-center gap-3">
            <a
              href={`mailto:${developer.email}`}
              className="focus-ring rounded p-1 text-white/50 transition hover:text-white"
              aria-label={`Email ${developer.name}`}
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href={developer.youtube}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded p-1 text-white/50 transition hover:text-white"
              aria-label={`${developer.name} on YouTube`}
            >
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded p-1 text-white/50 transition hover:text-white"
              aria-label={`${developer.name} on GitHub`}
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
