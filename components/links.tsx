"use client"
import Link from 'next/link';
import React from 'react'
import { Badge } from './ui/badge';

const links = [
    {
        id: 1,
        title: "اصباغ",
        href: "/aspagh",
    },
    {
        id: 2,
        title: "صباغ رخيص",
        href: "/sabaagh-rakhis",
    },
    {
        id: 3,
        title: "صباغ شاطر",
        href: "/sabaagh-shatir",
    },
    {
        id: 4,
        title: "معلم صباغ",
        href: "/muealim-sabagh",
    },
    {
        id: 5,
        title: "صباغ الكويت",
        href: "/sabaagh-alkuayt",
    },
    {
        id: 6,
        title: "اصباغ الكويت",
        href: "/aisbgh-alkuayt",
    },
    {
        id: 7,
        title: "صباغ شاطر بالكويت",
        href: "/sabaagh-shatir-bi-alkuayt",
    },
    {
        id: 8,
        title: "معلم صباغ في الكويت",
        href: "/muealim-sabaagh-bi-alkuayt",
    },
    {
        id: 9,
        title: "فني صباغ الكويت",
        href: "/faniy-sabagh",
    },
    {
        id: 10,
        title: "صباغ ممتاز بالكويت",
        href: "/sabaagh-mumtaz-bi-alkuayt",
    },
    {
        id: 11,
        title: "صباغ ديكورات بالكويت",
        href: "/dikurat-sabagh-lilkuayt",
    },
    {
        id: 12,
        title: "صباغ منازل بالكويت",
        href: "/manazil-sabaagh-bi-alkuayt",
    },
    {
        id: 13,
        title: "صباغ شقق بالكويت",
        href: "/shaqaq-sabaagh-bi-alkuayt",
    },
    {
        id: 14,
        title: "صباغ بيوت اطفال",
        href: "/sabaagh-buyut-aitfal",
    },
    {
        id: 15,
        title: "صباغ رسومات اطفال",
        href: "sabaagh-rusumat-aitfal",
    },
    {
        id: 16,
        title: "صباغ رخيص بالكويت",
        href: "sabaagh-rakhisat-bi-alkuayt",
    },
    {
        id: 17,
        title: "دهانات الكويت",
        href: "dihanat-alkuayt",
    },
    {
        id: 18,
        title: "تركيب ورق جدران",
        href: "tarkib-waraq-judran",
    },
    {
        id: 19,
        title: "اصباغ ابواب خشب",
        href: "asbagh-abwab-khashabia",
    },
    {
        id: 20,
        title: "معلم جبس بورد",
        href: "muealim-jabs-burd",
    },

]

