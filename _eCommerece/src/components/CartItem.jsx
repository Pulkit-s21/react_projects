/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
export const CartItem = (props) => {
  const { addToCart, removeFromCart, cartItems, updateCartItems, deleteItem } =
    useContext(ShopContext)
  return (
    <div className="p-4 flex flex-col  gap-6">
      <div className="shadow-2xl grid grid-cols-2 p-4 gap-6 place-items-center rounded-xl">
        <img width={300} className="" src={props.img} alt="Product Image" />
        <div className="flex flex-col justify-center gap-2 text-2xl md:text-3xl">
          <div className="flex gap-8 justify-between">
            <h3 className="text-xl whitespace-break-spaces md:text-3xl">
              {props.title}
            </h3>
            <button
              className=""
              onClick={(e) => {
                deleteItem(Number((e.target.value = 0)), props.id)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.55em"
                viewBox="0 0 384 512"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>
          </div>
          <p className="text-xl md:text-2xl">
            <span className="text-green-500">&#x20b9;</span>
            {props.price}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                removeFromCart(props.id)
              }}
            >
              -
            </button>
            <input
              readOnly={true}
              className="flex-1 w-20 text-lg md:text-xl border-2 text-center"
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
        </div>
      </div>
    </div>
  )
}
