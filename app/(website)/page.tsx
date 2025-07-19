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
