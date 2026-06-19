const groups = [
  {
    name: "Gestion Administrativa y Nomina",
    radius: "rounded-md",
    items: [
      {
        num: "01",
        title: "Administracion de Nomina",
        desc: "Gestion completa de pagos, prestaciones sociales y liquidaciones. Nos encargamos de todo el proceso de nomina, desde el calculo de salarios hasta la expedicion de certificados laborales.",
      },
      {
        num: "02",
        title: "Garantia de Cumplimiento",
        desc: "Gestion y expedicion de nomina y liquidaciones asegurando el cumplimiento normativo, la trazabilidad de los procesos y las obligaciones del Sistema de Seguridad Social.",
      },
    ],
  },
  {
    name: "Seleccion y Desarrollo de Talento",
    radius: "rounded-2xl",
    items: [
      {
        num: "03",
        title: "Reclutamiento y Seleccion",
        desc: "Identificacion del talento ideal para su empresa. Procesos estandarizados de reclutamiento, seleccion y vinculacion de personal adaptados a las necesidades de cada entidad.",
      },
      {
        num: "04",
        title: "Evaluacion de Desempeno",
        desc: "Medicion y mejora del rendimiento laboral mediante metodologias de evaluacion estructuradas que permiten identificar areas de oportunidad y potenciar el talento.",
      },
      {
        num: "05",
        title: "Capacitacion y Formacion",
        desc: "Desarrollo continuo de habilidades profesionales a traves de programas de formacion disenados para fortalecer las competencias del equipo de trabajo.",
      },
    ],
  },
  {
    name: "Bienestar y Seguridad Laboral",
    radius: "rounded-3xl",
    items: [
      {
        num: "06",
        title: "Seguridad y Salud en el Trabajo",
        desc: "Proteccion integral del personal y cumplimiento de la normatividad en seguridad social. Gestion de afiliaciones a ARL, EPS, AFP y Cajas de Compensacion.",
      },
      {
        num: "07",
        title: "Bienestar Laboral",
        desc: "Programas de incentivos y bienestar para empleados, fomentando un ambiente laboral saludable que contribuye a la productividad y satisfaccion del equipo.",
      },
    ],
  },
];

const colsMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-4 mb-12">
            <div className="w-1 shrink-0 bg-gradient-to-b from-turquoise to-petroleum rounded-full" />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                Portafolio
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-petroleum leading-[0.95]">
                Nuestros <span className="text-turquoise">Servicios</span>
              </h1>
              <p className="mt-4 text-lg text-charcoal/60 leading-relaxed max-w-xl">
                Soluciones integrales en gestion del talento humano para entidades
                publicas y privadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {groups.map((group, gi) => (
            <div key={group.name} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-lg font-medium text-charcoal/40 font-mono">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl text-petroleum">
                  {group.name}
                </h2>
                <div className="h-px flex-1 bg-stone" />
              </div>
              <div className={`grid ${colsMap[group.items.length] ?? "md:grid-cols-2"} gap-6`}>
                {group.items.map((s) => (
                  <div
                    key={s.num}
                    className={`group ${group.radius} bg-white border border-stone/60 p-6 hover:border-turquoise/30 transition-colors`}
                  >
                    <span className="block text-3xl font-serif text-turquoise/60 font-bold leading-none mb-3">
                      {s.num}
                    </span>
                    <h3 className="font-serif text-xl text-petroleum mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}