"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/ventajas", label: "Ventajas" },
  { href: "/trabaja-con-nosotros", label: "Talento" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone/50">
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Servipersonal de Colombia S.A.S."
            className="h-12 sm:h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center">
          {links.map((l, i) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm transition-colors duration-200 ${
                  i > 0 ? "border-l border-stone/50" : ""
                } ${
                  active
                    ? "text-turquoise"
                    : "text-charcoal/70 hover:text-petroleum"
                }`}
              >
                <span>{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-petroleum"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone/50">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-3 border-b border-stone/40 last:border-b-0 ${
                    active ? "text-turquoise" : "text-charcoal/80"
                  }`}
                >
                  <span className="text-lg">{l.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}