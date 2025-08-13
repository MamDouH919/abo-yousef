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
const SubHero = dynamic(() => import('@/components/sub-hero'))
const AboutUs = dynamic(() => import('@/components/about'))

export default function Home() {
    return (
        <>
            {/* Hero Slider */}
            <HeroSlider />
            
            <SubHero />


            {/* Services Section */}
            <Services />

            <AboutUs />
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
