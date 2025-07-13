import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const Blog = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">المدونة</h2>
                    <p className="text-gray-600">آخر النصائح والأخبار في عالم الصباغة</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "أفضل أنواع الدهانات للمنازل",
                            excerpt: "دليل شامل لاختيار أفضل أنواع الدهانات المناسبة لمنزلك",
                            date: "15 يناير 2024",
                        },
                        {
                            title: "نصائح للحفاظ على الدهان",
                            excerpt: "كيفية الحفاظ على جودة الدهان لأطول فترة ممكنة",
                            date: "10 يناير 2024",
                        },
                        {
                            title: "ألوان الدهانات العصرية",
                            excerpt: "أحدث صيحات ألوان الدهانات لعام 2024",
                            date: "5 يناير 2024",
                        },
                    ].map((post, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=350"
                                    alt={post.title}
                                    width={350}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <Button variant="outline" size="sm">
                                        اقرأ المزيد
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog