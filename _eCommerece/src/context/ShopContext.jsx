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

  const getCartTotalAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Data.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * parseFloat(itemInfo.price.replaceAll(",", ""))
      }
    }
    return totalAmount
  }

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
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItems,
        getCartTotalAmount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}
