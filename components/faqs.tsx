import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import faqs from "@/lib/faqs.json"

const Faqs = () => {
    return (

        <section className="py-16 bg-gray-50" id="faqs">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">الأسئلة الشائعة</h2>
                    <p className="text-gray-600">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
                </header>
                <Accordion type="single" collapsible className="w-full px-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-right text-lg font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Faqs