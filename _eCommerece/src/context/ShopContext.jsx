/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { Data } from "./../helpers/Data"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 0; i < Data.length; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItems = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItems }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}
