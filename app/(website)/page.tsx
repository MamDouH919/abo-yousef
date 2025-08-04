import HeroSlider from "@/components/hero-slider"
import WhyUs from "@/components/why-us"
import Portfolio from "@/components/portfolio"
import Cta from "@/components/cta"
import Stats from "@/components/stats"
import Links from "@/components/links"
import Articles from "@/components/articles"
import Faqs from "@/components/faqs"
import dynamic from "next/dynamic"
const Services = dynamic(() => import('@/components/services'))

export default function Home() {
    return (
        <>
            {/* Hero Slider */}
            <HeroSlider />
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <header>
                            <h1 className="text-5xl font-bold mb-6 text-secondary font-sans">
                                صباغ الكويت - أبو يوسف
                            </h1>
                        </header>
                        <p className="text-lg mb-6 leading-loose text-black-400 max-w-2xl min-h-[220px] font-sans">
                            مرحبًا بكم في أفضل خدمات الصباغة في الكويت مع{" "}
                            <strong>أبو يوسف</strong> – خبرة واحترافية في{" "}
                            <strong>تركيب ورق الجدران</strong> و
                            <span className="text-secondary">أحدث دهانات الكوت</span>.
                            <br />
                            نُقدّم لكم صباغ شاطر، سريع، وبأسعار مناسبة لجميع المناطق.
                            <br />
                            خدماتنا تشمل جميع مناطق الكويت بجودة عالية ومواد أصلية.
                            <br />
                            <strong>اتصل الآن</strong> على{" "}
                            <a href="tel:50713199" className="underline text-secondary">
                                50713199
                            </a>{" "}
                            للحصول على أفضل عرض!
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

            {/* Articles Section */}
            <Articles />

            <Faqs />
        </>

    )
}
