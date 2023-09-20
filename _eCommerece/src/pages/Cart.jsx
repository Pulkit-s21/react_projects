import { Data } from "../helpers/Data"
import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import { CartItem } from "../components/CartItem"
import { Link } from "react-router-dom"

export const Cart = () => {
  const { cartItems, getCartTotalAmount } = useContext(ShopContext)
  const totalAmount = getCartTotalAmount()

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
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl flex justify-center gap-2">
          {totalAmount ? (
            <>
              SubTotal: <span className="text-green-500">&#x20b9;</span>{" "}
              {totalAmount.toLocaleString()}
            </>
          ) : (
            <h2></h2>
          )}
        </h2>
        <div className="flex flex-col items-center md:flex-row gap-2">
          <Link to="/">
            <button className="bg-blue-500 px-6 py-2 text-white rounded-lg">
              {totalAmount ? (<p>Continue Shopping</p>) : (<p>Lets go shop</p>)}
              
            </button>
          </Link>
          <button className="bg-blue-500 px-6 py-2 text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
