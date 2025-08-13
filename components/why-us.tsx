import { Award, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  const features = [
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من أمهر الصباغين المحترفين مع خبرة تزيد عن 15 عاماً'
    },
    {
      icon: Award,
      title: 'جودة مضمونة',
      description: 'نستخدم أفضل المواد والأدوات لضمان النتائج المثالية'
    },
    {
      icon: Clock,
      title: 'سرعة في التنفيذ',
      description: 'نلتزم بالمواعيد المحددة ونقدم خدمة سريعة وفعالة'
    }
  ]

  return (
    <section className="py-16" aria-labelledby="whyus-title" id="whyus">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <figure className="relative w-full aspect-[2/1]">
            <Image
              src="/images/why-us.webp"
              alt="خدمات الأصباغ صباغ الكويت"
              fill
              className="rounded-lg object-cover"
              priority
            />
            <figcaption className="sr-only">
              صورة توضح خدمات الأصباغ في الكويت
            </figcaption>
          </figure>

          {/* Content */}
          <div>
            <header>
              <h2 id="whyus-title" className="text-3xl font-bold mb-6 text-secondary">
                ما يميزنا عن الآخرين؟
              </h2>
            </header>

            <ul className="space-y-6" aria-label="مميزاتنا">
              {features.map(({ icon: Icon, title, description }, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-secondary text-primary rounded-full p-2 ml-4 flex-shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-2">{title}</p>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyUs
