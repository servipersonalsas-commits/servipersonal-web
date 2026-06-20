"use client";

import { useState, type FormEvent, useId } from "react";
import { createClient } from "@/lib/supabase/client";
import { z } from "zod";
import { Upload, CheckCircle, AlertCircle, FileText } from "lucide-react";
import FormField from "@/components/FormField";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  telefono: z
    .string()
    .min(7, "Teléfono muy corto")
    .regex(/^[0-9\s\+\-]+$/, "Solo números"),
  cargo: z.string().min(2, "Indica el cargo de interés"),
});

type Status = "idle" | "sending" | "success" | "error";

export default function WorkWithUsForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);
  const fileInputId = useId();
  const fileErrorId = `${fileInputId}-error`;

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
      .upload(filePath, file);

    if (uploadError) {
      setStatus("error");
      return;
    }

    const { error: insertError } = await supabase.from("postulaciones").insert([
      {
        ...result.data,
        archivo: filePath,
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
          Postulación recibida
        </p>
        <p className="text-sm text-charcoal/60">
          Revisaremos tu hoja de vida y te contactaremos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          id="wwu-nombre"
          label="Nombre completo"
          name="nombre"
          placeholder="Tu nombre"
          error={errors.nombre}
        />
        <FormField
          id="wwu-email"
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          error={errors.email}
        />
        <FormField
          id="wwu-telefono"
          label="Teléfono"
          name="telefono"
          type="tel"
          placeholder="300 123 4567"
          error={errors.telefono}
        />
        <FormField
          id="wwu-cargo"
          label="Cargo de interés"
          name="cargo"
          placeholder="Ej: Auxiliar administrativo"
          error={errors.cargo}
        />
      </div>

      <div>
        <label
          htmlFor={fileInputId}
          className="block text-sm font-medium text-charcoal/80 mb-1.5"
        >
          Hoja de vida (PDF o Word)
        </label>
        <div className="relative">
          <input
            id={fileInputId}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            aria-invalid={errors.archivo ? true : undefined}
            aria-describedby={errors.archivo ? fileErrorId : undefined}
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
          <p id={fileErrorId} className="text-xs text-red-500 mt-1">
            {errors.archivo}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-turquoise text-white font-medium text-sm hover:bg-turquoise-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar postulación"}
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm" role="alert">
          <AlertCircle size={16} />
          Error al enviar. Intenta de nuevo.
        </div>
      )}
    </form>
  );
}
