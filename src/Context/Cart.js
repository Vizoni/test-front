import React, { useState, useEffect } from 'react'
import { getCart } from './../Services/Cart'

export const CartContext = React.createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})

  const getCartInfo = async () => {
    if (!cart.items) {
      try {
        const details = await getCart()
        setCart(details.data)
      } catch (err) {
        console.log('getCart Error', err.message)
      }
    }
  }

  return <CartContext.Provider value={{ cart, getCartInfo }}>{children}</CartContext.Provider>
}

export const useCart = () => React.useContext(CartContext)
