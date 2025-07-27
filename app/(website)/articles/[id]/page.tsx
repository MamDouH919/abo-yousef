import { CustomLink } from '@/components/CustomLink'
import LinksContent from '@/components/LinksContent'
import PhoneStyle from '@/components/PhoneStyle'
import { Container, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import articles from '@/lib/articles.json'
import Footer from '@/components/footer'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const article = articles.find((item) => item.slug === id)

    const title = article?.title || 'صباغ الكويت'

    return {
        title: `صباغ الكويت - 50713199 - ${title}`,
        keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
        description: article?.content,
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const article = articles.find((item) => item.slug === id)

    return (
        <>
            <Container maxWidth="lg">
                <section>
                    <Stack my={5} spacing={3} alignItems={"center"}>
                        <h1 className="text-3xl font-bold text-secondary mb-4">{article?.title}</h1>
                        <p className="text-xl text-gray-600">{article?.content}</p>
                    </Stack>
                </section>
            </Container>
        </>
    )
}

export default Page