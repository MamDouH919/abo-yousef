import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from 'next/image'
import { Card, CardContent } from './ui/card'








const Portfolio = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">معرض أعمالنا</h2>
                    <p className="text-gray-600">شاهد بعض من أعمالنا المتميزة</p>
                </div>

                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        gap: "1rem",
                        pagination: true,
                        arrows: true,
                        direction: "rtl",
                        breakpoints: {
                            768: {
                                perPage: 1,
                            },
                            1024: {
                                perPage: 2,
                            },
                        },
                    }}
                    className="portfolio-slider"
                >
                    {[
                        { id: 1, title: "صباغة فيلا فاخرة", image: "portfolio/port1.jpeg", isMain: true },
                        { id: 2, title: "مكتب تجاري", image: "portfolio/port2.jpeg", isMain: false },
                        { id: 3, title: "شقة سكنية", image: "portfolio/port3.jpeg", isMain: false },
                        { id: 4, title: "مطعم عصري", image: "portfolio/port4.jpeg", isMain: true },
                        { id: 5, title: "صالة أفراح", image: "portfolio/port5.jpeg", isMain: false },
                        { id: 6, title: "منزل عائلي", image: "portfolio/port6.jpeg", isMain: false },
                        { id: 7, title: "مركز تجاري", image: "portfolio/port7.jpeg", isMain: true },
                    ].map((item) => (
                        <SplideSlide key={item.id}>
                            <Card
                                className={`overflow-hidden hover:shadow-lg transition-all duration-300`}
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

                                </CardContent>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    )
}

export default Portfolio