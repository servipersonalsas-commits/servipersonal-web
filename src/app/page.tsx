import Link from "next/link";
import { ArrowRight, Briefcase, TrendingUp, CheckCircle, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    num: "01",
    title: "Administracion de Nomina",
    desc: "Gestion completa de pagos y prestaciones sociales.",
    icon: Briefcase,
  },
  {
    num: "02",
    title: "Reclutamiento y Seleccion",
    desc: "Identificacion del talento ideal para su empresa.",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Evaluacion de Desempeno",
    desc: "Medicion y mejora del rendimiento laboral.",
    icon: CheckCircle,
  },
  {
    num: "04",
    title: "Seguridad y Salud en el Trabajo",
    desc: "Proteccion integral del personal y cumplimiento normativo.",
    icon: Shield,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, #2BAFA0 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Servipersonal de Colombia S.A.S.
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
              Gestion Estrategica del
              <span className="text-turquoise"> Talento Humano</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Soluciones integrales en servicios temporales y gestion del talento
              humano para entidades publicas y privadas en Colombia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-turquoise text-white font-medium text-sm hover:bg-turquoise-dark transition-colors"
              >
                Solicitar informacion <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Nuestros servicios
              </Link>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, #ffffff 0%, transparent 100%)",
          }}
        />
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Servicios"
            title="Soluciones en Gestion Humana"
            description="Ofrecemos un portafolio completo de servicios para optimizar la gestion del talento humano en su organizacion."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 bg-white border border-stone/60 hover:border-turquoise/30 hover:shadow-lg hover:shadow-turquoise/5 transition-all duration-300"
              >
                <span className="block text-5xl font-serif text-turquoise/60 font-bold leading-none mb-4">
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
          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-turquoise font-medium text-sm hover:underline"
            >
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                Quienes Somos
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-petroleum leading-tight mb-6">
                Talento que impulsa resultados
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Servipersonal de Colombia S.A.S. es una empresa especializada en
                la prestacion de servicios temporales y en la gestion integral
                del talento humano, brindando soporte operativo y administrativo
                a entidades del sector publico y privado.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                A traves de procesos estandarizados de reclutamiento, seleccion y
                vinculacion de personal, aseguramos el cumplimiento oportuno de
                las disposiciones legales laborales y de seguridad social.
              </p>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-turquoise font-medium text-sm hover:underline"
              >
                Conocer mas <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-turquoise/20 to-petroleum/20" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Ventajas"
            title="Por que elegirnos"
            description="Beneficios financieros y operativos que marcan la diferencia."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reduccion de Costos",
                desc: "Optimizacion de procesos administrativos asociados a la gestion del talento humano.",
              },
              {
                title: "Agilidad Nacional",
                desc: "Capacidad operativa a nivel nacional para seleccion oportuna de personal.",
              },
              {
                title: "Liberacion Operativa",
                desc: "Gestion integral de afiliaciones al Sistema de Seguridad Social.",
              },
              {
                title: "Garantia de Cumplimiento",
                desc: "Gestion y expedicion de nomina y liquidaciones con total trazabilidad.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 bg-petroleum text-white"
              >
                <h3 className="font-serif text-xl text-turquoise-light mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            label="Contacto"
            title="Hablemos"
            description="Estamos listos para atender sus requerimientos."
          />
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-turquoise text-white font-medium text-sm hover:bg-turquoise-dark transition-colors"
          >
            Contactar ahora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
