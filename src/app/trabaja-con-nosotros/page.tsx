import WorkWithUsForm from "@/components/WorkWithUsForm";

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <section className="py-20 md:py-24 bg-cream border-b border-stone/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                Talento
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-petroleum leading-[0.95]">
                Trabaja con <span className="text-turquoise">Nosotros</span>
              </h1>
              <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
                Envianos tu hoja de vida y forma parte de nuestro equipo de
                talento humano.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-sm text-charcoal/50 leading-relaxed">
                Revisamos cada postulacion y nos pondremos en contacto cuando
                abramos una vacante afín a tu perfil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-6">
              <div>
                <h3 className="font-serif text-lg text-petroleum mb-2">
                  Que buscamos
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  Personas comprometidas con el servicio, dispuestas a crecer
                  en un entorno de cumplimiento y mejora continua.
                </p>
              </div>
              <div className="border-t border-stone/60 pt-6">
                <h3 className="font-serif text-lg text-petroleum mb-2">
                  Como participar
                </h3>
                <ol className="text-sm text-charcoal/60 space-y-2 list-decimal pl-4">
                  <li>Llena el formulario de postulacion.</li>
                  <li>Adjunta tu hoja de vida en PDF o Word.</li>
                  <li>Espera nuestro contacto.</li>
                </ol>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="p-8 rounded-md bg-white border border-stone/60">
                <h2 className="font-serif text-2xl text-petroleum mb-2">
                  Postulate
                </h2>
                <p className="text-sm text-charcoal/60 mb-8">
                  Adjunta tu hoja de vida y te tendremos en cuenta para futuras
                  vacantes.
                </p>
                <WorkWithUsForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}