import React from 'react'
import articles from "@/lib/articles.json"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

const Articles = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4 text-secondary">مقالات ونصائح حول صباغ الكويت</h1>
                    <p className="text-gray-600">اقرأ أحدث المقالات والنصائح المتعلقة بخدمات صباغة ودهان المنازل في الكويت</p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {article.content.substring(0, 120)}...
                                </p>
                                <Link href={`/articles/${article.slug}`} passHref title={article.title}>
                                    <Button variant="link" className="p-0 h-auto text-orange-600">
                                        اقرأ المزيد ←
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles
