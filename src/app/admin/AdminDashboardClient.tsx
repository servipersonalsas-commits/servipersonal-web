"use client";

import { useState, useMemo, useTransition } from "react";
import {
  Download,
  FileText,
  Mail,
  Phone,
  Building2,
  Calendar,
  MessageSquare,
  Trash2,
  Filter,
  X,
  ArrowUpDown,
} from "lucide-react";
import {
  deletePostulacion,
  deleteContacto,
} from "@/app/admin/actions";

type Postulacion = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  cargo: string;
  archivo: string;
  created_at: string;
};

type Contacto = {
  id: number;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
  created_at: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

export default function AdminDashboardClient({
  postulaciones,
  contactos,
}: {
  postulaciones: Postulacion[];
  contactos: Contacto[];
}) {
  const [order, setOrder] = useState<"desc" | "asc">("desc");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [pending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const filterByDate = <T extends { created_at: string }>(items: T[]) => {
    return items.filter((item) => {
      const d = new Date(item.created_at);
      if (dateFrom && d < new Date(dateFrom)) return false;
      if (dateTo) {
        const to = new Date(dateTo);
        to.setHours(23, 59, 59, 999);
        if (d > to) return false;
      }
      return true;
    });
  };

  const sortByDate = <T extends { created_at: string }>(items: T[]) =>
    [...items].sort((a, b) => {
      const da = new Date(a.created_at).getTime();
      const db = new Date(b.created_at).getTime();
      return order === "desc" ? db - da : da - db;
    });

  const filteredPostulaciones = useMemo(
    () => sortByDate(filterByDate(postulaciones)),
    [postulaciones, dateFrom, dateTo, order]
  );

  const filteredContactos = useMemo(
    () => sortByDate(filterByDate(contactos)),
    [contactos, dateFrom, dateTo, order]
  );

  function clearFilters() {
    setDateFrom("");
    setDateTo("");
    setOrder("desc");
  }

  function handleDelete(id: number, type: "postulacion" | "contacto") {
    if (!confirm("¿Eliminar este registro? Esta acción no se puede deshacer."))
      return;
    setDeletingId(id);
    startTransition(async () => {
      try {
        if (type === "postulacion") await deletePostulacion(id);
        else await deleteContacto(id);
      } finally {
        setDeletingId(null);
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
      <div className="bg-white border border-stone/60 rounded-md p-5 flex flex-wrap items-end gap-4">
        <div className="flex items-center gap-2 text-charcoal/60 text-sm font-medium pb-2">
          <Filter size={16} />
          Filtros
        </div>
        <div>
          <label className="block text-xs text-charcoal/60 mb-1">Desde</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="px-3 py-2 border border-stone rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-turquoise/40 focus:border-turquoise"
          />
        </div>
        <div>
          <label className="block text-xs text-charcoal/60 mb-1">Hasta</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="px-3 py-2 border border-stone rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-turquoise/40 focus:border-turquoise"
          />
        </div>
        <div>
          <label className="block text-xs text-charcoal/60 mb-1">Orden</label>
          <button
            onClick={() => setOrder(order === "desc" ? "asc" : "desc")}
            className="inline-flex items-center gap-2 px-3 py-2 border border-stone rounded-md text-sm hover:border-turquoise transition-colors"
          >
            <ArrowUpDown size={14} />
            {order === "desc" ? "Más reciente" : "Más antiguo"}
          </button>
        </div>
        {(dateFrom || dateTo || order !== "desc") && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-charcoal"
          >
            <X size={14} />
            Limpiar
          </button>
        )}
      </div>

      <section>
        <h2 className="text-xl font-bold text-petroleum font-serif mb-1">
          Postulaciones
        </h2>
        <p className="text-sm text-charcoal/60 mb-6">
          {filteredPostulaciones.length} de {postulaciones.length} candidatos
        </p>

        {filteredPostulaciones.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone/50 px-6 py-12 text-center text-charcoal/40">
            <FileText size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">No hay postulaciones en este rango</p>
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
                  <th className="px-4 py-3 font-medium w-10"></th>
                </tr>
              </thead>
              <tbody>
                {filteredPostulaciones.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-t border-stone/30 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream/50"
                    }`}
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
                        href={`${supabaseUrl}/storage/v1/object/public/cvs/${p.archivo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-turquoise hover:text-turquoise-dark transition text-xs font-medium"
                      >
                        <Download size={14} />
                        Descargar
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(p.id, "postulacion")}
                        disabled={pending && deletingId === p.id}
                        className="text-charcoal/30 hover:text-red-500 transition disabled:opacity-30"
                        title="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold text-petroleum font-serif mb-1">
          Mensajes de Contacto
        </h2>
        <p className="text-sm text-charcoal/60 mb-6">
          {filteredContactos.length} de {contactos.length} mensajes
        </p>

        {filteredContactos.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone/50 px-6 py-12 text-center text-charcoal/40">
            <MessageSquare size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">No hay mensajes en este rango</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContactos.map((c) => (
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
                  <button
                    onClick={() => handleDelete(c.id, "contacto")}
                    disabled={pending && deletingId === c.id}
                    className="text-charcoal/30 hover:text-red-500 transition disabled:opacity-30"
                    title="Eliminar"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed bg-cream rounded-lg p-3">
                  {c.mensaje}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}