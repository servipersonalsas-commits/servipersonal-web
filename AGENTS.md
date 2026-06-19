# AGENTS.md - Servipersonal Web

## Project context

Portfolio website for Servipersonal de Colombia S.A.S., a Colombian temporary staffing and HR management company. The site serves as a digital portfolio and lead generation tool.

## Tech stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 with custom theme tokens
- Supabase (free tier) for contact forms and CV storage
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

Admin panel at `/admin` requires authentication: protected by middleware (session refresh + redirect) and server-side email whitelist check. Only `servipersonalsas@gmail.com` can access.

Key conventions:
- No comments in code unless necessary
- Design aims to avoid AI-generated appearance
- Spanish content throughout
- Mobile-first responsive
- Docs (SPEC.md, README.md, this file, CLAUDE.md) are gitignored

## Pages

| Route | Type | Description |
|---|---|---|
| `/` | Server | Hero + services grid + about summary + advantages + CTA |
| `/quienes-somos` | Server | Mission, vision, values |
| `/servicios` | Server | 7 services with icons |
| `/ventajas` | Server | 4 detailed advantages |
| `/contacto` | Server | Contact info + validated form |
| `/trabaja-con-nosotros` | Server | Job application form with CV upload |

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
```

Create a storage bucket called `cvs` with RLS:
```sql
insert into storage.buckets (id, name, public) values ('cvs', 'cvs', true);

create policy "Anyone can upload CVs" on storage.objects
  for insert to anon with check (bucket_id = 'cvs');
```
