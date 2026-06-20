import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/ventajas", label: "Ventajas" },
  { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-petroleum text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="w-80 h-20 mb-6">
              <img
                src="/logo.png"
                alt="Servipersonal de Colombia S.A.S."
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Gestion estrategica del talento humano para entidades publicas y
              privadas en Colombia.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-turquoise-light mb-4">
              Navegacion
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-turquoise-light transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-turquoise-light mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-turquoise-light" />
                <span>
                  CR 6 CL 50 B CC Plaza La Castellana OF 218, Monteria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-turquoise-light" />
                <a
                  href="tel:+573135181933"
                  className="hover:text-turquoise-light transition-colors"
                >
                  313 518 1933
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-turquoise-light" />
                <a
                  href="mailto:estservipersonal@gmail.com"
                  className="hover:text-turquoise-light transition-colors"
                >
                  estservipersonal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Servipersonal de Colombia S.A.S.
          </p>
          <Link
            href="/admin"
            prefetch={false}
            className="text-white/20 hover:text-white/40 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}