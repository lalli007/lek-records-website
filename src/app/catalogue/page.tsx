import type { Metadata } from "next";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Catalogue — Lek Records",
};

export default function Catalogue() {
  return (
    <div className="catalogue-page" style={{ flex: 1 }}>
      <main className="page">
        <section className="swiss-catalogue">
          <div className="swiss-catalogue-header">
            <span className="swiss-index">Archive</span>
            <h1 className="swiss-title">Catalogue</h1>
            <p className="swiss-count">
              {String(releases.length).padStart(2, "0")} releases
            </p>
          </div>

          <div className="swiss-catalogue-columns">
            <div className="swiss-col-label">Artist / Title</div>
            <div className="swiss-col-label">Format</div>
          </div>

          <div className="swiss-release-list">
            {releases.map((r, i) => (
              <article key={r.title} className="swiss-release-row">
                <div className="swiss-release-main">
                  <div className="swiss-release-info">
                    <h2 className="swiss-release-title">
                      <span className="swiss-release-artist">{r.artist}</span>
                      {r.title}
                    </h2>
                    <p className="swiss-release-desc">{r.desc}</p>
                  </div>

                  {r.tracks.length > 0 && (
                    <div className="swiss-tracklist">
                      {r.tracks.map((t, ti) => (
                        <button key={t} className="swiss-track" type="button">
                          <span className="swiss-track-num">
                            {String(ti + 1).padStart(2, "0")}
                          </span>
                          <span className="swiss-track-title">{t}</span>
                          <span className="swiss-track-play">&#9654;</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="swiss-release-format">
                  <span>{r.meta}</span>
                  {r.vinyl && <span className="swiss-vinyl-badge">Vinyl</span>}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="swiss-bandcamp-link" aria-label={`${r.title} on Bandcamp`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/>
                    </svg>
                    Bandcamp
                  </a>
                </div>

              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
