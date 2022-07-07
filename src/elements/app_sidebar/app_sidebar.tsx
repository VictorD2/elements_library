import React from 'react'
import { AppMenuItem } from './app_menu_item'

type AppSidebarProps = {
  width?: string
  bgColor?: string
  className?: string
  routes?: Route[]
}

interface Route {
  name: string
  link: string
}

export const AppSidebar = ({ routes, width = 'w-20', bgColor = 'bg-primary', className }: AppSidebarProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ')
  }
  const setClassNames = (): string => {
    return classNames(width, className, bgColor, 'h-screen', 'sticky', 'top-0', 'scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent')
  }

  return (
    <aside className={setClassNames()}>
      <ul className="w-full p-3 flex flex-col gap-3">
        {routes?.map((item, i) => {
          return <AppMenuItem route={item} key={i} />
        })}
      </ul>
    </aside>
  )
}

// eslint-disable-next-line no-unused-vars
