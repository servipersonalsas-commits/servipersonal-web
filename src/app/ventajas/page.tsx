import { DollarSign, Globe, Clock, ShieldCheck } from "lucide-react";
const advantages = [
  {
    icon: DollarSign,
    title: "Reduccion de Costos",
    desc: "Contribucion a la eficiencia del gasto mediante la optimizacion de los procesos administrativos asociados a la gestion del talento humano. Reduzca costos operativos sin sacrificar calidad.",
    details: [
      "Optimizacion de procesos administrativos",
      "Reduccion de carga operativa interna",
      "Eficiencia en la gestion de personal",
    ],
  },
  {
    icon: Globe,
    title: "Agilidad Nacional",
    desc: "Capacidad operativa a nivel nacional que permite la seleccion oportuna de personal y la cobertura del servicio en todo el pais. Donde nos necesite, alli estamos.",
    details: [
      "Cobertura en todo el territorio nacional",
      "Seleccion oportuna de personal",
      "Respuesta rapida a sus necesidades",
    ],
  },
  {
    icon: Clock,
    title: "Liberacion Operativa",
    desc: "Gestion integral y oportuna de las afiliaciones al Sistema de Seguridad Social (ARL, EPS, AFP y Cajas de Compensacion), garantizando el cumplimiento de las obligaciones legales.",
    details: [
      "Afiliacion a seguridad social",
      "Gestion de ARL, EPS, AFP",
      "Cumplimiento de obligaciones legales",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Cumplimiento",
    desc: "Gestion y expedicion de nomina y liquidaciones asegurando el cumplimiento normativo, la trazabilidad de los procesos y las obligaciones del Sistema de Seguridad Social.",
    details: [
      "Expedicion de nomina y liquidaciones",
      "Trazabilidad de procesos",
      "Cumplimiento normativo garantizado",
    ],
  },
];

export default function VentajasPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Beneficios
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Ventajas Financieras y Operacionales
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Conozca los beneficios de trabajar con Servipersonal de Colombia
            S.A.S.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="grid md:grid-cols-5 gap-8 p-10 rounded-2xl bg-white border border-stone/60"
              >
                <div className="md:col-span-2">
                  <div className="w-14 h-14 rounded-2xl bg-turquoise/10 flex items-center justify-center mb-4">
                    <a.icon size={28} className="text-turquoise" />
                  </div>
                  <h2 className="font-serif text-3xl text-petroleum mb-3">
                    {a.title}
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    {a.desc}
                  </p>
                </div>
                <div className="md:col-span-3 flex items-center">
                  <ul className="space-y-3">
                    {a.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 text-charcoal/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-turquoise shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
