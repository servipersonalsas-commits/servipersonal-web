import WorkWithUsForm from "@/components/WorkWithUsForm";

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <section className="py-20 md:py-24 bg-cream border-b border-stone/40">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
            Talento
          </span>
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-petroleum leading-[0.95]">
              Trabaja con <span className="text-turquoise">Nosotros</span>
            </h1>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              Envianos tu hoja de vida y forma parte de nuestro equipo de talento
              humano.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 bg-white border border-stone/60">
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
      </section>
    </>
  );
}
