"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="bg-white w-full h-16 fixed top-0 left-0 right-0 z-50 shadow-md items-center" id="header">
            <div className="container flex items-center justify-between px-4 mx-auto z-10">
                <div>
                    <img src="/images/Logo.png" alt="logo Image" className="h-16 object-contain" />
                </div>
                <nav className="hidden lg:flex gap-4 text-primary">
                    <a href="#hero" className="hover:underline">Início</a>
                    <a href="#servicos" className="hover:underline">Serviços</a>
                    <a href="#about" className="hover:underline">Sobre</a>
                    <a href="#depoimentos" className="hover:underline">Depoimentos</a>
                    <a href="#faq" className="hover:underline">Duvidas</a>
                </nav>
                <a className="hidden lg:block px-4 bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="#">Agende sua avaliação</a>
            </div>
            <div className="absolute top-0 right-0 p-5 ">



                <Sheet>
                    <SheetTrigger className="lg:hidden text-primary">
                        <Menu size={32} />
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-white p-0 shadow-xl overflow-hidden"
                    >
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1], // easing iOS real
                            }}
                            className="p-6 flex flex-col gap-6"
                        >
                            <nav className="flex flex-col gap-4 text-primary text-lg">
                                <SheetClose asChild>
                                    <a href="#hero">Início</a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#servicos">Serviços</a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#sobre">Sobre</a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#depoimentos">Depoimentos</a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#duvidas">Dúvidas</a>
                                </SheetClose>
                            </nav>

                            <a className="px-4 bg-primary text-warm py-2 rounded-xl text-center">
                                Agende sua avaliação
                            </a>
                        </motion.div>
                    </SheetContent>
                </Sheet>


            </div>
        </header>
    )
}