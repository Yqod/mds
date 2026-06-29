import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Baudienstleistungen",
    image: "https://www.mds-md.de/sites/default/files/styles/only_short/public/images/services/montage-capetown.jpg?itok=CPOkans5",
    items: ["Fugen- und Betonsanierung", "Korrosionsschutz", "Fassadenbau", "Montagen und Demontagen", "Stahlbausanierung"],
  },
  {
    title: "Montagen",
    image: "https://www.mds-md.de/sites/default/files/styles/only_short/public/mds-industriekletterer-montagen-02.jpg?itok=eBoievMY",
    items: ["Seil- und Stahltragwerke", "Glas- und Stahlkonstruktionen", "Werbemittel", "Fallschutznetze", "Blitzschutz- und Mobilfunkanlagen"],
  },
  {
    title: "Reinigungen",
    image: "https://www.mds-md.de/sites/default/files/styles/only_short/public/reinigung.jpg?itok=tjdmmCt0",
    items: ["Glasfassadenreinigung", "Membranreinigung", "Tragwerksreinigungen", "Kraftwerks- und Industriereinigung", "Silo- und Tankreinigung"],
  },
  {
    title: "Wartungen & Service",
    image: "https://www.mds-md.de/sites/default/files/styles/only_short/public/mds-industriekletterer-wartung-service-01.jpg?itok=SO__3Kt0",
    items: ["Wartung von Windkraftanlagen", "Silo- und Tankwartungen", "Wartung von Industrieanlagen", "Brückenbefahrung", "Materialbeschaffung"],
  },
];

export default function ImEinsatz() {
  return (
    <section id="ablauf" className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Im Einsatz
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Unsere Industriekletterer im Einsatz
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 h-0.5 w-10 bg-brand" />
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" />
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#leistungen"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  mehr Infos <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
