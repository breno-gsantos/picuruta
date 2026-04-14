'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

const leftNavLinks = [
    { href: "/historia-picuruta", label: "Picuruta" },
    { href: "/marcas-parceiras", label: "Marca" },
    { href: "/competicoes", label: "Competições" },
]

const rightNavLinks = [
    { href: "/horarios-inscricao", label: "Aulas" },
    { href: "/horarios-inscricao", label: "Inscrição" },
    { href: "/aulas-particulares", label: "Inscrição" },
]

export function Navbar(){
    const [navHovered, setNavHovered] = useState<boolean>(false);
    const pathname = usePathname();

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" onMouseEnter={() => setNavHovered(true)} onMouseLeave={() => setNavHovered(false)}>
            <div className={cn('absolute inset-0 transition-opacity duration-500', navHovered ? 'opacity-100' : 'opacity-0')}>
                <div className="absolute inset-0 bg-nav-red" />
                <div className="absolute top-0 right-0 h-full bg-nav-yellow" style={{ width: "50%",clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
            </div>
            <div className="relative flex items-center justify-center py-3 px-8">
                <div className="flex items-center gap-6">
                    {leftNavLinks.map((link) => (
                        <Link key={link.href + link.label} href={link.href} className="group relative font-display text-lg tracking-wider transition-colors duration-300" style={{ color: navHovered ? "#1a1a1a" : "#333" }}>
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Link href="/" className="mx-8 shrink-0">
                    <Image src='/logo.png' alt="Logo Escola de Surf Picuruta Salazar" className="rounded-full object-contain" width={64} height={64} />
                </Link>

                <div className="flex items-center gap-6">
                    {rightNavLinks.map((link, i) => (
                        <Link key={link.href + link.label + i} href={link.href} className="group relative font-display text-lg tracking-wider transition-colors duration-300" style={{ color: navHovered ? "#1a1a1a" : "#333" }}>
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}