import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
    return (
        <section className="py-16 bg-secondary text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">تواصل معنا الآن</h2>
                <p className="text-xl mb-8">احصل على استشارة مجانية وعرض سعر مخصص لمشروعك</p>
                <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                    اتصل بنا الآن
                </Button>
            </div>
        </section>
    )
}

export default Cta