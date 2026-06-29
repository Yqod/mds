import { ShieldCheck, Globe2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/herokletter1.png"
          alt="Industriekletterer im Offshore-Einsatz"
          className="h-full w-full object-cover object-[40%_center] lg:object-[10%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/95 via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
        <div className="ml-auto max-w-3xl text-right">
          <span className="inline-flex items-center gap-2    px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            MittelDeutsche Seiltechnik GmbH
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Für Aufgaben, die anderen
            <span className="text-brand"> zu hoch</span> sind
          </h1>

          <p className="mt-6 ml-auto max-w-xl text-lg leading-relaxed text-white/75">
            Professionelle Industriekletterer für Montage, Sanierung, Reinigung
            und Wartung. Preiswert, schnell und sicher — dort, wo Gerüste, Kräne
            und Hebebühnen an ihre Grenzen stoßen.
          </p>

          <div className="mt-9 flex flex-wrap justify-end gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-end gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> FISAT &amp; SCC zertifiziert
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-brand" /> Weltweit im Einsatz
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="font-bold text-white">10+</span> Jahre Erfahrung
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