export const zones = [
    { id: 21, title: "صباغ السالمية", href: "sabaagh-alsaalimia" },
    { id: 22, title: "صباغ صباح السالم", href: "sabaagh-sabah-alsaalim" },
    { id: 23, title: "صباغ حولي", href: "sabaagh-hawalli" },
    { id: 24, title: "صباغ جابر الاحمد", href: "sabaagh-jaber-alahmad" },
    { id: 25, title: "صباغ خيطان", href: "sabaagh-khaitan" },
    { id: 26, title: "صباغ الفروانية", href: "sabaagh-alfarwaniyah" },
    { id: 27, title: "صباغ الجابرية", href: "sabaagh-aljabriya" },
    { id: 28, title: "صباغ الشعب", href: "sabaagh-alshaab" },
    { id: 29, title: "صباغ بيان", href: "sabaagh-bayan" },
    { id: 30, title: "صباغ جنوب السرة", href: "sabaagh-janoub-alsura" },
    { id: 31, title: "صباغ مبارك", href: "sabaagh-mubarak" },
    { id: 32, title: "صباغ مشرف", href: "sabaagh-mishref" },
    { id: 33, title: "صباغ الزهراء", href: "sabaagh-alzahraa" },
    { id: 34, title: "صباغ الصديق", href: "sabaagh-alsiddiq" },
    { id: 35, title: "صباغ حطين", href: "sabaagh-hateen" },
    { id: 36, title: "صباغ سلوي", href: "sabaagh-salwa" },
    { id: 37, title: "صباغ الشهداء", href: "sabaagh-alshuhadaa" },
    { id: 38, title: "صباغ السلام", href: "sabaagh-al-salam" },
    { id: 39, title: "صباغ المسلية", href: "sabaagh-al-masila" },
    { id: 40, title: "صباغ المسايل", href: "sabaagh-almasayel" },
    { id: 41, title: "صباغ ابو الحصاني", href: "sabaagh-abu-alhasania" },
    { id: 42, title: "صباغ صبحان", href: "sabaagh-subhan" },
    { id: 43, title: "صباغ ابو فطيرة", href: "sabaagh-abu-ftaira" },
    { id: 44, title: "صباغ الفينطيس", href: "sabaagh-al-fintas" },
    { id: 45, title: "صباغ مبارك الكبير", href: "sabaagh-mubarak-al-kabeer" },
    { id: 46, title: "صباغ العقيلة", href: "sabaagh-alaqeela" },
    { id: 47, title: "صباغ الفنطاس", href: "sabaagh-alfntas" },
    { id: 48, title: "صباغ الرقة", href: "sabaagh-alraqa" },
    { id: 49, title: "صباغ ابو حليفة", href: "sabaagh-abu-halifa" },
    { id: 50, title: "صباغ الصباحية", href: "sabaagh-alsabahiya" },
    { id: 51, title: "صباغ المنقف", href: "sabaagh-almanqaf" },
    { id: 52, title: "صباغ المهبولة", href: "sabaagh-almahboula" },
    { id: 53, title: "صباغ الاحمدي", href: "sabaagh-al-ahmadi" },
    { id: 54, title: "صباغ الخيران", href: "sabaagh-al-khiran" },
    { id: 55, title: "صباغ الفحيحيل", href: "sabaagh-alfhahil" },
    { id: 56, title: "صباغ الوفرة", href: "sabaagh-alwafra" },
    { id: 57, title: "صباغ جابر العلي", href: "sabaagh-jaber-alali" },
    { id: 58, title: "صباغ فهد الاحمد", href: "sabaagh-fahad-alahmad" },
    { id: 59, title: "صباغ الدعية", href: "sabaagh-aldaiya" },
    { id: 60, title: "صباغ الدسمة", href: "sabaagh-aldasma" },
    { id: 61, title: "صباغ الدوحة", href: "sabaagh-aldohah" },
    { id: 62, title: "صباغ الخالدية", href: "sabaagh-alkhaldiya" },
    { id: 63, title: "صباغ الروضة", href: "sabaagh-alrawdah" },
    { id: 64, title: "صباغ الري", href: "sabaagh-alrai" },
    { id: 65, title: "صباغ الشويخ", href: "sabaagh-alshuwaykh" },
    { id: 66, title: "صباغ الشرق", href: "sabaagh-asharq" },
    { id: 67, title: "صباغ الشامية", href: "sabaagh-alshamiya" },
    { id: 68, title: "صباغ السرة", href: "sabaagh-alsurra" },
    { id: 69, title: "صباغ القادسية", href: "sabaagh-alqadesiya" },
    { id: 70, title: "صباغ القروان", href: "sabaagh-alqurawan" },
    { id: 71, title: "صباغ الفيحاء", href: "sabaagh-alfaihaa" },
    { id: 72, title: "صباغ العديلية", href: "sabaagh-aladiliya" },
    { id: 73, title: "صباغ الصليبخات", href: "sabaagh-alsulaybikhat" },
    { id: 74, title: "صباغ كيفان", href: "sabaagh-kaifan" },
    { id: 75, title: "صباغ قرطبة", href: "sabaagh-qurtoba" },
    { id: 76, title: "صباغ غرناطة", href: "sabaagh-ghranata" },
    { id: 77, title: "صباغ ضاحية عبدالله السالم", href: "sabaagh-abdullah-al-salim" },
    { id: 78, title: "صباغ دسمان", href: "sabaagh-dasman" },
    { id: 79, title: "صباغ بنيد القار", href: "sabaagh-bneid-alqar" },
    { id: 80, title: "صباغ النهضة", href: "sabaagh-alnahda" },
    { id: 81, title: "صباغ النزهة", href: "sabaagh-alnuzha" },
    { id: 82, title: "صباغ المنصورية", href: "sabaagh-almansouriya" },
    { id: 83, title: "صباغ المنطقة العاشرة", href: "sabaagh-mantiqa-al-ashira" },
    { id: 84, title: "صباغ الاندلس", href: "sabaagh-alandalus" },
    { id: 85, title: "صباغ القرين", href: "sabaagh-alqrean" },
    { id: 86, title: "صباغ القصور", href: "sabaagh-alkswor" },
    { id: 87, title: "صباع سعد العبدالله", href: "sabaagh-saad-alabdullah" },
    { id: 87, title: "صباغ الجهراء", href: "sabaagh-aljahraa" },
    { id: 87, title: "صباغ عبدالله مبارك", href: "sabaagh-abdullah-mubarak" },
    { id: 87, title: "صباغ غرب عبدالله", href: "sabaagh-gharb-abdullah" },
    { id: 87, title: "صباغ جنوب عبدالله", href: "sabaagh-janoub-abdullah" },
    { id: 87, title: "صباغ العارضية", href: "sabaagh-alaardiya" },
    { id: 87, title: "صباغ الفردوس", href: "sabaagh-alfardus" },
    { id: 87, title: "صباغ صباح الناصر", href: "sabaagh-subah-alanasir" },
    { id: 87, title: "صباغ الرومانسية", href: "sabaagh-alromanisya" },
];

export const allLinks = links.concat(zones)

const Links = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">
                        صباغ الكويت
                    </h2>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {allLinks.map((element, index) => (
                        <Link key={index} title={element.title} href={`abo-yousef/${element.href}`}>
                            <Badge variant="outline" className='px-4 py-2 text-sm border-secondary'>
                                {element.title}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Links
