import React from 'react'

const AboutUs = () => {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container mx-auto px-4 text-center md:text-start">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    صباغ الكويت ✔️ شاطر ورخيص - أبو يوسف 50713199
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    إذا كنت تبحث عن <strong>صباغ الكويت</strong> يتميز بالخبرة العالية والأسعار المناسبة،
                    فأنت في المكان الصحيح! أبو يوسف يقدم لك خدمات الدهان والاصباغ الداخلية والخارجية
                    باستخدام أجود أنواع الدهانات الحديثة مع ضمان الجودة والالتزام بالمواعيد.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>تنفيذ جميع أعمال الدهان بجودة عالية.</li>
                    <li>أحدث التصاميم العصرية والكلاسيكية.</li>
                    <li>خدمات سريعة بأسعار تنافسية.</li>
                    <li>استخدام أصباغ ودهانات صديقة للبيئة.</li>
                </ul>
                <a href="tel:+96550713199"
                    className="
                    inline-block
                     bg-secondary
                      text-white
                       font-bold 
                       py-2
                        px-6
                        hover:bg-secondary/90
                         rounded-lg  transition">
                    اتصل الآن: 50713199
                </a>
            </div>
        </section>
    )
}

export default AboutUs