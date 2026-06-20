# Servipersonal Web

Sitio web portafolio corporativo para Servipersonal de Colombia S.A.S., empresa colombiana de gestion de personal temporal y servicios de recursos humanos. El sitio funciona como portafolio digital y herramienta de generacion de contactos comerciales.

Sitio en produccion: https://servipersonal-web.vercel.app

## Stack

- Next.js 16 (App Router) con TypeScript
- Tailwind CSS v4
- Supabase (autenticacion, base de datos y almacenamiento de archivos)
- Zod v4 para validacion de formularios
- Lucide React para iconos
- Playfair Display (titulos) e Inter (cuerpo de texto), via `next/font/google`

## Estructura del sitio

| Ruta | Descripcion | Acceso |
|---|---|---|
| `/` | Inicio | Publico |
| `/quienes-somos` | Quienes somos | Publico |
| `/servicios` | Servicios (7 servicios en 3 grupos) | Publico |
| `/ventajas` | Ventajas (4 pilares) | Publico |
| `/contacto` | Contacto (formulario validado) | Publico |
| `/trabaja-con-nosotros` | Trabaja con nosotros (postulacion con carga de CV) | Publico |
| `/admin` | Panel administrativo | Restringido (whitelist) |
| `/admin/login` | Login del panel | Publico |

## Requisitos previos

- Node.js 20 o superior
- Una cuenta y proyecto en Supabase

## Instalacion

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env.local` en la raiz del proyecto con:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<tu-proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu-anon-key>
```

Estas credenciales se obtienen en el panel de Supabase, dentro de la configuracion del proyecto (`Project Settings > API`). Solo se expone la clave anonima (`anon key`); la clave de servicio (`service_role`) nunca debe usarse en variables `NEXT_PUBLIC_*`.

## Desarrollo

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Build de produccion

```bash
npm run build
npm run start
```

## Base de datos y almacenamiento

El proyecto requiere las tablas `contactos` y `postulaciones`, ademas del bucket de almacenamiento `cvs`, con las politicas de seguridad a nivel de fila (RLS) correspondientes. El detalle de los esquemas y las sentencias SQL de configuracion estan en `AGENTS.md`.

## Panel administrativo

Disponible en `/admin`. Requiere autenticacion mediante Supabase Auth. La proteccion se aplica en dos capas:

1. **`src/proxy.ts`**: en cada peticion a `/admin/*` (excepto `/admin/login`) refresca la sesion y redirige al login si no hay sesion valida.
2. **Whitelist de correo**: `src/app/admin/page.tsx` y `src/app/admin/actions/index.ts` verifican que `user.email === "servipersonalsas@gmail.com"`.

Funcionalidades del panel:

- Listar postulaciones (con enlace de descarga del CV) y mensajes de contacto.
- Filtrar por rango de fechas (desde/hasta).
- Ordenar por fecha (mas reciente / mas antiguo primero).
- Eliminar registros (la eliminacion de una postulacion tambien borra el CV del bucket).
- Cerrar sesion (boton "Salir").

## Accesos del proyecto en produccion

| Servicio | Recurso |
|---|---|
| GitHub | `github.com/servipersonalsas-commits/servipersonal-web` |
| Vercel | Proyecto `servipersonal-web` (cuenta `servipersonalsas-commits`) |
| Supabase | Proyecto `Servipersonal SaS` (ref `kyqiirscnxqkigsbvyyx`) |
| Admin | `servipersonalsas@gmail.com` (entregada al cliente por canal seguro) |

## Documentacion adicional

- `SPEC.md` — especificacion funcional del sitio: paginas, componentes y esquema de datos.
- `AGENTS.md` — contexto del proyecto, convenciones de codigo y configuracion de Supabase.
- `SECURITY.md` — estado de seguridad, controles implementados y mejoras pendientes.
- `HANDOVER.md` — plan de entrega del proyecto y transicion a planes de pago.

## Despliegue

El proyecto esta configurado para desplegarse en Vercel, con integracion continua desde el repositorio de GitHub. Cada push a la rama `master` genera un deploy automatico.