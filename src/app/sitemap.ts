export default async function sitemap() {
  return [
    {
      url: "https://raquellopes.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
