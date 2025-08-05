// import HeroSlider from "@/components/hero-slider"
// import WhyUs from "@/components/why-us"
// import Portfolio from "@/components/portfolio"
// import Cta from "@/components/cta"
// import Stats from "@/components/stats"
// import Links from "@/components/links"
// import Articles from "@/components/articles"
// import Faqs from "@/components/faqs"
import dynamic from "next/dynamic"
const Services = dynamic(() => import('@/components/services'))
const WhyUs = dynamic(() => import('@/components/why-us'))
const HeroSlider = dynamic(() => import('@/components/hero-slider'))
const Portfolio = dynamic(() => import('@/components/portfolio'))
const Cta = dynamic(() => import('@/components/cta'))
const Stats = dynamic(() => import('@/components/stats'))
const Links = dynamic(() => import('@/components/links'))
const Faqs = dynamic(() => import('@/components/faqs'))
const Articles = dynamic(() => import('@/components/articles'))

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
                                صباغ الكويت
                            </h1>
                        </header>
                        <p className="text-lg mb-6 leading-loose text-black-400 max-w-2xl min-h-[220px] font-sans">
                            <b>صباغ الكويت</b> <strong>أبو يوسف</strong> يقدم أفضل خدمات الدهانات و<span className="text-secondary">تركيب ورق الجدران</span> باحترافية عالية.
                            نستخدم <strong>أحدث دهانات الكوت</strong> ومواد أصلية بجودة ممتازة لجميع المنازل والمكاتب.
                            فريقنا يتميز بالسرعة، الدقة، والأسعار المناسبة في جميع مناطق الكويت.
                            إذا كنت تبحث عن <b>صباغ الكويت</b> الموثوق، نحن خيارك الأفضل بخبرة طويلة.
                            <strong>اتصل الآن</strong> على <a href="tel:50713199" className="underline text-secondary">50713199</a> واحصل على عرض مميز!
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
