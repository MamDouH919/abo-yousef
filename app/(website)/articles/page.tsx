import { Container } from '@mui/material'
import React from 'react'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'
import Articles from '@/components/articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
    description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    robots: "index,follow",
    generator: 'mamdouh.mountain-egy.site',
    keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, أبو يوسف, صباغ الكويت - 50713199 - صباغ شاطر ورخيص , أفضل صباغ في الكويت, الكويت, الاصباغ, الدهان, الصباغ",
    openGraph: {
        type: "article",
        authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
        locale: "ar_AR",
        url: "https://fanalsabaghkuwait.com",
        title: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
        description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: [
            {
                url: "https://fanalsabaghkuwait.com/logo-dark.webp",
                width: 1200,
                height: 630,
                alt: "صباغ الكويت",
            },
        ],
        siteName: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
        section: "خدمات الأصباغ",
        publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
        modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
        alternateLocale: "ar"
    },
    twitter: {
        card: "summary_large_image",
        title: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
        description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: "https://fanalsabaghkuwait.com/logo-dark.webp",
    },
    manifest: "/manifest.json",
    authors: {
        name: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
        url: "https://fanalsabaghkuwait.com",
    },
    bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - أبو يوسف - 50713199 - المقالات", "أبو يوسف", "صباغ الكويت - 50713199", "المقالات", "خدمات صباغ الكويت", "تواصل مع صباغ الكويت", "معلومات عن صباغ الكويت"],
    alternates: {
        canonical: "https://fanalsabaghkuwait.com", // Canonical URL for SEO purposes
        languages: {
            "ar": "https://fanalsabaghkuwait.com", // If you have an Arabic language version
        },
    },
    applicationName: "صباغ الكويت - أبو يوسف - 50713199 - المقالات",
    creator: "mamdouh mohammed",
    category: "خدمات الأصباغ",
};

const Page = async () => {
    return (
        <>
            <Container maxWidth="lg">
                <Articles makeH1/>
            </Container>
        </>
    )
}

export default Page