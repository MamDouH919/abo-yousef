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
                        { id: 1, title: "صباغة فيلا فاخرة", description: "مشروع صباغة فيلا بألوان عصرية", isMain: true },
                        { id: 2, title: "مكتب تجاري", description: "صباغة مكتب بتصميم احترافي", isMain: false },
                        { id: 3, title: "شقة سكنية", description: "تجديد شقة بألوان هادئة", isMain: false },
                        { id: 4, title: "مطعم عصري", description: "صباغة مطعم بديكور مميز", isMain: true },
                        { id: 5, title: "صالة أفراح", description: "صباغة صالة بألوان ذهبية", isMain: false },
                        { id: 6, title: "منزل عائلي", description: "تجديد منزل كامل", isMain: false },
                        { id: 7, title: "مركز تجاري", description: "صباغة مجمع تجاري", isMain: true },
                        { id: 8, title: "مدرسة خاصة", description: "صباغة مدرسة بألوان مبهجة", isMain: false },
                    ].map((item) => (
                        <SplideSlide key={item.id}>
                            <Card
                                className={`overflow-hidden hover:shadow-lg transition-all duration-300`}
                            >
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <Image
                                            src={`/placeholder.svg?height=650&width=350`}
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