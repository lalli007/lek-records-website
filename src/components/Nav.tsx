"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Primary">
      <Link href="/" className="nav-home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/LEKREC.svg" alt="LEKREC" className="nav-logo" />
      </Link>
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
        Timeline
      </Link>
      <Link href="/artists" aria-current={pathname === "/artists" ? "page" : undefined}>
        Artists
      </Link>
      <Link href="/catalogue" aria-current={pathname === "/catalogue" ? "page" : undefined}>
        Catalogue
      </Link>
<Link href="/demodrop" aria-current={pathname === "/demodrop" ? "page" : undefined}>
        Demodrop
      </Link>
      <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
        Contact
      </Link>
    </nav>
  );
}
