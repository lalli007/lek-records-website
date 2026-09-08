"use client";

import { useMemo, useState } from "react";
import { releases } from "@/data/releases";

// Splits a combined artist credit ("Kim Dürbeck + Lárus + Patås", "Eir, Kim Dürbeck")
// into individual names so each collaborator shows up in the artist filter.
function splitArtists(artist: string): string[] {
  return artist
    .split(/[,+]/)
    .map((a) => a.trim())
    .filter(Boolean);
}

export default function ReleaseIndex() {
  const [artist, setArtist] = useState("all");

  const artists = useMemo(
    () => Array.from(new Set(releases.flatMap((r) => splitArtists(r.artist)))).sort(),
    []
  );

  const filtered = useMemo(
    () =>
      artist === "all"
        ? releases
        : releases.filter((r) => splitArtists(r.artist).includes(artist)),
    [artist]
  );

  return (
    <section className="release-index">
      <div className="release-index-bar">
        <label className="release-index-filter">
          <span>Filter</span>
          <select
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            aria-label="Filter by artist"
          >
            <option value="all">All artists</option>
            {artists.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>

        <form className="release-index-email" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="release-index-email-input">Mailing list</label>
          <input id="release-index-email-input" type="email" placeholder="your@email.com" required />
          <button type="submit">Submit →</button>
        </form>
      </div>

      <div className="release-index-columns">
        <span>Artist</span>
        <span>Title</span>
        <span>Format</span>
        <span aria-hidden="true" />
      </div>

      <div className="release-index-table">
        {filtered.map((r) => (
          <article className="release-index-row" key={r.title}>
            <span className="release-index-artist">{r.artist}</span>
            <h2 className="release-index-title">{r.title}</h2>
            <span className="release-index-meta">{r.meta}</span>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="release-index-buy"
              aria-label={`${r.title} — Buy`}
            >
              Buy
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
