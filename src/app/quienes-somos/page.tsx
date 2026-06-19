import { Shield, Eye, Heart, TrendingUp, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
      <section className="py-24 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Servipersonal de Colombia S.A.S.
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Quienes Somos
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Empresa especializada en la prestacion de servicios temporales y en
            la gestion integral del talento humano.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
            Servipersonal de Colombia S.A.S. brinda soporte operativo y
            administrativo a entidades del sector publico y privado, asegurando
            el cumplimiento oportuno de las disposiciones legales laborales y de
            seguridad social.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
            Contribuimos a la optimizacion de la gestion del talento humano y a
            la reduccion de riesgos legales y administrativos para las entidades
            contratantes.
          </p>
          <p className="text-lg italic text-turquoise font-medium">
            La innovacion en la gestion y la atencion oportuna a las entidades
            contratantes son ejes prioritarios de nuestro servicio.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-10 rounded-2xl bg-white border border-stone/60">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                Mision
              </span>
              <h2 className="font-serif text-3xl text-petroleum mb-4">
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
            <div className="p-10 rounded-2xl bg-white border border-stone/60">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                Vision
              </span>
              <h2 className="font-serif text-3xl text-petroleum mb-4">
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
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Valores"
            title="Valores Corporativos"
            description="Los principios que guian cada una de nuestras acciones."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-white border border-stone/60 hover:border-turquoise/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-turquoise" />
                </div>
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
