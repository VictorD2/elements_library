import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Route {
  name: string
  link: string
}
type AppMenuItemProps = {
  route: Route
  remixicon?: string
  textColor?: string
  width?: string
  height?: string
  bgColor?: string
}

export const AppMenuItem = ({ route, remixicon, bgColor = 'bg-primary', textColor = 'text-white', width = 'w-full', height = 'h-10' }: AppMenuItemProps) => {
  const router = useRouter()
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ')
  }

  const setClassNames = (): string => {
    return classNames(
      textColor,
      bgColor,
      width,
      height,
      router.pathname === route.link ? 'bg-secondary' : '',
      'rounded-lg uppercase hover:contrast-150 duration-500 ',
      'flex flex-row items-center justify-center'
    )
  }

  return (
    <li className={setClassNames()}>
      {remixicon !== '' && <i className={remixicon} />}
      <Link href={route.link}>{route.name}</Link>
    </li>
  )
}
