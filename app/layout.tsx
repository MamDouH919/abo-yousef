import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import allLinks from "@/lib/links.json"
import allArticles from "@/lib/articles.json"
import dynamic from "next/dynamic"

const ThemeProv = dynamic(() => import("@/context/ThemeProv"))

export const metadata: Metadata = {
  title: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
  description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
  robots: "index,follow",
  generator: "mamdouh.mountain-egy.site",
  keywords: "صباغ الكويت, صباغ الكويت شاطر, صباغ الكويت رخيص, صباغ الكويت داخلي وخارجي, صباغ الكويت حديث, صباغ الكويت بأفضل الأسعار, صباغ الكويت أبو يوسف, صباغ الكويت 50713199, أفضل صباغ الكويت, صباغ في الكويت, صباغ ودهان الكويت, صباغ الكويت المحترف, صباغ الكويت منازل, صباغ الكويت تجاري",
  openGraph: {
    type: "article",
    authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
    locale: "ar_AR",
    alternateLocale: ["en_US"], // تم الإضافة
    url: "https://fanalsabaghkuwait.com",
    title: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
    description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    images: [
      {
        url: "https://fanalsabaghkuwait.com/logo-dark.webp",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
    section: "خدمات الأصباغ",
    publishedTime: "2024-10-1T12:00:00Z",
    modifiedTime: "2024-10-10T14:00:00Z",

  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
    description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    images: "https://fanalsabaghkuwait.com/logo-dark.webp",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
    url: "https://fanalsabaghkuwait.com",
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199"],
  alternates: {
    canonical: "https://fanalsabaghkuwait.com",
    languages: {
      ar: "https://fanalsabaghkuwait.com",
    },
  },
  applicationName: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
  creator: "mamdouh mohammed",
  category: "خدمات الأصباغ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#990011" /> 
        <meta httpEquiv="content-language" content="ar" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="preload" href="/logo-dark.webp" as="image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://fanalsabaghkuwait.com/#webpage",
                  url: "https://fanalsabaghkuwait.com/",
                  name: "صباغ الكويت - شاطر ورخيص - أبو يوسف 50713199",
                  isPartOf: { "@id": "https://fanalsabaghkuwait.com/#website" },
                  primaryImageOfPage: { "@id": "https://fanalsabaghkuwait.com/#primaryimage" },
                  image: { "@id": "https://fanalsabaghkuwait.com/#primaryimage" },
                  thumbnailUrl: "https://fanalsabaghkuwait.com/logo-dark.webp",
                  datePublished: "2020-12-29T13:47:49+00:00",
                  dateModified: "2024-10-10T14:00:00+00:00",
                  description: "أفضل خدمات الأصباغ والدهانات وورق الجدران في الكويت.",
                  breadcrumb: { "@id": "https://fanalsabaghkuwait.com/#breadcrumb" },
                  inLanguage: "ar",
                  potentialAction: [{ "@type": "ReadAction", target: ["https://fanalsabaghkuwait.com/"] }]
                },
                {
                  "@type": "ImageObject",
                  inLanguage: "ar",
                  "@id": "https://fanalsabaghkuwait.com/#primaryimage",
                  url: "https://fanalsabaghkuwait.com/logo-dark.webp",
                  contentUrl: "https://fanalsabaghkuwait.com/logo-dark.webp",
                  width: 1200,
                  height: 630,
                  caption: "صباغ الكويت"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://fanalsabaghkuwait.com/#breadcrumb",
                  itemListElement: [
                    ...allLinks.map((item, index) => ({
                      "@type": "ListItem",
                      position: index + 1,
                      name: item.title,
                      item: "https://fanalsabaghkuwait.com/abo-yousef/" + item.href,
                    })),
                    ...allArticles.map((item, index) => ({
                      "@type": "ListItem",
                      position: index + 101,
                      name: item.title,
                      item: "https://fanalsabaghkuwait.com/articles/" + item.slug,
                    })),
                    {
                      "@type": "ListItem",
                      position: 100,
                      name: "المقالات",
                      item: "https://fanalsabaghkuwait.com/articles",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://fanalsabaghkuwait.com/#website",
                  url: "https://fanalsabaghkuwait.com/",
                  name: "صباغ الكويت",
                  description: "خدمات الأصباغ ودهانات عالية الجودة في الكويت.",
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://fanalsabaghkuwait.com/{search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  inLanguage: "ar"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://fanalsabaghkuwait.com/#localbusiness",
                  name: "صباغ الكويت - أبو يوسف",
                  image: "https://fanalsabaghkuwait.com/logo-dark.webp",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Kuwait City",
                    addressLocality: "Kuwait City",
                    addressCountry: "KW"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 29.3759,
                    longitude: 47.9774
                  },
                  url: "https://fanalsabaghkuwait.com",
                  telephone: "+96550713199",
                  priceRange: "KD",
                  openingHours: "Mo-Su 08:00-22:00",
                  description: "أفضل صباغ بالكويت مع خدمات الدهانات والديكورات وورق الجدران.",
                  mainEntityOfPage: { "@id": "https://fanalsabaghkuwait.com/#webpage" },
                  areaServed: { "@type": "Place", name: "Kuwait" },
                  hasPart: [
                    { "@type": "WebPageElement", name: "خدمات", url: "https://fanalsabaghkuwait.com/#services" },
                    { "@type": "WebPageElement", name: "لماذا نحن", url: "https://fanalsabaghkuwait.com/#whyus" },
                    { "@type": "WebPageElement", name: "معرض الأعمال", url: "https://fanalsabaghkuwait.com/#portfolio" },
                    { "@type": "WebPageElement", name: "إحصائيات", url: "https://fanalsabaghkuwait.com/#stats" },
                    { "@type": "WebPageElement", name: "اتصل بنا", url: "https://fanalsabaghkuwait.com/#cta" },
                    { "@type": "WebPageElement", name: "الروابط", url: "https://fanalsabaghkuwait.com/#links" },
                    { "@type": "WebPageElement", name: "الأسئلة الشائعة", url: "https://fanalsabaghkuwait.com/#faqs" },
                    { "@type": "WebPageElement", name: "المقالات", url: "https://fanalsabaghkuwait.com/#articles" }
                  ]
                },
                {
                  "@type": "Service",
                  serviceType: "خدمات الأصباغ والدهانات",
                  provider: { "@id": "https://fanalsabaghkuwait.com/#localbusiness" },
                  mainEntityOfPage: { "@id": "https://fanalsabaghkuwait.com/#webpage" },
                  areaServed: { "@type": "Place", name: "Kuwait" },
                  availableChannel: {
                    "@type": "ServiceChannel",
                    serviceLocation: { "@type": "Place", name: "Kuwait" }
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <ThemeProv>
          {children}
        </ThemeProv>
      </body>
    </html>
  )
}
