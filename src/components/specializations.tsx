const fields = [
  {
    title: "Offshore Windkraftanlagen",
    copy: "Weg von der Atomkraft, hin zu neuen Energien — der Ausbau der Offshore-Windenergie geht weltweit voran.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80",
  },
  {
    title: "Industrieanlagen",
    copy: "Ein störungsfreier Ablauf ist das A und O. Wir sichern Betrieb und Lebensdauer Ihrer Anlagen.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
  },
  {
    title: "Korrosionsschutz",
    copy: "Guter Schutz vor Korrosion hat entscheidenden Einfluss auf Betrieb und Lebensdauer Ihrer Anlagen.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80",
  },
  {
    title: "Stahlbau",
    copy: "Ob Brücken, Wolkenkratzer oder Arenen — ohne Stahl wären viele moderne Bauwerke undenkbar.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  },
  {
    title: "Kraftwerke",
    copy: "Kraftwerke sind nach wie vor zentraler Bestandteil der Stromversorgung — wir halten sie instand.",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=900&q=80",
  },
  {
    title: "Wartung & Support",
    copy: "Regelmäßige Wartung, Inspektion und schneller Service — wir halten Ihre Anlagen langfristig betriebssicher.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
  },
];

export default function Specializations() {
  return (
    <section id="spezialgebiete" className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Spezialgebiete
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Wo unsere Stärken liegen
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl bg-ink"
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-72 w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="mb-3 h-0.5 w-10 bg-brand" />
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
