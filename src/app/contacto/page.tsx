import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Contacto
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Hablemos
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Estamos listos para atender sus requerimientos y ofrecerle la mejor
            solucion en gestion del talento humano.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-petroleum">
                  Informacion de contacto
                </h2>
                <div className="space-y-4 text-sm text-charcoal/70">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-turquoise" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Direccion</p>
                      <p>CR 6 CL 50 B CC Plaza La Castellana OF 218</p>
                      <p className="text-xs text-charcoal/50">Monteria, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-turquoise" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Telefono</p>
                      <p>313 518 1933</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-turquoise" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Correo electronico</p>
                      <p>estservipersonal@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-cream">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-turquoise" />
                  <h3 className="font-medium text-charcoal">
                    Horario de atencion
                  </h3>
                </div>
                <p className="text-sm text-charcoal/60">
                  Lunes a viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-charcoal/60">Sabados: 8:00 AM - 12:00 PM</p>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="p-8 rounded-2xl bg-white border border-stone/60">
                <h2 className="font-serif text-2xl text-petroleum mb-6">
                  Envienos un mensaje
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
