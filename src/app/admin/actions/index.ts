"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const allowedAdmins = ["servipersonalsas@gmail.com"];

async function assertAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !allowedAdmins.includes(user.email ?? "")) {
    throw new Error("No autorizado");
  }
  return supabase;
}

export async function deletePostulacion(id: number) {
  const supabase = await assertAdmin();

  const { data: row } = await supabase
    .from("postulaciones")
    .select("archivo")
    .eq("id", id)
    .single();

  if (row?.archivo) {
    await supabase.storage.from("cvs").remove([row.archivo]);
  }

  const { error } = await supabase.from("postulaciones").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
}

export async function deleteContacto(id: number) {
  const supabase = await assertAdmin();

  const { error } = await supabase.from("contactos").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
}