import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogOut, Download, FileText, Mail, Phone, Building2, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) redirect("/admin/login");

  const { data: postulaciones } = await supabase
    .from("postulaciones")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: contactos } = await supabase
    .from("contactos")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-stone/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-bold text-petroleum font-serif">
            Panel Administrativo
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-charcoal/60">
              {userData.user.email}
            </span>
            <Link
              href="/"
              className="text-sm text-turquoise hover:text-turquoise-dark transition"
            >
              Ver sitio
            </Link>
            <form action="/auth/logout" method="post">
              <button
                type="submit"
                className="flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-red-500 transition"
              >
                <LogOut size={16} />
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Postulaciones */}
        <section>
          <h2 className="text-xl font-bold text-petroleum font-serif mb-1">
            Postulaciones
          </h2>
          <p className="text-sm text-charcoal/60 mb-6">
            {postulaciones?.length ?? 0} candidatos registrados
          </p>

          {!postulaciones || postulaciones.length === 0 ? (
            <div className="bg-white rounded-xl border border-stone/50 px-6 py-12 text-center text-charcoal/40">
              <FileText size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No hay postulaciones aún</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-stone/50">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-petroleum text-white text-left">
                    <th className="px-4 py-3 font-medium">Nombre</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Teléfono</th>
                    <th className="px-4 py-3 font-medium">Cargo</th>
                    <th className="px-4 py-3 font-medium">Fecha</th>
                    <th className="px-4 py-3 font-medium">CV</th>
                  </tr>
                </thead>
                <tbody>
                  {postulaciones.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-t border-stone/30 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-charcoal">
                        {p.nombre}
                      </td>
                      <td className="px-4 py-3 text-charcoal/70">
                        <a
                          href={`mailto:${p.email}`}
                          className="hover:text-turquoise transition"
                        >
                          {p.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-charcoal/70">
                        <a
                          href={`tel:${p.telefono}`}
                          className="hover:text-turquoise transition"
                        >
                          {p.telefono}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-charcoal/70">{p.cargo}</td>
                      <td className="px-4 py-3 text-charcoal/50 text-xs whitespace-nowrap">
                        {new Date(p.created_at).toLocaleDateString("es-CO", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cvs/${p.archivo}`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-turquoise hover:text-turquoise-dark transition text-xs font-medium"
                        >
                          <Download size={14} />
                          Descargar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Contactos */}
        <section>
          <h2 className="text-xl font-bold text-petroleum font-serif mb-1">
            Mensajes de Contacto
          </h2>
          <p className="text-sm text-charcoal/60 mb-6">
            {contactos?.length ?? 0} mensajes recibidos
          </p>

          {!contactos || contactos.length === 0 ? (
            <div className="bg-white rounded-xl border border-stone/50 px-6 py-12 text-center text-charcoal/40">
              <MessageSquare size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No hay mensajes aún</p>
            </div>
          ) : (
            <div className="space-y-4">
              {contactos.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-xl border border-stone/50 p-5"
                >
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm mb-3">
                    <span className="flex items-center gap-1.5 font-medium text-charcoal">
                      <Building2 size={14} className="text-turquoise" />
                      {c.nombre}
                    </span>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-1.5 text-charcoal/60 hover:text-turquoise transition"
                    >
                      <Mail size={14} />
                      {c.email}
                    </a>
                    <a
                      href={`tel:${c.telefono}`}
                      className="flex items-center gap-1.5 text-charcoal/60 hover:text-turquoise transition"
                    >
                      <Phone size={14} />
                      {c.telefono}
                    </a>
                    {c.empresa && (
                      <span className="flex items-center gap-1.5 text-charcoal/60">
                        <Building2 size={14} />
                        {c.empresa}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-charcoal/40 text-xs ml-auto">
                      <Calendar size={12} />
                      {new Date(c.created_at).toLocaleDateString("es-CO", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed bg-cream rounded-lg p-3">
                    {c.mensaje}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
