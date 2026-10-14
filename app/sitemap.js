const SITE = "https://linkinbio-vinyl.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/album", "/tur"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
