/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
export const CartItem = (props) => {
  const { addToCart, removeFromCart, cartItems, updateCartItems } =
    useContext(ShopContext)
  return (
    <div className="p-4 flex flex-col items-center gap-6">
      <div className="shadow-2xl grid grid-cols-2 p-4 gap-6 rounded-xl group">
        <img width={300} className="" src={props.img} alt="Product Image" />
        <div className="flex flex-col justify-center gap-2 text-2xl md:text-3xl">
          <h3 className="">{props.title}</h3>
          <p className="">
            <span className="text-green-500">&#x20b9;</span>
            {props.price}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                removeFromCart(props.id)
              }}
            >
              {" "}
              -{" "}
            </button>
            <input
              readOnly={true}
              className="flex-1 w-24 border-2 text-center"
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
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
