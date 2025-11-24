import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

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
        <main className="p-5 shadow-md flex items-center justify-between">
            <Link href={'/'} className="flex items-center gap-1">
                <Image src={"/logo.png"} alt="logo" width={500} height={500} className="w-7 h-7" />

                <p className="text-xl">CodeCache</p>
            </Link>

            <div className="flex items-center gap-10">
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.url} className="text-xl hover:text-amber-600">{item.label}</Link>
                    ))
                }
            </div>
        </main>
    )
}