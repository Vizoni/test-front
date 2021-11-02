import React, { useState, useEffect } from 'react'
import { getCart } from './../Services/Cart'

export const CartContext = React.createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})

  const getCartInfo = async () => {
    const details = await getCart()
    console.log('Cart Context', details.data)
    setCart(details.data)
    return details.data
  }

  return <CartContext.Provider value={{ cart, getCartInfo }}>{children}</CartContext.Provider>
}

export const useCart = () => React.useContext(CartContext)
