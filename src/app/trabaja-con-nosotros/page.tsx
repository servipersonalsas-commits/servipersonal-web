import { Users } from "lucide-react";
import WorkWithUsForm from "@/components/WorkWithUsForm";

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Talento
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Trabaja con Nosotros
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Envianos tu hoja de vida y forma parte de nuestro equipo de talento
            humano.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-stone/60">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-turquoise/10 flex items-center justify-center">
                <Users size={28} className="text-turquoise" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-petroleum">
                  Postulate
                </h2>
                <p className="text-sm text-charcoal/60">
                  Adjunta tu hoja de vida y te tendremos en cuenta para futuras
                  vacantes.
                </p>
              </div>
            </div>
            <WorkWithUsForm />
          </div>
        </div>
      </section>
    </>
  );
}
