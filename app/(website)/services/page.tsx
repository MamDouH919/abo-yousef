import Portfolio from '@/components/portfolio'
import React from 'react'
import portfolio from '@/lib/portfolio.json'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
    description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    robots: "index,follow",
    generator: 'mamdouh.mountain-egy.site',
    keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, أبو يوسف, صباغ الكويت - 50713199 - صباغ شاطر ورخيص , أفضل صباغ في الكويت, الكويت, الاصباغ, الدهان, الصباغ, خدمات صباغ الكويت",
    openGraph: {
        type: "article",
        authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
        locale: "ar_AR",
        url: "https://fanalsabaghkuwait.com",
        title: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
        description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: [
            {
                url: "https://fanalsabaghkuwait.com/logo-dark.webp",
                width: 1200,
                height: 630,
                alt: "صباغ الكويت",
            },
        ],
        siteName: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
        section: "خدمات الأصباغ",
        publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
        modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
        alternateLocale: "ar"
    },
    twitter: {
        card: "summary_large_image",
        title: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
        description: "خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: "https://fanalsabaghkuwait.com/logo-dark.webp",
    },
    manifest: "/manifest.json",
    authors: {
        name: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
        url: "https://fanalsabaghkuwait.com",
    },
    bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199"],
    alternates: {
        canonical: "https://fanalsabaghkuwait.com", // Canonical URL for SEO purposes
        languages: {
            "ar": "https://fanalsabaghkuwait.com", // If you have an Arabic language version
        },
    },
    applicationName: "صباغ الكويت - أبو يوسف - خدمات صباغ الكويت - 50713199",
    creator: "mamdouh mohammed",
    category: "خدمات الأصباغ",
};

const Page = () => {
    return (
        <>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold mb-4 text-secondary">
                            نقدم خدمات الأصباغ مميزة في الكويت متميزون جداً
                        </h1>
                        <p className="text-gray-600">
                            أبو يوسف الأفضل في الكويت
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        {portfolio.map((item, index) => (
                            <Card
                                className={`overflow-hidden hover:shadow-lg transition-all duration-300`}
                                key={index}
                            >
                                <CardContent className="p-0">

                                    <div className="relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={650}
                                            height={650}
                                            className={`w-full object-cover h-96`}
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="text-lg font-bold mb-2 text-secondary">
                                            {item.title}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <Portfolio />
        </>
    )
}

export default Page