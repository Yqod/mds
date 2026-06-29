import { CheckCircle2 } from "lucide-react";

const points = [
  "Maßgeschneiderte Lösungen",
  "Preiswert, schnell & sicher",
  "Minimale Ausfallzeiten",
  "International tätig",
];

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "100%", label: "FISAT-zertifiziert" },
  { value: "24/7", label: "Einsatzbereit" },
  { value: "∞", label: "Höhe ist relativ" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&q=80"
            alt="MDS Industriekletterer an Offshore-Windkraftanlagen"
            className="h-[460px] w-full rounded-2xl object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand px-8 py-6 text-white shadow-xl sm:block">
            <p className="text-3xl font-bold">Möser</p>
            <p className="text-sm text-white/80">bei Magdeburg</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Über uns
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            International innovativ, leistungsstark, zielorientiert
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Seit mehr als zehn Jahren sammeln wir Erfahrung in zahlreichen
            Projekten. Durch unsere FISAT-Zertifizierung arbeiten wir nach den
            international geltenden Richtlinien für Industriekletterer. Wir bieten
            die preiswerte, schnelle und sichere Alternative, wenn Gerüste, Kräne
            oder Hebebühnen nicht mehr weiterhelfen.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 flex-none text-brand" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-4 py-6 text-center">
                <p className="text-3xl font-bold text-brand">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
