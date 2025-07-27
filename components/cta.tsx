import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
    return (
        <section className="py-16 bg-secondary text-primary w-[80%] mx-auto">
            <div className="container mx-auto px-4 text-center">
                <header>
                    <h1 className="text-3xl font-bold mb-4">تواصل معنا الآن</h1>
                </header>
                <p className="text-xl mb-8">احصل على استشارة مجانية وعرض سعر مخصص لمشروعك</p>
                <Link href={"/contact"}>
                    <Button size="lg" className="bg-primary text-secondary hover:bg-yellow-400" >
                        أضغط هنا للأتصال
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Cta