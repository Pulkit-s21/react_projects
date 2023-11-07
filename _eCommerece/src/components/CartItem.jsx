/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-hot-toast"

export const CartItem = (props) => {
  const { addToCart, removeFromCart, cartItems, updateCartItems, deleteItem } =
    useContext(ShopContext)
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="shadow-2xl grid grid-cols-2 p-4 gap-6 place-items-center rounded-xl">
        <img width={300} className="" src={props.img} alt="Product Image" />
        <div className="flex flex-col justify-center gap-4 text-2xl md:text-3xl">
          <div className="flex gap-8 justify-between">
            <h3 className="text-xl whitespace-break-spaces md:text-3xl">
              {props.title}
            </h3>
          </div>
          <p className="text-xl md:text-2xl">
            <span className="text-green-500">&#x20b9;</span>
            {props.price}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                removeFromCart(props.id)
                toast("Item removed")
              }}
            >
              -
            </button>
            <input
              readOnly={true}
              className="flex-1 w-20 text-base md:text-lg border-2 text-center"
              value={cartItems[props.id]}
              onChange={(e) => {
                updateCartItems(Number(e.target.value), props.id)
              }}
            />
            <button
              onClick={() => {
                addToCart(props.id)
              }}
            >
              +
            </button>
          </div>
          <div className="">
            <button
              className="text-base md:text-xl hover:text-red-500 transition-all"
              onClick={(e) => {
                deleteItem(Number((e.target.value = 0)), props.id)
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
