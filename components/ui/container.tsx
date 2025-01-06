import React, { FC } from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-7xl'>
      {children}
    </div>
  )
}

export default Container
