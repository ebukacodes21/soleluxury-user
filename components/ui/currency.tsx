import { formatter } from '@/libs/utils'
import React, { FC } from 'react'

type CurrencyProp = {
    value: number;
}

const Currency: FC<CurrencyProp> = ({ value}) => {
  return (
    <div className='font-semibold'>
      {formatter.format(value)}
    </div>
  )
}

export default Currency
