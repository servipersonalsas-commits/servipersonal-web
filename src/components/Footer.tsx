import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-petroleum text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise font-bold text-lg mb-4">
              S
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Gestión estratégica del talento humano para entidades públicas y
              privadas en Colombia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-turquoise-light mb-4">
              Navegación
            </h4>
            <nav className="space-y-2">
              {["Inicio", "Quiénes Somos", "Servicios", "Ventajas", "Contacto"].map(
                (item) => (
                  <a
                    key={item}
                    href={
                      item === "Inicio"
                        ? "/"
                        : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`
                    }
                    className="block text-sm text-white/60 hover:text-turquoise-light transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-turquoise-light mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-turquoise-light" />
                <span>
                  CR 6 CL 50 B CC Plaza La Castellana OF 218, Montería
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-turquoise-light" />
                <span>313 518 1933</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-turquoise-light" />
                <span>estservipersonal@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Servipersonal de Colombia S.A.S.
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
