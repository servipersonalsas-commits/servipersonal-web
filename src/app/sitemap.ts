import type { MetadataRoute } from "next";

const SITE_URL = "https://servipersonal-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/quienes-somos",
    "/servicios",
    "/ventajas",
    "/contacto",
    "/trabaja-con-nosotros",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
