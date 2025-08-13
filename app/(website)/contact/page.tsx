import React from 'react'
import Image from "next/image"
import { Phone, MapPin, Clock, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
    description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
    robots: "index,follow",
    generator: 'mamdouh.mountain-egy.site',
    keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, أبو يوسف, صباغ الكويت - 50713199 - صباغ شاطر ورخيص , أفضل صباغ في الكويت, الكويت, الاصباغ, الدهان, الصباغ",
    openGraph: {
        type: "article",
        authors: ["صباغ الكويت", "https://fanalsabaghkuwait.com"],
        locale: "ar_AR",
        url: "https://fanalsabaghkuwait.com",
        title: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
        description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: [
            {
                url: "https://fanalsabaghkuwait.com/logo-dark.webp",
                width: 1200,
                height: 630,
                alt: "صباغ الكويت",
            },
        ],
        siteName: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
        section: "خدمات الأصباغ",
        publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
        modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
        alternateLocale: "ar"
    },
    twitter: {
        card: "summary_large_image",
        title: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
        description: "صباغ الكويت خدمات الأصباغ ودهانات وبيع أفضل أنواع الأصباغ في الكويت. اتصل الآن بأفضل صباغ بالكويت للحصول على تشطيب احترافي بأسعار مناسبة عبر الهاتف.",
        images: "https://fanalsabaghkuwait.com/logo-dark.webp",
    },
    manifest: "/manifest.json",
    authors: {
        name: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
        url: "https://fanalsabaghkuwait.com",
    },
    bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت", "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199"],
    alternates: {
        canonical: "https://fanalsabaghkuwait.com", // Canonical URL for SEO purposes
        languages: {
            "ar": "https://fanalsabaghkuwait.com", // If you have an Arabic language version
        },
    },
    applicationName: "صباغ الكويت - أبو يوسف - التواصل مع صباغ الكويت - 50713199",
    creator: "mamdouh mohammed",
    category: "خدمات الأصباغ",
};

const Page = () => {
    return (
        <>
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    تواصل مع <span className="text-secondary">المعلم أبو يوسف</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    نحن نتطلع إلى تقديم أفضل خدمة لكم. تواصل معنا طوال الوقت للحصول على خدمات فنية متميزة وموثوقة.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-medium">خدمة سريعة</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                                    <Star className="w-5 h-5" />
                                    <span className="font-medium">جودة عالية</span>
                                </div>
                                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-medium">متاح 24/7</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={"tel:+96550713199"}>
                                    <Button size="lg" className="text-lg px-8" variant={"secondary"}>
                                        <Phone className="w-5 h-5 ml-2" />
                                        50713199
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-full aspect-[2/1]">
                            <Image
                                src="/images/sabagh-kuwait-services.webp"
                                alt="خدمات الأصباغ في الكويت"
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & Location Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-3xl font-bold text-gray-900 mb-6">تواصل معنا</p>
                            <div className="space-y-6">
                                <Card className="p-6 bg-blue-50 border-blue-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">هاتف</p>
                                            <p className="text-2xl font-bold text-blue-600">50713199</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 bg-green-50 border-green-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">الموقع</p>
                                            <p className="text-gray-600">الكويت</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 bg-purple-50 border-purple-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">ساعات العمل</p>
                                            <p className="text-gray-600">متاح طوال الوقت</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-gray-900 mb-6">موقعنا</p>
                            <Card className="overflow-hidden">
                                <div className="aspect-video">
                                    <iframe
                                        src="https://maps.google.com/maps?q=29.376101,48.0024664&z=11&output=embed"
                                        width="100%"
                                        height="100%"

                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="موقع المعلم أبو سارة - الكويت"
                                        className="w-full h-full"
                                    />

                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page