import type React from "react"
import type { Metadata } from "next"
// import { Libre_Barcode_39, El_Messiri } from "next/font/google"
import "./globals.css"
import "@splidejs/react-splide/css";
import ThemeProv from "@/context/ThemeProv"
import allLinks from "@/lib/links.json"
import allArticles from "@/lib/articles.json"

// const inter = Libre_Barcode_39({ subsets: ["latin"], weight: "400" })
// const elmessiri = El_Messiri({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
  description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
  robots: "index,follow",
  generator: 'mamdouh.mountain-egy.site',
  keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, أبو يوسف, صباغ الكويت - 50713199 - صباغ شاطر ورخيص , أفضل صباغ في الكويت, الكويت, الاصباغ, الدهان, الصباغ",
  openGraph: {
    type: "article",
    authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
    locale: "ar_AR",
    url: "https://fanalsabaghkuwait.com",
    title: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
    description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    images: [
      {
        url: "https://fanalsabaghkuwait.com/logo-dark.webp",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
    section: "خدمات الأصباغ",
    publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
    modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
    alternateLocale: "ar"
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
    description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    images: "https://fanalsabaghkuwait.com/logo-dark.webp",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
    url: "https://fanalsabaghkuwait.com",
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199"],
  alternates: {
    canonical: "https://fanalsabaghkuwait.com", // Canonical URL for SEO purposes
    languages: {
      "ar": "https://fanalsabaghkuwait.com", // If you have an Arabic language version
    },
  },
  applicationName: "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
  creator: "mamdouh mohammed",
  category: "خدمات الأصباغ",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ar" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://fanalsabaghkuwait.com/",
                    "url": "https://fanalsabaghkuwait.com/",
                    "name": "صباغ الكويت - صباغ شاطر ورخيص - أبو يوسف 50713199",
                    "isPartOf": { "@id": "https://fanalsabaghkuwait.com#website" },
                    "primaryImageOfPage": { "@id": "https://fanalsabaghkuwait.com/#primaryimage" },
                    "image": { "@id": "https://fanalsabaghkuwait.com/#primaryimage" },
                    "thumbnailUrl": "https://fanalsabaghkuwait.com/logo-dark.webp",
                    "datePublished": "2020-12-29T13:47:49+00:00", "dateModified": "2024-10-01T07:59:36+00:00",
                    "description": "صباغ الكويت , هل تريد رقم صباغ شاطر ورخيص بالكويت ؟ نوفر لك افضل تصميمات وديكورات منزليه احترافيه فني تركيب ورق جدران ممتاز اتصل الان",
                    "breadcrumb": { "@id": "https://fanalsabaghkuwait.com/#breadcrumb" },
                    "inLanguage": "ar",
                    "potentialAction": [{ "@type": "ReadAction", "target": ["https://fanalsabaghkuwait.com/"] }]
                  },
                  {
                    "@type": "ImageObject",
                    "inLanguage": "ar",
                    "@id": "https://fanalsabaghkuwait.com/#primaryimage",
                    "url": "https://fanalsabaghkuwait.com/logo-dark.webp",
                    "contentUrl": "https://fanalsabaghkuwait.com/logo-dark.webp",
                    "width": 600,
                    "height": 450,
                    "caption": "صباغ الكويت"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": "https://fanalsabaghkuwait.com/#breadcrumb",
                    "itemListElement": [
                      ...allLinks.map((item, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.title,
                        "item": "https://fanalsabaghkuwait.com/abo-yousef/" + item.href,
                      })),
                      ...allArticles.map((item, index) => ({
                        "@type": "ListItem",
                        "position": index + 101,
                        "name": item.title,
                        "item": "https://fanalsabaghkuwait.com/articles/" + item.slug,
                      })),
                      {
                        "@type": "ListItem",
                        "position": 100,
                        "name": "المقالات",
                        "item": "https://fanalsabaghkuwait.com/articles",
                      },
                      {
                        "@type": "ListItem",
                        "position": 110,
                        "name": "خدمات صباغ الكويت",
                        "item": "https://fanalsabaghkuwait.com/services",
                      },
                      {
                        "@type": "ListItem",
                        "position": 110,
                        "name": "تواصل مع صباغ الكويت",
                        "item": "https://fanalsabaghkuwait.com/contact",
                      },
                      {
                        "@type": "ListItem",
                        "position": 110,
                        "name": "معلومات عن صباغ الكويت",
                        "item": "https://fanalsabaghkuwait.com/about-us",
                      },
                    ],
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://fanalsabaghkuwait.com/#website",
                    "url": "https://fanalsabaghkuwait.com/",
                    "name": "صباغ الكويت",
                    "description": "صباغ الكويت 50713199 تركيب ورق جدران اصباغ الكوت صباغ شاطر ورخيص",
                    "potentialAction": [
                      {
                        "@type": "SearchAction",
                        "target": {
                          "@type": "EntryPoint",
                          "urlTemplate": "https://fanalsabaghkuwait.com/{search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                      }
                    ]
                    , "inLanguage": "ar"
                  }
                ]
              },
            )
          }}
        />
      </head>
      <body>
      {/* <body className={`${inter.className} ${elmessiri.className}`}> */}
        <ThemeProv>
          {children}
        </ThemeProv>
      </body>
    </html>
  )
}
