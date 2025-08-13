import React from 'react'

const SubHero = () => {
    return (
        <section className="py-16" aria-labelledby="subhero-title">
            <div className="container mx-auto px-4">
                <header className="text-center">
                    <h1
                        id="subhero-title"
                        className="text-4xl font-bold mb-6 text-secondary"
                    >
                        صباغ الكويت ✔️ شاطر ورخيص - أبو يوسف 50713199
                    </h1>
                </header>

                <article className="max-w-2xl mx-auto text-center">
                    <p className="text-md mb-6 leading-loose text-black-400 min-h-[120px]">
                        <strong>صباغ الكويت</strong> <strong>أبو يوسف</strong> يقدم أفضل خدمات الدهانات و
                        <span className="text-secondary">تركيب ورق الجدران</span> باحترافية عالية.
                        نستخدم <strong>أحدث دهانات الكوت</strong> ومواد أصلية بجودة ممتازة لجميع المنازل
                        والمكاتب.
                    </p>

                    <p className="text-md mb-6 leading-loose text-black-400">
                        فريقنا يتميز بالسرعة، الدقة، والأسعار المناسبة في جميع مناطق الكويت.
                        إذا كنت تبحث عن <strong>صباغ الكويت</strong> الموثوق، نحن خيارك الأفضل بخبرة طويلة.
                    </p>

                    <p className="text-md leading-loose text-black-400">
                        <strong>اتصل الآن</strong> على{" "}
                        <a
                            href="tel:+96550713199"
                            className="underline text-secondary font-semibold"
                            aria-label="اتصل على الرقم 50713199"
                        >
                            50713199
                        </a>{" "}
                        واحصل على عرض مميز!
                    </p>
                </article>
            </div>
        </section>
    )
}

export default SubHero
