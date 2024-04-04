'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'Home',
    href: '/dashboard'
  },
  {
    name: 'Docs',
    href: '/dashboard/docs',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings'
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap items-center gap-x-5 md:gap-x-10">
      {
        links.map((link) => {
          return(
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-extrabold hover:text-cyan-700 md:text-xl ${
                pathname === link.href ? 'font-extrabold text-cyan-800' : 'text-black'
              }`}
            >
              <p>{link.name}</p>
            </Link>
          )
        })
      }
    </div>
  )
}
