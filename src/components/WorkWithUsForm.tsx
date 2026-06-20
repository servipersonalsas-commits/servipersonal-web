"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { z } from "zod";
import { Upload, CheckCircle, AlertCircle, FileText } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo invalido"),
  telefono: z
    .string()
    .min(7, "Telefono muy corto")
    .regex(/^[0-9\s\+\-]+$/, "Solo numeros"),
  cargo: z.string().min(2, "Indica el cargo de interes"),
});

type Status = "idle" | "sending" | "success" | "error";

export default function WorkWithUsForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      cargo: (form.elements.namedItem("cargo") as HTMLInputElement).value,
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (!file) {
      setErrors({ archivo: "Adjunta tu hoja de vida (PDF o Word)" });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors({ archivo: "El archivo no debe superar 10 MB" });
      return;
    }

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors({ archivo: "Solo PDF o Word" });
      return;
    }

    setStatus("sending");

    const supabase = createClient();
    const safeName = file.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `${Date.now()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from("cvs")
      .upload(`public/${filePath}`, file);

    if (uploadError) {
      setStatus("error");
      return;
    }

    const { error: insertError } = await supabase.from("postulaciones").insert([
      {
        ...result.data,
        archivo: filePath,
        created_at: new Date().toISOString(),
      },
    ]);

    if (insertError) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
    setFile(null);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle size={48} className="text-turquoise" />
        <p className="text-lg font-semibold text-petroleum">
          Postulacion recibida
        </p>
        <p className="text-sm text-charcoal/60">
          Revisaremos tu hoja de vida y te contactaremos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nombre completo"
          name="nombre"
          placeholder="Tu nombre"
          error={errors.nombre}
        />
        <Field
          label="Correo electronico"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          error={errors.email}
        />
        <Field
          label="Telefono"
          name="telefono"
          type="tel"
          placeholder="300 123 4567"
          error={errors.telefono}
        />
        <Field
          label="Cargo de interes"
          name="cargo"
          placeholder="Ej: Auxiliar administrativo"
          error={errors.cargo}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal/80 mb-1.5">
          Hoja de vida (PDF o Word)
        </label>
        <div className="relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-dashed border-stone/80 bg-white/50 text-sm text-charcoal/50 hover:border-turquoise/50 transition-colors">
            <Upload size={18} className="text-turquoise" />
            {file ? (
              <span className="flex items-center gap-2 text-charcoal/80">
                <FileText size={16} />
                {file.name}
              </span>
            ) : (
              "Selecciona tu hoja de vida"
            )}
          </div>
        </div>
        {errors.archivo && (
          <p className="text-xs text-red-500 mt-1">{errors.archivo}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-turquoise text-white font-medium text-sm hover:bg-turquoise-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar postulacion"}
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          Error al enviar. Intenta de nuevo.
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal/80 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-stone/80 bg-white text-sm placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-turquoise/40 focus:border-turquoise transition-all"
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
