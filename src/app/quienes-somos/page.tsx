import Image from "next/image";
import { Shield, Eye, Heart, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Cumplimiento",
    desc: "Actuamos conforme a la legislacion laboral vigente y a los principios que rigen la contratacion publica.",
  },
  {
    icon: Heart,
    title: "Responsabilidad",
    desc: "Asumimos con rigor nuestras obligaciones laborales, administrativas y sociales.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    desc: "Desarrollamos nuestras operaciones con claridad, trazabilidad y comunicacion permanente.",
  },
  {
    icon: Zap,
    title: "Compromiso con el servicio",
    desc: "Orientamos nuestra gestion a la atencion oportuna y eficiente de nuestros clientes.",
  },
  {
    icon: TrendingUp,
    title: "Mejora continua",
    desc: "Optimizamos permanentemente nuestros procesos, fortaleciendo la calidad del servicio.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-4">
            Servipersonal de Colombia S.A.S.
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-petroleum leading-[0.95] mb-8 max-w-3xl">
            Quienes
            <span className="text-turquoise"> Somos</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Empresa especializada en la prestacion de servicios temporales y en
              la gestion integral del talento humano, brindando soporte operativo
              y administrativo a entidades del sector publico y privado.
            </p>
            <div className="pl-6 border-l-2 border-turquoise/30">
              <p className="text-lg italic text-charcoal/80 leading-relaxed">
                &ldquo;La innovacion en la gestion y la atencion oportuna a las
                entidades contratantes son ejes prioritarios de nuestro
                servicio.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="/images/equipo-quienes-somos.jpg"
              alt="Equipo de Servipersonal de Colombia colaborando"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 rounded-md bg-white border border-stone/60">
              <div className="flex gap-4">
                <span className="text-6xl font-serif text-turquoise/20 font-bold leading-none">M</span>
                <div>
                  <h2 className="font-serif text-2xl text-petroleum mb-4">
                    Nuestra Mision
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    Brindar soluciones integrales y eficientes en la gestion del
                    talento humano, mediante la prestacion de servicios temporales y
                    laborales, garantizando el cumplimiento estricto de la
                    normatividad vigente, la continuidad operativa y la mitigacion
                    de riesgos laborales para las entidades publicas y privadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 rounded-md bg-white border border-stone/60">
              <div className="flex gap-4">
                <span className="text-6xl font-serif text-turquoise/20 font-bold leading-none">V</span>
                <div>
                  <h2 className="font-serif text-2xl text-petroleum mb-4">
                    Nuestra Vision
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    Ser una empresa reconocida a nivel nacional por su confiabilidad,
                    solidez operativa y cumplimiento normativo en la prestacion de
                    servicios de gestion del talento humano, consolidandonos como un
                    aliado estrategico para las entidades publicas y privadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="flex gap-4">
              <div className="w-1 shrink-0 bg-gradient-to-b from-turquoise to-turquoise/20 rounded-full" />
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                  Valores
                </span>
                <h2 className="font-serif text-4xl text-petroleum leading-tight">
                  Valores Corporativos
                </h2>
                <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
                  Los principios que guian cada una de nuestras acciones.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-3xl bg-white border border-stone/60 hover:border-turquoise/30 transition-colors"
              >
                <v.icon size={22} className="text-turquoise mb-4" />
                <h3 className="font-serif text-lg text-petroleum mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
