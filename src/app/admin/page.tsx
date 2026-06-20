import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogOut } from "lucide-react";
import Link from "next/link";
import AdminDashboardClient from "./AdminDashboardClient";

const allowedAdmins = ["servipersonalsas@gmail.com"];

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user || !allowedAdmins.includes(userData.user.email ?? "")) {
    redirect("/admin/login");
  }

  const [postulacionesRes, contactosRes] = await Promise.all([
    supabase
      .from("postulaciones")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("contactos")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

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

      <AdminDashboardClient
        postulaciones={postulacionesRes.data ?? []}
        contactos={contactosRes.data ?? []}
      />
    </div>
  );
}