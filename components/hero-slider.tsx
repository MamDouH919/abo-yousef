"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Card } from "./ui/card"
import { Phone } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "أبو يوسف",
    subtitle: "أفضل صباغ في الكويت",
    description: "خدمات الصباغة والدهان المتميزة",
    buttonText: "اتصل بنا الآن",
    image: "/images/bg6.jpg",
    phone: "50713199",
  },
  {
    id: 2,
    title: "خدمات متميزة",
    subtitle: "جودة عالية وأسعار منافسة",
    description: "نقدم أفضل خدمات الصباغة في الكويت",
    buttonText: "شاهد أعمالنا",
    image: "/images/bg5.jpg",
    phone: "50713199",
  },
  {
    id: 3,
    title: "فريق محترف",
    subtitle: "خبرة تزيد عن 25 عاماً",
    description: "فريق من أمهر الصباغين المحترفين",
    buttonText: "احصل على عرض سعر",
    image: "/images/bg3.webp",
    phone: "50713199",
  },
]

interface AnimatedTextProps {
  lines: string[]
  isActive: boolean
  delay?: number
}

function AnimatedText({ lines, isActive, delay = 500 }: AnimatedTextProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    if (isActive) {
      setVisibleLines(0)
      lines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines(index + 1)
        }, index * delay)
      })
    } else {
      setVisibleLines(0)
    }
  }, [isActive, lines, delay])

  return (
    <div className="space-y-4">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-700 transform ${index < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {index === 0 && <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">{line}</h1>}
          {index === 1 && <h2 className="text-3xl md:text-4xl text-white/90 drop-shadow-lg">{line}</h2>}
          {index === 2 && <p className="text-xl md:text-2xl text-white/80 drop-shadow-lg">{line}</p>}
          {index === 3 &&
            <Link href={"tel:+96550713199"}>
              <Card className="p-1 bg-red-50 border-red-200 w-[300px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">هاتف</h4>
                    <p className="text-2xl font-bold text-secondary">
                      {line}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          }
        </div>
      ))}
    </div>
  )
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSlideActive, setIsSlideActive] = useState(true)

  const handleSlideChange = (splide: any, newIndex: number) => {
    setIsSlideActive(false)
    setTimeout(() => {
      setCurrentSlide(newIndex)
      setIsSlideActive(true)
    }, 100)
  }

  useEffect(() => {
    setIsSlideActive(true)
  }, [])

  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: 0,
          pagination: true,
          arrows: true,
          direction: "rtl",
          autoplay: true,
          interval: 6000,
          pauseOnHover: true,
          resetProgress: false,
          // height: "600px",
          cover: true,
        }}
        onMove={handleSlideChange}

        className="hero-slider h-[400px] md:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="md:object-cover object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r to-black/60 via-black/40 from-transparent" />

              {/* remove padding right for small screens */}
              <div className="absolute inset-0 flex items-center pr-0 md:pr-32">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <AnimatedText
                      lines={[slide.title, slide.subtitle, slide.description, slide.phone]}
                      isActive={currentSlide === index && isSlideActive}
                      delay={600}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
