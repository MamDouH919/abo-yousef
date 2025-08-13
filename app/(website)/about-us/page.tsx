import Cta from '@/components/cta'
import Services from '@/components/services'
import Stats from '@/components/stats'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
    description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    robots: "index,follow",
    generator: 'mamdouh.mountain-egy.site',
    keywords: "صباغ الكويت, صباغ الكويت شاطر, صباغ الكويت رخيص, صباغ الكويت داخلي وخارجي, صباغ الكويت حديث, صباغ الكويت بأفضل الأسعار, صباغ الكويت أبو يوسف, صباغ الكويت 50713199, أفضل صباغ الكويت, صباغ في الكويت, صباغ ودهان الكويت, صباغ الكويت المحترف, صباغ الكويت منازل, صباغ الكويت تجاري",
    openGraph: {
        type: "article",
        authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
        locale: "ar_AR",
        url: "https://fanalsabaghkuwait.com",
        title: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
        description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: [
            {
                url: "https://fanalsabaghkuwait.com/logo-dark.webp",
                width: 1200,
                height: 630,
                alt: "صباغ الكويت",
            },
        ],
        siteName: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
        section: "خدمات الأصباغ",
        publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
        modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
        alternateLocale: "ar"
    },
    twitter: {
        card: "summary_large_image",
        title: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
        description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: "https://fanalsabaghkuwait.com/logo-dark.webp",
    },
    manifest: "/manifest.json",
    authors: {
        name: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
        url: "https://fanalsabaghkuwait.com",
    },
    bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199"],
    alternates: {
        canonical: "https://fanalsabaghkuwait.com", // Canonical URL for SEO purposes
        languages: {
            "ar": "https://fanalsabaghkuwait.com", // If you have an Arabic language version
        },
    },
    applicationName: "صباغ الكويت - أبو يوسف - معلومات عن صباغ الكويت - 50713199",
    creator: "mamdouh mohammed",
    category: "خدمات الأصباغ",
};

const Page = () => {
    return (
        <>
            <Services />
            <Stats />
            <Cta />
        </>
    )
}

export default Page