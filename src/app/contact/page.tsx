import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lek Records",
};

export default function Contact() {
  return (
    <main className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 48px 80px" }}>
      <section style={{ textAlign: "center" }}>
        <p className="eyebrow">Contact</p>
        <a
          href="mailto:post@lek.rec"
          style={{ fontSize: "14px", letterSpacing: "0.08em", color: "var(--muted)", textDecoration: "none", fontFamily: "'Space Mono', monospace", marginTop: "24px", display: "inline-block" }}
        >
          post@lek.rec
        </a>
      </section>
    </main>
  );
}
