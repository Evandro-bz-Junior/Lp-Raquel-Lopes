"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
    { href: "#home", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#about", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
    return (
        <header
            aria-label="Menu principal"
            className="bg-white w-full h-16 fixed top-0 left-0 right-0 z-50 shadow-md"
        >
            <div className="container flex items-center justify-between px-4 mx-auto">
                <img
                    src="/images/Logo.png"
                    alt="logo Image"
                    className="h-16 object-contain"
                />

                {/* Desktop */}
                <nav className="hidden lg:flex gap-4 text-primary">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="hover:underline">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    className="hidden lg:block px-4 bg-primary hover:bg-mid text-warm py-2 rounded-2xl transition-colors duration-300"
                    href="https://wa.me/558496090800"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Agende sua avaliação
                </a>

                {/* Mobile menu trigger */}
                <Sheet>
                    <SheetTrigger
                        aria-label="Abrir menu"
                        className="lg:hidden text-primary"
                    >
                        <Menu size={32} />
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-white p-0 shadow-xl overflow-hidden transition-all duration-500 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 flex flex-col gap-6"
                        >
                            <nav className="flex flex-col gap-4 text-primary text-lg">
                                {links.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <a href={link.href}>{link.label}</a>
                                    </SheetClose>
                                ))}
                            </nav>

                            <a
                                className="px-4 bg-primary text-warm py-2 rounded-xl text-center"
                                href="https://wa.me/558496090800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Agende sua avaliação
                            </a>
                        </motion.div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
