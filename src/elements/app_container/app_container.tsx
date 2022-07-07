import React, { ReactNode } from 'react'

type AppContainerProps = {
  display?: string
  bgColor?: string
  children?: ReactNode
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  className?: string
  width?: string
  height?: string
}

export const AppContainer = ({
  justifyContent,
  alignItems,
  className,
  width = 'w-full',
  height = 'h-10',
  display = 'flex',
  bgColor = 'bg-white',
  children,
  flexDirection = 'flex-row',
}: AppContainerProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ')
  }
  const setClassNames = (): string => {
    return classNames(justifyContent, alignItems, display, bgColor, flexDirection, className, width, height)
  }

  return <div className={setClassNames()}>{children}</div>
}
