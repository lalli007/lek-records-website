import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demodrop — Lek Records",
};

export default function Demodrop() {
  return (
    <div className="demodrop-page" style={{ flex: 1 }}>
      <main className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 48px 80px" }}>
        <section className="demodrop-card" aria-labelledby="demodrop-title">
          <p className="eyebrow">Demodrop</p>
          <p className="subhead">Short text only. No uploads, just link</p>

          <form className="demodrop-form" action="#" method="post">
            <label htmlFor="artist-name">Artist name</label>
            <input
              id="artist-name"
              name="artist-name"
              type="text"
              autoComplete="name"
              required
            />

            <div className="message-block">
              <div className="message-input">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1200}
                  required
                />
              </div>
              <div className="message-aside" aria-hidden="true">
                <p>Plain text only</p>
                <p>Max 1200 chars</p>
              </div>
            </div>

            <button type="submit" className="button">
              Send message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
