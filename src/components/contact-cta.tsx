import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="kontakt" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Kontakt
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Treten Sie mit uns in Kontakt
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Sie suchen erfahrene Industriekletterer? Wir freuen uns, von Ihnen
              zu hören — und finden die maßgeschneiderte Lösung für Ihr Projekt.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+4939222684547" className="flex items-center gap-4 text-white">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand">
                  <Phone className="h-5 w-5" />
                </span>
                +49 (0) 39222 68 45 47
              </a>
              <a href="mailto:info@mds-md.de" className="flex items-center gap-4 text-white">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand">
                  <Mail className="h-5 w-5" />
                </span>
                info@mds-md.de
              </a>
              <p className="flex items-center gap-4 text-white">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                Kirschweg 20, 39292 Möser
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-md border border-white/15 bg-ink/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="rounded-md border border-white/15 bg-ink/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Betreff"
                className="rounded-md border border-white/15 bg-ink/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Ihre Nachricht"
                className="rounded-md border border-white/15 bg-ink/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
