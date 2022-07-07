import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

// Img
import logo from '../../img/logo.svg'

// Props
interface Props {
  fixed?: boolean
  routes?: Route[]
}

interface Route {
  name: string
  link: string
  childs?: Route[]
}

export const AppNavbar = ({ fixed = false, routes = [] }: Props) => {
  return (
    <header className={`flex flex-row gap-10 justify-start items-center w-full bg-gray-800 ${fixed ? 'fixed' : ''}`}>
      <Link className="w-2/6 h-full flex flex-row items-center" href="/">
        <div className="flex flex-row justify-center items-center poin">
          <Image alt="React Logo" height={150} src={logo} width={120} />
          <h1 className="font-semibold text-2xl uppercase text-white">Elements Library</h1>
        </div>
      </Link>
      <nav className="relative w-5/6 flex flex-row items-center py-4 m-0">
        <ul className="h-full w-full flex flex-wrap gap-4 items-center text-white p-0 m-0">
          {routes.map((item, i) => {
            return <NavBarItem key={i} childs={item.childs} link={item.link} name={item.name} />
          })}
        </ul>
      </nav>
    </header>
  )
}

// eslint-disable-next-line no-unused-vars
const NavBarItem = ({ name, link, childs }: Route) => {
  return (
    <Link className="h-full flex items-center" href={link}>
      {name}
    </Link>
  )
}
