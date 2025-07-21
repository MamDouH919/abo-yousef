import { CustomLink } from '@/components/CustomLink'
import LinksContent from '@/components/LinksContent'
import PhoneStyle from '@/components/PhoneStyle'
import { Container, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import allLinks from '@/lib/links.json'
import Footer from '@/components/footer'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const link = allLinks.find((item) => item.href === id)

    const title = link?.title || 'صباغ الكويت'

    return {
        title: `صباغ الكويت - 50713199 - صباغ شاطر ورخيص - ${title}`,
        keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <>
            <Container maxWidth="lg">
                <Stack my={5} spacing={3} alignItems={"center"}>
                    <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                    <PhoneStyle />
                    <LinksContent id={id} />
                </Stack>
            </Container>
            <Footer onlyFooter/>
        </>
    )
}

export default Page
