"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Spezialgebiete", href: "#spezialgebiete" },
  { label: "Im Einsatz", href: "#ablauf" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-ink/95 text-white/80 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="tracking-wide">
            FISAT &amp; SCC zertifiziert · National &amp; international im Einsatz
          </span>
          <div className="flex items-center gap-5">
            <a
              href="tel:+4939222684547"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5" />
              +49 (0) 39222 68 45 47
            </a>
            <span className="text-white/30">|</span>
            <span>
              <strong className="text-white">DE</strong> · EN
            </span>
          </div>
        </div>
      </div>

      <nav className="border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center">
            <img
              src="/logo%20mds.png"
              alt="MittelDeutsche Seiltechnik GmbH"
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#kontakt"
            className="hidden rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-block"
          >
            Anfrage stellen
          </a>

          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-neutral-200 bg-white px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink/70"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Anfrage stellen
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
