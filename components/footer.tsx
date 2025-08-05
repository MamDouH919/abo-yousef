import { Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = ({
    onlyFooter = false
}: {
    onlyFooter?: boolean
}) => {
    return (
        <footer className="relative">
            {/* Top Red Section */}
            {!onlyFooter && <div className="bg-secondary text-primary py-8 w-[80%] mx-auto mb-[-70px] relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Working Hours */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <Clock className="w-8 h-8 ml-3 text-yellow-400" />
                                <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-1">ساعات العمل</h3>
                            </div>
                            <p className="text-lg">كل أيام الأسبوع 24 ساعة</p>
                        </div>

                        {/* Our Locations */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <MapPin className="w-8 h-8 ml-3 text-yellow-400" />
                                <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-1">مواقعنا</h3>
                            </div>
                            <p className="text-lg text-center">كل محافظات الكويت</p>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <Phone className="w-8 h-8 ml-3 text-yellow-400" />
                                <h3 className="text-xl font-bold border-b-2 border-yellow-400 pb-1">رقم الهاتف</h3>
                            </div>
                            <p className="text-lg font-bold">50713199</p>
                        </div>
                    </div>
                </div>
            </div>}

            {/* Middle Blue Section */}
            {!onlyFooter && <div className="bg-primary py-12 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 inline-block pb-2 text-secondary pt-36">صباغ الكويت</h2>
                        <p className="text-lg leading-relaxed">
                            نقدم خدمات بمنتهى الاحترافية والدقة بدون أي خلل، حيث أن <b>صباغ الكويت</b> يقدم كافة الخدمات التي تخص
                            أحدث الطلعات والتشطيبات على أعلى مستوى. يتم إنجاز جميع المهام في وقت قياسي، حيث أن <b>صباغ شاطر بالكويت</b> يحرص
                            على تقديم خدمات أصباغ تتناسب مع مختلف العملاء الكرام. يتم تركيب جميع أنواع الأرضيات، حيث أن <b>صباغ الكويت</b>
                            يقدم لكم باقات متنوعة من الخدمات التي تعتبر مفهومة للجميع.
                        </p>
                    </div>
                </div>
            </div>}

            {/* Bottom Red Section */}
            {/* <div className="bg-secondary text-primary py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">© حقوق النشر {new Date().getFullYear()} حل الحقوق محفوظة</p>
                    <Link
                        className='underline'
                        title='creator'
                        href='https://mamdouh.mountain-egy.site/'
                        rel="noopener noreferrer" target="_blank"
                    >
                        Mamdouh Mohammed
                    </Link>
                </div>
            </div> */}
            <div className="bg-secondary text-primary py-6 border-t border-primary/20">
                <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-2 text-center md:text-left">
                    <p className="text-sm md:text-base">
                        © {new Date().getFullYear()} جميع الحقوق محفوظة
                    </p>
                    <Link
                        className="text-sm md:text-base underline underline-offset-4 hover:text-primary/80 transition-colors duration-200"
                        href="https://mamdouh.mountain-egy.site/"
                        title="Creator"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Mamdouh Mohammed
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer