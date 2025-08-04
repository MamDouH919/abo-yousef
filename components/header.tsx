'use client'

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Facebook,
    Twitter,
    Instagram,
    Phone,
    Home,
    UserRound,
    BookHeart,
    Menu,
    X,
} from "lucide-react"
import { Button } from "./ui/button"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Header = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { href: "/", label: "الرئيسية", icon: Home },
        { href: "/about-us", label: "عن صباغ الكويت", icon: UserRound },
        { href: "/services", label: "خدماتنا", icon: BookHeart },
        { href: "/contact", label: "اتصل بنا", icon: Phone },
        { href: "/articles", label: "المقالات", icon: BookHeart },
    ]

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-secondary text-primary border-b border-primary/10">
            <div className="container mx-auto px-4">
                <nav className="py-1">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <div className="relative h-16 w-40">
                                <Image
                                    src="/logo.png"
                                    alt="Abu Yousef Logo - أبو يوسف - صباغ الكويت"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                {/* <Image
                                    src="/logo.png"
                                    alt="Abu Yousef Logo"
                                    width={200}
                                    height={80}
                                    priority
                                    style={{ height: "auto" }} // optional if using custom styling
                                /> */}
                            </div>
                        </Link>

                        {/* Desktop Menu */}
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

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMenuOpen(!menuOpen)}
                                title="القائمة"
                                aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                            >
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Animated */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden flex flex-col mt-4 space-y-2 md:hidden"
                            >
                                {navLinks.map(({ href, label, icon: Icon }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className={clsx(
                                            "flex items-center px-4 py-2 rounded hover:bg-primary/10",
                                            pathname === href ? "text-primary font-semibold" : "text-primary/60"
                                        )}
                                    >
                                        <Icon className="w-4 h-4 ml-2" />
                                        {label}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    )
}

export default Header
