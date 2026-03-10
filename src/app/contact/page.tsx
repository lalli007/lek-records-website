import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lek Records",
};

const people = [
  { name: "Kim", email: "kim@lekrecords.com" },
  { name: "Gabriel", email: "gabriel@lekrecords.com" },
  { name: "Lárus", email: "larus@lekrecords.com" },
];

export default function Contact() {
  return (
    <main className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 48px 80px" }}>
      <section style={{ width: "min(560px, 100%)" }}>
        <p className="eyebrow">Contact</p>
        <div style={{ display: "grid", gap: "24px", marginTop: "24px" }}>
          {people.map((p) => (
            <div key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(11,11,11,0.12)", paddingBottom: "16px" }}>
              <span style={{ fontSize: "18px", fontWeight: 500 }}>{p.name}</span>
              <a
                href={`mailto:${p.email}`}
                style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--muted)", textDecoration: "none", fontFamily: "'Space Mono', monospace" }}
              >
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
