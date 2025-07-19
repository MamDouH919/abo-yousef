import Portfolio from '@/components/portfolio'
import React from 'react'
import portfolio from '@/lib/portfolio.json'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold mb-4 text-secondary">
                            نقدم خدمات صباغة مميزة في الكويت متميزون جداً
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