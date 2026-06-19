import {
  ClipboardList,
  Users,
  BarChart3,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Award,
} from "lucide-react";
const services = [
  {
    icon: ClipboardList,
    title: "Administracion de Nomina",
    desc: "Gestion completa de pagos, prestaciones sociales y liquidaciones. Nos encargamos de todo el proceso de nomina, desde el calculo de salarios hasta la expedicion de certificados laborales.",
  },
  {
    icon: Users,
    title: "Reclutamiento y Seleccion",
    desc: "Identificacion del talento ideal para su empresa. Procesos estandarizados de reclutamiento, seleccion y vinculacion de personal adaptados a las necesidades de cada entidad.",
  },
  {
    icon: BarChart3,
    title: "Evaluacion de Desempeno",
    desc: "Medicion y mejora del rendimiento laboral mediante metodologias de evaluacion estructuradas que permiten identificar areas de oportunidad y potenciar el talento.",
  },
  {
    icon: GraduationCap,
    title: "Capacitacion y Formacion",
    desc: "Desarrollo continuo de habilidades profesionales a traves de programas de formacion disenados para fortalecer las competencias del equipo de trabajo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Salud en el Trabajo",
    desc: "Proteccion integral del personal y cumplimiento de la normatividad en seguridad social. Gestion de afiliaciones a ARL, EPS, AFP y Cajas de Compensacion.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar Laboral",
    desc: "Programas de incentivos y bienestar para empleados, fomentando un ambiente laboral saludable que contribuye a la productividad y satisfaccion del equipo.",
  },
  {
    icon: Award,
    title: "Garantia de Cumplimiento",
    desc: "Gestion y expedicion de nomina y liquidaciones asegurando el cumplimiento normativo, la trazabilidad de los procesos y las obligaciones del Sistema de Seguridad Social.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-petroleum-dark via-petroleum to-petroleum-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-turquoise-light text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Portafolio
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Soluciones integrales en gestion del talento humano para entidades
            publicas y privadas.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-2xl bg-white border border-stone/60 hover:border-turquoise/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center shrink-0 group-hover:bg-turquoise/20 transition-colors">
                    <s.icon size={24} className="text-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-petroleum mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
