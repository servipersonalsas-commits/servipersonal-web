"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  empresa: z.string().min(1, "Ingresa tu empresa o entidad"),
  email: z.string().email("Correo inválido"),
  telefono: z
    .string()
    .min(7, "Teléfono muy corto")
    .regex(/^[0-9\s\+\-]+$/, "Solo números"),
  mensaje: z.string().min(10, "Escribe un mensaje de al menos 10 caracteres"),
});

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement)
        .value,
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

    setStatus("sending");

    const supabase = createClient();
    const { error } = await supabase.from("contactos").insert([
      {
        ...result.data,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle size={48} className="text-turquoise" />
        <p className="text-lg font-semibold text-petroleum">
          Mensaje enviado con éxito
        </p>
        <p className="text-sm text-charcoal/60">
          Nos pondremos en contacto pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nombre"
          name="nombre"
          placeholder="Tu nombre"
          error={errors.nombre}
        />
        <Field
          label="Empresa / Entidad"
          name="empresa"
          placeholder="Nombre de la entidad"
          error={errors.empresa}
        />
        <Field
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="correo@entidad.gov.co"
          error={errors.email}
        />
        <Field
          label="Teléfono"
          name="telefono"
          type="tel"
          placeholder="300 123 4567"
          error={errors.telefono}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal/80 mb-1.5">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Escriba su mensaje aquí..."
          className="w-full px-4 py-3 rounded-lg border border-stone/80 bg-white text-sm placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-turquoise/40 focus:border-turquoise transition-all resize-none"
        />
        {errors.mensaje && (
          <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-turquoise text-white font-medium text-sm hover:bg-turquoise-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? (
          "Enviando..."
        ) : (
          <>
            Enviar mensaje <Send size={16} />
          </>
        )}
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
