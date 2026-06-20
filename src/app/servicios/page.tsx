import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Nómina, selección, capacitación, seguridad y salud en el trabajo, y bienestar laboral. Siete servicios agrupados en tres líneas de gestión.",
};

const groups = [
  {
    name: "Gestión Administrativa y Nómina",
    radius: "rounded-md",
    image: {
      src: "/images/nomina-administrativa.jpg",
      alt: "Vinculación y gestión administrativa de personal",
    },
    items: [
      {
        num: "01",
        title: "Administración de Nómina",
        desc: "Gestión completa de pagos, prestaciones sociales y liquidaciones. Nos encargamos de todo el proceso de nómina, desde el cálculo de salarios hasta la expedición de certificados laborales.",
      },
      {
        num: "02",
        title: "Garantía de Cumplimiento",
        desc: "Gestión y expedición de nómina y liquidaciones asegurando el cumplimiento normativo, la trazabilidad de los procesos y las obligaciones del Sistema de Seguridad Social.",
      },
    ],
  },
  {
    name: "Selección y Desarrollo de Talento",
    radius: "rounded-2xl",
    image: {
      src: "/images/capacitacion.jpg",
      alt: "Capacitación y formación de equipos de trabajo",
    },
    items: [
      {
        num: "03",
        title: "Reclutamiento y Selección",
        desc: "Identificación del talento ideal para su empresa. Procesos estandarizados de reclutamiento, selección y vinculación de personal adaptados a las necesidades de cada entidad.",
      },
      {
        num: "04",
        title: "Evaluación de Desempeño",
        desc: "Medición y mejora del rendimiento laboral mediante metodologías de evaluación estructuradas que permiten identificar áreas de oportunidad y potenciar el talento.",
      },
      {
        num: "05",
        title: "Capacitación y Formación",
        desc: "Desarrollo continuo de habilidades profesionales a través de programas de formación diseñados para fortalecer las competencias del equipo de trabajo.",
      },
    ],
  },
  {
    name: "Bienestar y Seguridad Laboral",
    radius: "rounded-3xl",
    image: {
      src: "/images/seguridad-sst.jpg",
      alt: "Seguridad y salud en el trabajo",
    },
    items: [
      {
        num: "06",
        title: "Seguridad y Salud en el Trabajo",
        desc: "Protección integral del personal y cumplimiento de la normatividad en seguridad social. Gestión de afiliaciones a ARL, EPS, AFP y Cajas de Compensación.",
      },
      {
        num: "07",
        title: "Bienestar Laboral",
        desc: "Programas de incentivos y bienestar para empleados, fomentando un ambiente laboral saludable que contribuye a la productividad y satisfacción del equipo.",
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
                Nómina, selección y bienestar para entidades públicas y privadas
                en todo el país.
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
              {group.image && (
                <div className={`relative aspect-[21/9] overflow-hidden mb-8 ${group.radius}`}>
                  <Image
                    src={group.image.src}
                    alt={group.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              )}
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
