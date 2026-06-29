const cols = [
  {
    title: "Leistungen",
    items: ["Baudienstleistungen", "Montagen", "Reinigungen", "Wartungen & Service"],
  },
  {
    title: "Spezialgebiete",
    items: ["Offshore Windkraft", "Industrieanlagen", "Korrosionsschutz", "Stahlbau", "Kraftwerke"],
  },
  {
    title: "Unternehmen",
    items: ["Über uns", "Jobs", "Kontakt", "Datenschutz", "Impressum"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <span className="inline-block rounded-md bg-white px-3 py-2">
              <img
                src="/logo%20mds.png"
                alt="MittelDeutsche Seiltechnik GmbH"
                className="h-9 w-auto"
              />
            </span>
          </div>
          <p className="mt-4 text-sm">
            MittelDeutsche Seiltechnik GmbH
            <br />
            Kirschweg 20, 39292 Möser
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="transition-colors hover:text-brand">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} MittelDeutsche Seiltechnik GmbH — Demo. Für Aufgaben, die anderen zu hoch sind.
      </div>
    </footer>
  );
}
