import React from 'react'

import AppSidebar from '../elements/app_sidebar'
import AppNavbar from '../elements/app_navbar'

interface Route {
  name: string
  link: string
  childs?: Route[]
}

const routes: Route[] = [
  {
    name: 'Buttons',
    link: '/buttons',
  },
  {
    name: 'Input Text',
    link: '/input-text',
  },
  {
    name: 'Input Color',
    link: '/input-color',
  },
  {
    name: 'Input File',
    link: '/input-file',
  },
  {
    name: 'Select',
    link: '/select',
  },
  {
    name: 'DropDowns',
    link: '/dropdown',
  },
  {
    name: 'Progress Bar',
    link: '/progress-bar',
  },
  {
    name: 'CheckBox',
    link: '/checkbox',
  },
  {
    name: 'RadioBox',
    link: '/radiobox',
  },
  {
    name: 'Pagination',
    link: '/pagination',
  },
  {
    name: 'Collapse',
    link: '/collapse',
  },
  {
    name: 'Modal',
    link: '/modal',
  },
  {
    name: 'Table',
    link: '/table',
  },
  {
    name: 'Breadcrums',
    link: '/breadcrums',
  },
]

// eslint-disable-next-line no-undef
const UserLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppNavbar />
      <main className="w-full h-full flex flex-row">
        <AppSidebar routes={routes} width="w-2/12" />
        <div className="w-10/12">{children}</div>
      </main>
    </>
  )
}

export default UserLayout
