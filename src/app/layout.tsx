import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Lek Records",
  description: "Underground music label",
  metadataBase: new URL("https://lekrec.com"),
  openGraph: {
    title: "Lek Records",
    description: "Underground music label",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lek Rec.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lek Records",
    description: "Underground music label",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <Nav />
        </header>
        {children}
        <footer className="site-footer">
          <p>© 2026 Lek.rec</p>
        </footer>
      </body>
    </html>
  );
}
