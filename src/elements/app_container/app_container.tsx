import React from 'react'

type AppContainerProps = {
  display?: string
  bgColor?: string
  // eslint-disable-next-line no-undef
  children?: JSX.Element
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  className?: string
  width?: string
  height?: string
}

export const AppContainer = ({ className, width = 'w-full', height = 'h-10', display = 'flex', bgColor = 'bg-white', children, flexDirection = 'flex-row' }: AppContainerProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ')
  }
  const setClassNames = (): string => {
    return classNames(display, bgColor, flexDirection, className, width, height)
  }

  return <div className={setClassNames()}>{children}</div>
}
