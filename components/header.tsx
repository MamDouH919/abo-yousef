'use client'

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Facebook,
    Twitter,
    Instagram,
    Phone,
    Mail,
    Home,
    UserRound,
    BookHeart,
} from "lucide-react"
import { Button } from "./ui/button"
import clsx from "clsx"

const Header = () => {
    const pathname = usePathname()

    const navLinks = [
        { href: "/", label: "الرئيسية", icon: Home },
        { href: "/about", label: "عن صباغ الكويت", icon: UserRound },
        { href: "/services", label: "خدماتنا", icon: BookHeart },
        { href: "/contact", label: "اتصل بنا", icon: Phone },
    ]

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-secondary text-primary border-b border-primary/10">
            <div className="container mx-auto px-4">
                {/* Top Bar */}
                {/* <div className="flex justify-between items-center py-2 text-sm border-b border-primary/20">
                    <div className="flex items-center space-x-4 space-x-reverse"></div>
                    <div className="flex space-x-2 space-x-reverse">
                        <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                            <Facebook className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                            <Twitter className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                            <Instagram className="w-4 h-4" />
                        </Button>
                    </div>
                </div> */}

                {/* Main Navigation */}
                <nav className="py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold">أبو يوسف للصباغة</div>
                        <div className="hidden md:flex space-x-8 space-x-reverse">
                            {navLinks.map(({ href, label, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={clsx(
                                        "transition-colors flex items-center hover:text-primary",
                                        pathname === href ? "text-primary font-semibold" : "text-primary/60"
                                    )}
                                >
                                    <Icon className="w-4 h-4 ml-2" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
