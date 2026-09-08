import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bookingProfiles } from "@/data/booking";

export function generateStaticParams() {
  return bookingProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = bookingProfiles.find((p) => p.slug === slug);
  return { title: profile ? `${profile.name} — Booking` : "Booking" };
}

export default async function BookingProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = bookingProfiles.find((p) => p.slug === slug);

  if (!profile) {
    notFound();
  }

  const { name, role, location, photo, bio, techRider, contact, links } = profile;

  const contactRows: [string, string | null][] = [
    ["Mail", contact.email],
    ["Phone", contact.phone],
    ["Instagram", contact.instagram],
    ["SoundCloud", contact.soundcloud],
    ["RA", contact.ra],
    ["Bandcamp", contact.bandcamp],
  ];

  return (
    <main className="page booking-page">
      <article className="booking-card">
        <h1 className="booking-wordmark">Lek Rec.</h1>

        <div className="booking-top">
          <div className={`booking-photo ${photo}`} role="img" aria-label={`Portrait of ${name}`} />
          <div className="booking-intro">
            <h2 className="booking-name">{name}</h2>
            <p className="booking-role">
              {role} <span className="booking-divider">/</span> {location}
            </p>
            <p className="booking-bio">{bio}</p>
          </div>
        </div>

        <section className="booking-section">
          <h3 className="booking-section-title">Tech rider</h3>
          <ul className="booking-list">
            {techRider.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="booking-section">
          <h3 className="booking-section-title">Contact information</h3>
          <p className="booking-contact-note">For bookings, press inquiries, or more information.</p>
          <dl className="booking-contact-grid">
            {contactRows.map(([label, value]) => (
              <div className="booking-contact-row" key={label}>
                <dt>{label}</dt>
                <dd>{value ?? "TBA"}</dd>
              </div>
            ))}
          </dl>
        </section>

        {links.length > 0 && (
          <section className="booking-section">
            <h3 className="booking-section-title">Links</h3>
            <ul className="booking-list">
              {links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
