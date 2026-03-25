export default function Artists() {
  const artists = [
    {
      name: "Gabriel Patås",
      role: "Producer / DJ / Live",
      location: "Oslo, NO",
      photo: "photo-three",
      bio: "Gabriel Patås er en norsk produsent, DJ og live-musiker som rir knivseggen mellom ekstatisk eufori og stoisk melankoli. Han holder residency på Kafe Hærverk i Oslo og grunnla Lek.Rec i 2022. Han har tidligere gitt ut musikk på label som Aedi Records, Efja og Mind Controlled Rectifier. Som produsent sier han selv at han tar inspirasjon fra den rike klubbmusikkhistorien, med en ekstra forkjærlighet for å blande dub med dagens eksperimentelle lyder.",
      bandcamp: "#",
      instagram: "#",
    },
    {
      name: "Kim Dürbeck",
      role: "Producer / DJ / Composer",
      location: "Sandefjord, NO",
      photo: "photo-two",
      bio: "Kim Durbeck, also known as Kim Thanh Ngo, is a Norwegian-Vietnamese DJ and electronic music producer based in Sandefjord. With 20 years of experience as a DJ and producer, he can proudly point to having composed music for institutions such as the National Theatre, as well as for film and advertising, and producing music for the group Liar. He has remixed artists such as Ary and Nothing Personal. Kim Dürbeck is also one of the founders of Lek REC, a label that releases underground music beyond Norway\u0027s borders.",
      bandcamp: "#",
      instagram: "#",
    },
    {
      name: "Lárus Sigurvin",
      role: "Producer / DJ / Live",
      location: "Oslo, NO",
      photo: "photo-one",
      bio: "Lárus er en elektronisk musikkprodusent, komponist, DJ og live-utøver, samt grunnlegger av plateselskapet Lek.Rec.",
      bandcamp: "#",
      instagram: "#",
    },
  ];

  return (
    <main className="page">
      <section className="swiss-artists">
        <div className="swiss-artists-header">
          <span className="swiss-index">Index</span>
          <h1 className="swiss-title">Artists</h1>
          <p className="swiss-count">{String(artists.length).padStart(2, "0")} artists</p>
        </div>

        <div className="swiss-artist-list">
          {artists.map((artist, i) => (
            <article key={artist.name} className="swiss-artist-row">
              <div
                className={`swiss-artist-photo ${artist.photo}`}
                role="img"
                aria-label={`Portrait of ${artist.name}`}
              />
              <div className="swiss-artist-content">
                <div className="swiss-artist-meta">
                  <h2 className="swiss-artist-name">{artist.name}</h2>
                  <div className="swiss-artist-details">
                    <span>{artist.role}</span>
                    <span className="swiss-divider">/</span>
                    <span>{artist.location}</span>
                  </div>
                </div>
                <p className="swiss-artist-bio">{artist.bio}</p>
                <div className="swiss-artist-links">
                  <a href={artist.bandcamp} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} on Bandcamp`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/>
                    </svg>
                  </a>
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} on Instagram`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
