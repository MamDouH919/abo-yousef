import { CustomLink } from '@/components/CustomLink'
import LinksContent from '@/components/LinksContent'
import PhoneStyle from '@/components/PhoneStyle'
import { Container, Stack } from '@mui/material'
import React from 'react'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <LinksContent id={id} />
            </Stack>
        </Container>
    )
}

export default Page
