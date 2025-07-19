import React from 'react'

const Stats = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                        <div className="text-gray-600">مشروع مكتمل</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-secondary mb-2">25+</div>
                        <div className="text-gray-600">سنة خبرة</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                        <div className="text-gray-600">رضا العملاء</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                        <div className="text-gray-600">خدمة العملاء</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats