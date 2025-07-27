"use client"
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

import portfolio from '@/lib/portfolio.json'


const Portfolio = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">معرض أعمالنا</h2>
                    <p className="text-gray-600">شاهد بعض من أعمالنا المتميزة</p>
                </header>

                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        gap: "1rem",
                        pagination: true,
                        arrows: true,
                        direction: "rtl",
                        autoplay: true,
                        interval: 3000,
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
                    {portfolio.map((item, index) => (
                        <SplideSlide key={index}>
                            <Card
                                className={`overflow-hidden hover:shadow-lg transition-all duration-300`}
                            >
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title + " | " + "صباغ الكويت"}
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