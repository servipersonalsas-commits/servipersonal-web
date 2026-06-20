# AGENTS.md - Servipersonal Web

## Project context

Portfolio website for Servipersonal de Colombia S.A.S., a Colombian temporary staffing and HR management company. The site serves as a digital portfolio and lead generation tool.

## Tech stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 with custom theme tokens
- Supabase (free tier) for contact forms, CV storage and admin auth
- Zod v4 for form validation
- Lucide React for icons
- Playfair Display (headings) + Inter (body) via next/font/google

## Brand colors

- turquoise: `#2BAFA0`
- turquoise-light: `#4DC0B3`
- turquoise-dark: `#1E8C80`
- petroleum: `#1B4C56`
- petroleum-light: `#2A5F6B`
- petroleum-dark: `#123A42`
- cream: `#F8F6F3`
- stone: `#E8E4DF`
- charcoal: `#2D2D2D`

## Architecture

Public pages are static server components. Forms are client components that use Supabase browser client - anonymous users can submit forms and upload CVs.

Admin panel at `/admin` requires authentication: protected by `proxy.ts` (Next.js 16 renamed `middleware` to `proxy`) which refreshes the session and redirects unauthenticated users. The dashboard page additionally enforces an email whitelist (`servipersonalsas@gmail.com`) and queries Supabase in parallel for performance.

Row Level Security is enabled on `contactos`, `postulaciones`, and the `cvs` storage bucket: anonymous users can insert, authenticated users can select and delete. Full security posture and pending hardening items are documented in `SECURITY.md`.

Key conventions:
- No comments in code unless necessary
- Design aims to avoid AI-generated appearance
- Spanish content throughout
- Mobile-first responsive
- Docs (`SPEC.md`, `README.md`, `SECURITY.md`, `HANDOVER.md`, this file, `CLAUDE.md`) are gitignored

## Pages

| Route | Type | Description |
|---|---|---|
| `/` | Server (static) | Hero + services grid + about summary + advantages + CTA |
| `/quienes-somos` | Server (static) | Mission, vision, values |
| `/servicios` | Server (static) | 7 services organized in 3 groups (administrative, talent, wellbeing) |
| `/ventajas` | Server (static) | 4 detailed advantages |
| `/contacto` | Server (static) | Contact info + validated form |
| `/trabaja-con-nosotros` | Server (static) | Job application form with CV upload |
| `/admin` | Server (dynamic) | Dashboard with postulaciones and contactos tables, date filter, delete actions |
| `/admin/login` | Server (static) | Login form (email + password) |
| `/auth/logout` | Route handler (POST) | Sign out and redirect to login |

## Supabase setup needed

Run these SQL statements in Supabase SQL editor:

```sql
-- Contact form submissions
create table contactos (
  id bigint generated always as identity primary key,
  nombre text not null,
  empresa text not null,
  email text not null,
  telefono text not null,
  mensaje text not null,
  created_at timestamptz default now()
);

alter table contactos enable row level security;
create policy "Anyone can insert contactos" on contactos
  for insert to anon with check (true);

-- Job applications
create table postulaciones (
  id bigint generated always as identity primary key,
  nombre text not null,
  email text not null,
  telefono text not null,
  cargo text not null,
  archivo text not null,
  created_at timestamptz default now()
);

alter table postulaciones enable row level security;
create policy "Anyone can insert postulaciones" on postulaciones
  for insert to anon with check (true);

-- Admin read and delete access
create policy "admin_select_contactos" on contactos
  for select to authenticated using (true);
create policy "admin_delete_contactos" on contactos
  for delete to authenticated using (true);
create policy "admin_select_postulaciones" on postulaciones
  for select to authenticated using (true);
create policy "admin_delete_postulaciones" on postulaciones
  for delete to authenticated using (true);
```

Create a storage bucket called `cvs` with RLS:
```sql
insert into storage.buckets (id, name, public) values ('cvs', 'cvs', true);

create policy "Anyone can upload CVs" on storage.objects
  for insert to anon with check (bucket_id = 'cvs');

create policy "Authenticated can delete CVs" on storage.objects
  for delete to authenticated using (bucket_id = 'cvs');
```

Full policy audit and recommended hardening steps are in `SECURITY.md`.