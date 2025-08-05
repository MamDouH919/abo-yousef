import React from 'react'

const SubHero = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <header>
                        <h1 className="text-4xl font-bold mb-6 text-secondary">
                            صباغ الكويت
                        </h1>
                    </header>
                    <p className="text-md mb-6 leading-loose text-black-400 max-w-2xl min-h-[220px]">
                        <b>صباغ الكويت</b> <strong>أبو يوسف</strong> يقدم أفضل خدمات الدهانات و<span className="text-secondary">تركيب ورق الجدران</span> باحترافية عالية.
                        نستخدم <strong>أحدث دهانات الكوت</strong> ومواد أصلية بجودة ممتازة لجميع المنازل والمكاتب.
                        فريقنا يتميز بالسرعة، الدقة، والأسعار المناسبة في جميع مناطق الكويت.
                        إذا كنت تبحث عن <b>صباغ الكويت</b> الموثوق، نحن خيارك الأفضل بخبرة طويلة.
                        <strong>اتصل الآن</strong> على <a href="tel:50713199" className="underline text-secondary">50713199</a> واحصل على عرض مميز!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SubHero