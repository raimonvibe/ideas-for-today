import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ideas of What to Do Today",
    short_name: "Ideas Today",
    description:
      "Daily activity ideas with check-offs, stats, and local history.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8f6",
    theme_color: "#1a3d2e",
    icons: [
      {
        src: "/social-ideas.png",
        sizes: "312x331",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/social-ideas.png",
        sizes: "312x331",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
