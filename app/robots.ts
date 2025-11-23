import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://cybertrustinfo.vercel.app/sitemap.xml", // Remplacez par votre domaine final
  };
}

