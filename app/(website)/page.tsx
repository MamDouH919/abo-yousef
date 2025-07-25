"use client"
import { HeroSlider } from "@/components/hero-slider"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import Portfolio from "@/components/portfolio"
import Cta from "@/components/cta"
import Stats from "@/components/stats"
import Links from "@/components/links"

export default function Home() {
    return (

        <>

            {/* Hero Slider */}
            <HeroSlider />

            <div className="py-16 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-5xl font-bold mb-6 text-secondary">
                            صباغ الكويت
                        </h1>
                        <p className="text-lg mb-6 text-center">
                            أبو يوسف تركيب ورق جدران اصباغ الكوت صباغ شاطر ورخيص
                            <br />
                            خدمات الأصباغ والدهان المتميزة
                            <br />
                            نقدم أفضل خدمات الأصباغ في الكويت
                            <br />
                            اتصل بنا الآن
                            <br />

                        </p>
                    </div>
                </div>
            </div>
            {/* Services Section */}
            <Services />

            {/* Why Choose Us */}
            <WhyUs />

            {/* Portfolio */}
            <Portfolio />

            {/* CTA Section */}
            <Cta />

            {/* Stats */}
            <Stats />

            {/* Blog Section */}

            <Links />
        </>

    )
}
