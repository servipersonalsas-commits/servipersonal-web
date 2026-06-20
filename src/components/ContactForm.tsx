"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import FormField from "@/components/FormField";

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
    const { error } = await supabase.from("contactos").insert([result.data]);

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
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          id="contact-nombre"
          label="Nombre"
          name="nombre"
          placeholder="Tu nombre"
          error={errors.nombre}
        />
        <FormField
          id="contact-empresa"
          label="Empresa / Entidad"
          name="empresa"
          placeholder="Nombre de la entidad"
          error={errors.empresa}
        />
        <FormField
          id="contact-email"
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="correo@entidad.gov.co"
          error={errors.email}
        />
        <FormField
          id="contact-telefono"
          label="Teléfono"
          name="telefono"
          type="tel"
          placeholder="300 123 4567"
          error={errors.telefono}
        />
      </div>

      <FormField
        id="contact-mensaje"
        label="Mensaje"
        name="mensaje"
        placeholder="Escriba su mensaje aquí..."
        rows={4}
        multiline
        error={errors.mensaje}
      />

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
        <div className="flex items-center gap-2 text-red-500 text-sm" role="alert">
          <AlertCircle size={16} />
          Error al enviar. Intenta de nuevo.
        </div>
      )}
    </form>
  );
}
