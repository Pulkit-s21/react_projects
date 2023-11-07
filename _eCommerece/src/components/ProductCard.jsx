/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-hot-toast"

export const ProductCard = ({ items }) => {
  const { addToCart, cartItems } = useContext(ShopContext)
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-between shadow-xl p-6 rounded-lg gap-4 hover:scale-105 group transition-all cursor-pointer max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <img width={300} src={item.productImg} alt="Image" />
          <div className="">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="text-xl group-hover:scale-150 transition-all">
              <span className="text-xl text-green-600">&#x20b9;</span>{" "}
              {item.price}
            </p>
          </div>
          <button
            onClick={() => {
              addToCart(item.id)
              toast.success("Item added to cart")
              // alert("Hello")
            }}
            className="rounded-md uppercase px-6 py-2 bg-blue-500 text-white group-hover:bg-green-500 transition-all duration-200"
          >
            Add To Cart {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}
          </button>
        </div>
      ))}
    </>
  )
}
