import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section
      className="py-16 bg-primary"
      aria-labelledby="services-title"
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <header>
              <h2
                id="services-title"
                className="text-3xl font-bold mb-6 text-secondary"
              >
                الصباغ الافضل في الكويت
              </h2>
            </header>

            <p className="text-lg mb-6">
              <strong>صباغ الكويت</strong> يقدم مجموعة واسعة من الأصباغ الحديثة، بما في ذلك
              الأصباغ الداخلية والخارجية، الصبغ المطفي واللماع، بالإضافة إلى الصبغ بدون رائحة
              والصبغ الإيطالي المميز.
            </p>

            {/* Services List */}
            <ul className="grid grid-cols-2 gap-4" aria-label="خدمات الصباغ">
              {[
                "بديل خشب",
                "بديل رخام",
                "ورق جدران",
                "بديل الشيبورد",
                "جميع انواع الأصباغ",
                "جبسون بورد بيكيه"
              ].map((service, idx) => (
                <li key={idx} className="flex items-center">
                  <ShieldCheck
                    className="w-6 h-6 ml-2 text-yellow-400"
                    aria-hidden="true"
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <figure className="relative w-full aspect-[2/1]">
            <Image
              src="/images/sabagh-kuwait-services.webp"
              alt="خدمات الأصباغ في الكويت"
              fill
              className="rounded-lg object-cover"
              priority
            />
            <figcaption className="sr-only">
              صورة توضح خدمات الأصباغ في الكويت
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  )
}

export default Services
