import { Data } from "../helpers/Data"
import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import { CartItem } from "../components/CartItem"

export const Cart = () => {
  const { cartItems } = useContext(ShopContext)

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl">Your Cart Items</h1>
      <div>
        {Data.map((item) => {
          if (cartItems[item.id] != 0) {
            return (
              <CartItem
                id={item.id}
                key={item.id}
                img={item.productImg}
                title={item.title}
                price={item.price}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
