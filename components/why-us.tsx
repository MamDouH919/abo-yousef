import { Award, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full aspect-[2/1]">
                        <Image
                            src="/images/why-us.webp"
                            alt="خدمات الأصباغ"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-secondary">ما يميزنا عن الآخرين؟</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-secondary text-primary rounded-full p-2 ml-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">فريق محترف</h3>
                                    <p className="text-gray-600">فريق من أمهر الصباغين المحترفين مع خبرة تزيد عن 15 عاماً</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-secondary text-primary rounded-full p-2 ml-4">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">جودة مضمونة</h3>
                                    <p className="text-gray-600">نستخدم أفضل المواد والأدوات لضمان النتائج المثالية</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-secondary text-primary rounded-full p-2 ml-4">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">سرعة في التنفيذ</h3>
                                    <p className="text-gray-600">نلتزم بالمواعيد المحددة ونقدم خدمة سريعة وفعالة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs