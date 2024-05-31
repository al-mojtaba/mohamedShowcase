'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname()
  return (

    <div className="flex justify-center items-center h-32 gap-10 text-3xl">
        <Link href="/" className={`${pathname === '/' ? 'underline underline-offset-8 decoration-4 decoration-amber-400' : ''}`}>Home</Link>
        <Link href="/about" className={`${pathname === '/about' ? 'underline underline-offset-8 decoration-4 decoration-amber-400' : ''}`}>Works</Link>
    </div>
  )
}
