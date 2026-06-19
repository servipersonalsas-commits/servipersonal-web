import { DollarSign, Globe, Clock, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: DollarSign,
    title: "Reduccion de Costos",
    desc: "Contribucion a la eficiencia del gasto mediante la optimizacion de los procesos administrativos asociados a la gestion del talento humano.",
    details: [
      "Optimizacion de procesos administrativos",
      "Reduccion de carga operativa interna",
      "Eficiencia en la gestion de personal",
    ],
  },
  {
    icon: Globe,
    title: "Agilidad Nacional",
    desc: "Capacidad operativa a nivel nacional que permite la seleccion oportuna de personal y la cobertura del servicio en todo el pais.",
    details: [
      "Cobertura en todo el territorio nacional",
      "Seleccion oportuna de personal",
      "Respuesta rapida a sus necesidades",
    ],
  },
  {
    icon: Clock,
    title: "Liberacion Operativa",
    desc: "Gestion integral y oportuna de las afiliaciones al Sistema de Seguridad Social (ARL, EPS, AFP y Cajas de Compensacion).",
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
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-petroleum to-petroleum-dark" />
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise-light mb-4">
            Beneficios
          </span>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95]">
                Ventajas
              </h1>
              <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-lg">
                Beneficios financieros y operativos que marcan la diferencia
                para su organizacion.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-7xl font-serif text-white/5 font-bold leading-none">
                04
              </p>
              <p className="text-xs text-white/20 mt-1 uppercase tracking-widest">
                Pilares
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className="grid md:grid-cols-5 gap-8 p-8 md:p-10 bg-white border border-stone/60"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-serif text-turquoise/20 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a.icon size={22} className="text-turquoise" />
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
                        <span className="w-1.5 h-1.5 bg-turquoise shrink-0" />
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
