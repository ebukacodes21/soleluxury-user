"use client"
import CartItem from '@/components/cart-item';
import Summary from '@/components/summary';
import Container from '@/components/ui/container';
import useCart from '@/hooks/useCart';
import React, { useEffect, useState } from 'react'

const page = () => {
const cart = useCart()
     const [isMounted, setIsMounted] = useState<boolean>(false);
    
      useEffect(() => {
        setIsMounted(true);
      }, []);
    
      if (!isMounted) {
        return null;
      }
  return (
    <Container>
      <div className='px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-black'>Cart</h1>
        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
        <div className='lg:col-span-7'>
            {cart.items.length === 0 && <p className='text-neutral-500'>No items in cart</p>}
            <ul>
                {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                ))}
            </ul>
        </div>
        <Summary />
        </div>
      </div>
    </Container>
  )
}

export default page
