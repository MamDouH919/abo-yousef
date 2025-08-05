import React from 'react'
import dynamic from "next/dynamic"
const Header = dynamic(() => import('@/components/header'))
const Footer = dynamic(() => import('@/components/footer'))
const Social = dynamic(() => import('@/components/social'))

const WebsiteLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen">
            {/* Floating Social Media Icons */}
            <Social />
            {/* Header */}
            <Header />
            {children}
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default WebsiteLayout