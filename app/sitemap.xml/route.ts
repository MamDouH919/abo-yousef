// app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = "https://fanalsabaghkuwait.com";
    const services = [
        "aspagh",
        "sabaagh-rakhis",
        "sabaagh-shatir",
        "muealim-sabagh",
        "sabaagh-alkuayt",
        "aisbgh-alkuayt",
        "sabaagh-shatir-bi-alkuayt",
        "muealim-sabaagh-bi-alkuayt",
        "faniy-sabagh",
        "sabaagh-mumtaz-bi-alkuayt",
        "dikurat-sabagh-lilkuayt",
        "manazil-sabaagh-bi-alkuayt",
        "shaqaq-sabaagh-bi-alkuayt",
        "sabaagh-buyut-aitfal",
        "sabaagh-rusumat-aitfal",
        "sabaagh-rakhisat-bi-alkuayt",
        "dihanat-alkuayt",
        "tarkib-waraq-judran",
        "asbagh-abwab-khashabia",
        "muealim-jabs-burd",
        "sabaagh-alsaalimia",
        "sabaagh-sabah-alsaalim",
        "sabaagh-hawalli",
        "sabaagh-jaber-alahmad",
        "sabaagh-khaitan",
        "sabaagh-alfarwaniyah",
        "sabaagh-aljabriya",
        "sabaagh-alshaab",
        "sabaagh-bayan",
        "sabaagh-janoub-alsura",
        "sabaagh-mubarak",
        "sabaagh-mishref",
        "sabaagh-alzahraa",
        "sabaagh-alsiddiq",
        "sabaagh-hateen",
        "sabaagh-salwa",
        "sabaagh-alshuhadaa",
        "sabaagh-al-salam",
        "sabaagh-al-masila",
        "sabaagh-almasayel",
        "sabaagh-abu-alhasania",
        "sabaagh-subhan",
        "sabaagh-abu-ftaira",
        "sabaagh-al-fintas",
        "sabaagh-mubarak-al-kabeer",
        "sabaagh-alaqeela",
        "sabaagh-alfntas",
        "sabaagh-alraqa",
        "sabaagh-abu-halifa",
        "sabaagh-alsabahiya",
        "sabaagh-almanqaf",
        "sabaagh-almahboula",
        "sabaagh-al-ahmadi",
        "sabaagh-al-khiran",
        "sabaagh-alfhahil",
        "sabaagh-alwafra",
        "sabaagh-jaber-alali",
        "sabaagh-fahad-alahmad",
        "sabaagh-aldaiya",
        "sabaagh-aldasma",
        "sabaagh-aldohah",
        "sabaagh-alkhaldiya",
        "sabaagh-alrawdah",
        "sabaagh-alrai",
        "sabaagh-alshuwaykh",
        "sabaagh-asharq",
        "sabaagh-alshamiya",
        "sabaagh-alsurra",
        "sabaagh-alqadesiya",
        "sabaagh-alqurawan",
        "sabaagh-alfaihaa",
        "sabaagh-aladiliya",
        "sabaagh-alsulaybikhat",
        "sabaagh-kaifan",
        "sabaagh-qurtoba",
        "sabaagh-ghranata",
        "sabaagh-abdullah-al-salim",
        "sabaagh-dasman",
        "sabaagh-bneid-alqar",
        "sabaagh-alnahda",
        "sabaagh-alnuzha",
        "sabaagh-almansouriya",
        "sabaagh-mantiqa-al-ashira",
        "sabaagh-alandalus",
        "sabaagh-alqrean",
        "sabaagh-alkswor",
        "sabaagh-saad-alabdullah",
        "sabaagh-aljahraa",
        "sabaagh-abdullah-mubarak",
        "sabaagh-gharb-abdullah",
        "sabaagh-janoub-abdullah",
        "sabaagh-alaardiya",
        "sabaagh-alfardus",
        "sabaagh-subah-alanasir",
        "sabaagh-alromanisya",
    ]

    const articles = [
        "how-to-choose-best-painter-kuwait",
        "types-of-paint-kuwait",
        "painting-tips-kuwait",
        "villa-painter-kuwait",
        "exterior-paint-kuwait",
        "why-choose-sabagh-kuwait",
    ]

    // Static pages
    const staticPages = [
        "",
        "about-us",
        "services",
        "contact",
    ];

    // Build all URLs
    const urls: string[] = [
        ...staticPages.map((slug) => `${baseUrl}/${slug}`),
        ...services.map((slug) => `${baseUrl}/abo-yousef/${slug}`),
        ...articles.map((slug) => `${baseUrl}/articles/${slug}`),

    ];

    // Create sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
            .map(
                (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
            )
            .join("")}
  </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
