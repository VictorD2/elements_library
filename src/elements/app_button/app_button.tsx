import React from 'react'

type AppButtonProps = {
  className?: string
  type?: 'submit' | 'button' | 'reset'
  text?: string
  bgColor?: string
  textColor?: string
  border?: string
  borderRadius?: string
  remixicon?: string
  hover?: string
  height?: string
  width?: string
  onClick: Function
}

export const AppButton = ({
  hover = '',
  remixicon = '',
  text = '',
  borderRadius,
  border,
  type = 'button',
  className,
  height = 'h-10',
  width = 'w-20',
  bgColor = 'bg-primary',
  textColor = 'text-white',
  onClick,
}: AppButtonProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ')
  }
  const getHover = (text: string) => {
    return `hover:${text}`.replaceAll(' ', ' hover:')
  }

  const setClassNames = (): string => {
    return classNames(
      className,
      height,
      width,
      borderRadius,
      border,
      bgColor,
      textColor,
      'p-2 flex duration-500 hover:contrast-150 overflow-hidden flex-row justify-center items-center gap-2 rounded-lg relative',
      getHover(hover)
    )
  }
  return (
    <button className={setClassNames()} type={type} onClick={(e) => onClick(e)}>
      {remixicon !== '' && <i className={remixicon} />}
      {text !== '' && <span className="">{text}</span>}
    </button>
  )
}
