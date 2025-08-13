"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import portfolio from "@/lib/portfolio.json";

const Portfolio = () => {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="portfolio-title"
      id="portfolio"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <header className="text-center mb-12">
          <h2
            id="portfolio-title"
            className="text-3xl font-bold mb-4 text-secondary"
          >
            معرض أعمالنا
          </h2>
          <p className="text-gray-600">
            شاهد بعض من أعمالنا المتميزة
          </p>
        </header>

        {/* Carousel */}
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            pagination: true,
            arrows: true,
            direction: "rtl",
            autoplay: true,
            interval: 3000,
            slideFocus: false,
            breakpoints: {
              768: { perPage: 1 },
              1024: { perPage: 2 },
            },
          }}
          aria-label="شرائح من أعمال صباغ الكويت"
        >
          {portfolio.map((item, index) => (
            <SplideSlide key={index} aria-label={`شريحة ${index + 1}: ${item.title}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <figure className="relative">
                    <Image
                      src={item.image}
                      alt={`${item.title} - صباغ الكويت`}
                      width={650}
                      height={650}
                      className="w-full object-cover h-96"
                      loading="lazy"
                    />
                    {item.title && (
                      <figcaption className="sr-only">{item.title}</figcaption>
                    )}
                  </figure>
                </CardContent>
              </Card>
            </SplideSlide>
          ))}
        </Splide>

      </div>
    </section>
  );
};

export default Portfolio;
