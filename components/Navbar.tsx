import Link from 'next/link'
import React from 'react'

const links = [
  { href: "/clients", lable: "clients" },
  { href: "/drinks", lable: "drinks" },
  { href: "/tasks", lable: "tasks" },
  { href: "/about", lable: "about" },
  { href: "/prisma-example", lable: "prisma" },
]

const Navbar = () => {
  return (
    <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href={"/"} className='btn btn-primary'>Main</Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map(link => (<li key={link.href}>
            <Link href={link.href} className='capitalize'>{link.lable}</Link>
          </li>))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar