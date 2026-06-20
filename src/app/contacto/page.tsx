import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <>
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-petroleum-dark via-petroleum to-petroleum-dark" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise-light mb-4">
                Contacto
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-6">
                Hablemos
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Estamos listos para atender sus requerimientos y ofrecerle la
                mejor solución en gestión del talento humano.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin size={16} className="text-turquoise-light shrink-0" />
                  CR 6 CL 50 B CC Plaza La Castellana OF 218, Montería
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Phone size={16} className="text-turquoise-light shrink-0" />
                  313 518 1933
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Mail size={16} className="text-turquoise-light shrink-0" />
                  estservipersonal@gmail.com
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-2xl text-white/30 font-serif italic leading-relaxed">
                &ldquo;La atención oportuna es parte del servicio que
                ofrecemos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-cream">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-turquoise" />
                  <h3 className="font-medium text-charcoal">
                    Horario de atención
                  </h3>
                </div>
                <p className="text-sm text-charcoal/60">
                  Lunes a viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-charcoal/60">Sábados: 8:00 AM - 12:00 PM</p>
              </div>
              <div className="p-6 rounded-2xl bg-cream">
                <h3 className="font-medium text-charcoal mb-2">
                  Información de contacto
                </h3>
                <div className="space-y-2 text-sm text-charcoal/60">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-turquoise shrink-0" />
                    <span>313 518 1933</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-turquoise shrink-0" />
                    <span>estservipersonal@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-turquoise shrink-0 mt-0.5" />
                    <span>CR 6 CL 50 B CC Plaza La Castellana OF 218, Montería</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="p-8 rounded-md bg-white border border-stone/60">
                <h2 className="font-serif text-2xl text-petroleum mb-6">
                  Envíenos un mensaje
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
