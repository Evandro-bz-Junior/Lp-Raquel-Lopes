export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://raquellopes.vercel.app/sitemap.xml",
    };
}
