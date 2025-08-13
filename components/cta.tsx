import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section
      className="py-16 bg-secondary text-primary w-[80%] mx-auto rounded-lg shadow-lg"
      aria-labelledby="cta-title"
      id="cta"
    >
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <header>
          <h2
            id="cta-title"
            className="text-3xl font-bold mb-4"
          >
            تواصل معنا الآن
          </h2>
        </header>

        {/* Description */}
        <p className="text-xl mb-8">
          احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
        </p>

        {/* Call-to-action button */}
        <Link href="/contact" passHref>
          <Button
            size="lg"
            className="bg-primary text-secondary hover:bg-yellow-400"
            aria-label="انتقل إلى صفحة الاتصال"
          >
            أضغط هنا للأتصال
          </Button>
        </Link>
        
      </div>
    </section>
  )
}

export default Cta
