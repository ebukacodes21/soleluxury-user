import { cn } from '@/libs/utils'
import React, { FC, MouseEventHandler } from 'react'

type IconButtonProp = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string
}

const IconButton: FC<IconButtonProp> = ({ onClick, className, icon }) => {
  return (
    <button 
        onClick={onClick}
        className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}>
      {icon}
    </button>
  )
}

export default IconButton
