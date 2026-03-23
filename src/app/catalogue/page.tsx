import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue — Lek Records",
};

const releases = [
  {
    code: null,
    meta: "Digital · Single",
    artist: "Eir, Kim Dürbeck",
    title: "Du dro med henne (Kim Dürbeck Rework)",
    desc: "A heartfelt rework drifting between club energy and delicate emotion.",
    tracks: ["Du dro med henne (Kim Dürbeck Rework)"],
    cover: "cover-one",
    vinyl: false,
    price: null,
  },
  {
    code: null,
    meta: "Electronic · Digital",
    artist: "Tapo Metreveli",
    title: "Skhvanaheim",
    desc: "Seven tracks navigating Georgian soul and European club culture.",
    tracks: ["2000", "Zeit", "Skhva", "Farda", "Tape flip", "This one", "Farda (DJ Astrobee Remix)"],
    cover: "cover-two",
    vinyl: false,
    price: "€7",
  },
  {
    code: null,
    meta: "Electronic · Digital",
    artist: "Lárus",
    title: "Aeon",
    desc: "A sonic journey through tension, collapse, and a search for hope. Debut album.",
    tracks: [],
    cover: "cover-three",
    vinyl: false,
    price: "Free",
  },
  {
    code: null,
    meta: "Electronic · 12\"",
    artist: "Patås",
    title: "Ole",
    desc: "In memory of a long-lost friend — two contrasting sonic sides on limited 140g vinyl.",
    tracks: ["Ole", "ILU 2 MUCH", "Bontelabo", "Og Så ?"],
    cover: "cover-four",
    vinyl: true,
    price: "€15",
  },
  {
    code: null,
    meta: "V/A · Digital",
    artist: "Various Artists",
    title: "Smooth V/A",
    desc: "Norwegian and Georgian producers united — deep dubby downtempo to party house and electro.",
    tracks: [
      "Erik Mowinckel — Smog",
      "Rosmos — Rosmos",
      "Tapo Metreveli — Dabrida Ponti",
      "Toke — Skepta",
      "Trym Søvdsnes — Goodboy Acid",
      "Anders Hajem — Control",
      "Skyra — Full Moon Technology",
      "Nolen — Suntitled",
      "Lárus — Mindset",
      "Bass Commander — Cyborgs in Leather",
      "Nikusha Kakoishvili — Back to Life",
      "Rydeen — Clumsy",
      "Kromoplastik — Jrknz",
      "Patås — Melba",
      "DJ Astrobee — Coconut",
    ],
    cover: "cover-five",
    vinyl: false,
    price: "€8",
  },
  {
    code: "LEK 003",
    meta: "Electronic · 12\"",
    artist: "Kim Dürbeck",
    title: "LEK 003",
    desc: "Seven-track statement — broken beats, Vietnamese flavour, and Patås edits.",
    tracks: [
      "Wipeout",
      "Phu Yen Flow",
      "Nuoc mam is my holy water (Patås edit)",
      "Tapeworms",
      "Put your fingers all together",
      "Ham choi va lon",
      "Nuoc mam is my holy water (Patås remix)",
    ],
    cover: "cover-six",
    vinyl: true,
    price: "€15",
  },
  {
    code: null,
    meta: "Remixes · Digital",
    artist: "Kim Dürbeck",
    title: "Kim Durbeck Remixes pt. 2",
    desc: "DJ Yogurt & Moja rework Braindancer into a single-track club weapon.",
    tracks: ["Braindancer (Dj Yogurt & Moja remix)"],
    cover: "cover-one",
    vinyl: false,
    price: "€2",
  },
  {
    code: null,
    meta: "Remixes · Digital",
    artist: "Kim Dürbeck",
    title: "Kim Dürbeck Remixes",
    desc: "Four producers reinterpret Dürbeck — from drum & bass to electro and broken beat.",
    tracks: [
      "Onomatepoetikon breaks (Robomatic remix)",
      "A piece of air (Bendik HK remix)",
      "A piece of air (Smashana remix)",
      "Djupsound (Karolinski biết chết liền Remix)",
    ],
    cover: "cover-two",
    vinyl: false,
    price: "€5",
  },
  {
    code: null,
    meta: "Electronic · 12\"",
    artist: "Patås",
    title: "Lek",
    desc: "The label's debut vinyl — four tracks across Patås, Tasco, and Kim Dürbeck remixed.",
    tracks: [
      "Patås — Måsans dødsleie",
      "Tasco — Atlantic Potion",
      "Patås — Hommage à Uematsu",
      "Kim Dürbeck — TMA 4ever (Patås remix)",
    ],
    cover: "cover-three",
    vinyl: true,
    price: "€12",
  },
  {
    code: "LEK V/A 1",
    meta: "V/A · Digital",
    artist: "Various Artists",
    title: "LEK V/A 1",
    desc: "Eight artists, one vision — the first LEK compilation. Club music devoid of genre-catering.",
    tracks: [
      "Lárus — vibe",
      "Patås — cløb",
      "God69 — sklonst",
      "Kim Dürbeck — Unneberg Resistance",
      "Krass — B-SHELF",
      "Max Wright — Alf",
      "Einerlei — Morph Dance",
      "Repulsive Norse — White Venus (on a Deep Purple Sky in June Mix)",
    ],
    cover: "cover-four",
    vinyl: false,
    price: "€6",
  },
];

export default function Catalogue() {
  return (
    <div className="catalogue-page" style={{ flex: 1 }}>
      <main className="page">
        <section className="catalogue">
          <header className="catalogue-header">
            <p className="eyebrow">Catalogue</p>
            <h1>All releases</h1>
          </header>

          <div className="release-grid release-grid--list">
            {releases.map((r) => (
              <article key={r.title} className="release-card release-card--list">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="release-cover"
                  src="/vinyl-release.png"
                  alt={`${r.title} cover`}
                />
                <div className="release-body">
                  <div className="release-top">
                    <span className="release-code">{r.code ?? r.meta}</span>
                    <span className="release-top-meta">{r.code ? r.meta : ""}</span>
                  </div>
                  <h2>
                    <span className="release-artist">{r.artist}:</span> {r.title}
                  </h2>
                  <p className="release-desc">{r.desc}</p>
                  {r.tracks.length > 0 && (
                    r.tracks.length > 5 ? (
                      <div className="track-list-two-col" aria-label="Tracks">
                        <ul className="track-list">
                          {r.tracks.slice(0, Math.ceil(r.tracks.length / 2)).map((t) => (
                            <li key={t}>
                              <button className="track-chip" type="button">▶ {t}</button>
                            </li>
                          ))}
                        </ul>
                        <ul className="track-list">
                          {r.tracks.slice(Math.ceil(r.tracks.length / 2)).map((t) => (
                            <li key={t}>
                              <button className="track-chip" type="button">▶ {t}</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul className="track-list" aria-label="Tracks">
                        {r.tracks.map((t) => (
                          <li key={t}>
                            <button className="track-chip" type="button">▶ {t}</button>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
