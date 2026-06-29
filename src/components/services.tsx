import { HardHat, Wrench, Droplets, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Baudienstleistungen",
    items: ["Fugen- & Betonsanierung", "Korrosionsschutz", "Fassadenbau", "Montagen & Demontagen", "Stahlbausanierung"],
  },
  {
    icon: Wrench,
    title: "Montagen",
    items: ["Seil- & Stahltragwerke", "Glas- & Stahlkonstruktionen", "Werbemittel", "Fallschutznetze", "Blitzschutz & Mobilfunk"],
  },
  {
    icon: Droplets,
    title: "Reinigungen",
    items: ["Glasfassadenreinigung", "Membranreinigung", "Tragwerksreinigung", "Kraftwerk & Industrie", "Silo- & Tankreinigung"],
  },
  {
    icon: Settings,
    title: "Wartungen & Service",
    items: ["Windkraftanlagen", "Silo- & Tankwartungen", "Industrieanlagen", "Brückenbefahrung", "Materialbeschaffung"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Leistungen
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Alle Höhenarbeiten aus einer Hand
          </h2>
          <p className="mt-4 text-muted">
            Ein erfahrenes Team aus hochqualifizierten Handwerkern nahezu aller
            Fachrichtungen — das spart Ihnen Zeit, Geld und Koordination.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-neutral-200/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-neutral-300 transition-colors group-hover:text-brand" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
