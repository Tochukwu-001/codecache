"use client";
import Image from "next/image";
import Link from "next/link";
import { LuUserRoundPen } from "react-icons/lu";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";


export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)
    console.log(navOpen);


    const navItems = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Components",
            url: "/components"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Contact Us",
            url: "/contact"
        },
    ]

    return (
        <main className="p-5 shadow-md flex items-center justify-between relative">
            <Link href={'/'} className="flex items-center gap-1 z-40">
                <Image src={"/logo.png"} alt="logo" width={500} height={500} className="w-7 h-7" />

                <p className="text-xl max-md:hidden">CodeCache</p>
            </Link>

            <div className="flex items-center gap-7 max-lg:hidden">
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.url} className="text-lg hover:text-amber-600">{item.label}</Link>
                    ))
                }
            </div>

            <Link href={"/auth/signin"} className="flex items-center gap-1 text-lg hover:text-amber-600 max-lg:ml-auto z-40">
                <p className="max-md:hidden">Sign In</p>
                <LuUserRoundPen />
            </Link>

            {/* mobile and tablet navbar view */}
            <div className={`h-dvh bg-white w-full lg:hidden absolute top-0 right-0 flex-col flex gap-12 items-center pt-20 ${navOpen ? "block" : "hidden"}`}>
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.url} className="text-lg hover:text-amber-600">{item.label}</Link>
                    ))
                }
            </div>

            <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden text-xl ml-5 z-40">
                {
                    navOpen ? <IoMdClose /> : <IoIosMenu />
                }
            </button>
        </main>
    )
}