import Image from "next/image";
import type { Metadata } from "next";
import { DollarSign, Globe, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Ventajas",
  description:
    "Reducción de costos, cobertura nacional, liberación operativa y cumplimiento normativo. Cuatro pilares que respaldan nuestra propuesta de valor.",
};

const advantages = [
  {
    icon: DollarSign,
    title: "Reducción de Costos",
    desc: "Contribución a la eficiencia del gasto mediante la optimización de los procesos administrativos asociados a la operación de su equipo de trabajo.",
    details: [
      "Optimización de procesos administrativos",
      "Reducción de carga operativa interna",
      "Eficiencia en la gestión de personal",
    ],
  },
  {
    icon: Globe,
    title: "Agilidad Nacional",
    desc: "Capacidad operativa a nivel nacional que permite la selección oportuna de personal y la cobertura del servicio en todo el país.",
    details: [
      "Cobertura en todo el territorio nacional",
      "Selección oportuna de personal",
      "Respuesta rápida a sus necesidades",
    ],
  },
  {
    icon: Clock,
    title: "Liberación Operativa",
    desc: "Gestión integral y oportuna de las afiliaciones al Sistema de Seguridad Social (ARL, EPS, AFP y Cajas de Compensación).",
    details: [
      "Afiliación a seguridad social",
      "Gestión de ARL, EPS, AFP",
      "Cumplimiento de obligaciones legales",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Garantía de Cumplimiento",
    desc: "Gestión y expedición de nómina y liquidaciones asegurando el cumplimiento normativo, la trazabilidad de los procesos y las obligaciones del Sistema de Seguridad Social.",
    details: [
      "Expedición de nómina y liquidaciones",
      "Trazabilidad de procesos",
      "Cumplimiento normativo garantizado",
    ],
  },
];

export default function VentajasPage() {
  return (
    <>
      <section className="relative py-24 md:py-28 overflow-hidden bg-petroleum text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/ventajas-financiero.jpg"
            alt="Análisis financiero y operativo"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-petroleum via-petroleum/95 to-petroleum/80" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 border-b border-white/10 pb-10">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise-light mb-4">
                Beneficios
              </span>
              <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                Ventajas
              </h1>
            </div>
            <p className="hidden md:block text-base text-white/60 max-w-xs text-right">
              Cuatro pilares que hacen la diferencia financiera y operativa
              para su organización.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="divide-y divide-stone/60 border-y border-stone/60">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12"
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-mono text-charcoal/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <a.icon size={20} className="text-turquoise mb-4" />
                  <h2 className="font-serif text-2xl md:text-3xl text-petroleum mb-3">
                    {a.title}
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    {a.desc}
                  </p>
                </div>
                <div className="md:col-span-6 md:border-l md:border-stone/60 md:pl-10">
                  <ul className="space-y-3">
                    {a.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-charcoal/70 text-sm"
                      >
                        <span className="w-1 h-1 mt-2 bg-turquoise shrink-0" />
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
