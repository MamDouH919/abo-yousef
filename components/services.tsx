import { CheckCircle, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <section className="py-16 bg-primary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-secondary">
                            الصباغ الأمهر في الكويت
                        </h2>
                        <p className="text-lg mb-6">
                            نقدم مجموعة واسعة من الأصباغ الحديثة، بما في ذلك الأصباغ الداخلية والخارجية، الصبغ المطفي واللماع، بالإضافة إلى الصبغ بدون رائحة والصبغ الإيطالي المميز.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>بديل خشب</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>بديل رخام</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>ورق جدران</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>بديل الشيبورد</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>جميع انواع الأصباغ</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-6 h-6 ml-2 text-yellow-400" />
                                <span>جبسون بورد بيكيه</span>
                            </div>

                        </div>
                    </div>

                    <div className="relative w-full aspect-[2/1]">
                        <Image
                            src="/images/bg2.webp"
                            alt="خدمات الأصباغ"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services