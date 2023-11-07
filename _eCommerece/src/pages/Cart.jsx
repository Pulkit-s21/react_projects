/* eslint-disable no-unused-vars */
import { Data } from "../helpers/Data"
import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import { CartItem } from "../components/CartItem"
import { Link } from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js"
import { Toaster } from "react-hot-toast"

export const Cart = () => {
  const { cartItems, getCartTotalAmount } = useContext(ShopContext)
  const totalAmount = getCartTotalAmount()

  //TODO: Make Stripe work

  // const makePayments = async () => {    const stripe = await loadStripe(
  //     "pk_test_51Nti5jSIgGDEqv1P6lxHFurrcaWPw7AZmX6Zfujv21grfYTvPAh5dW3897oOMmpDt7wRNDkIjs7H8tsWKftPj3fV00hMkAsxC9"
  //   )
  //   const body = {
  //     products: cartItems,
  //   }
  //   const headers = {
  //     "Content-Type": "application/js",
  //   }
  //   const response = await fetch(
  //     "https://localhost:5173/api/create-checkout-session",
  //     {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     }
  //   )
  //   const session = await response.json()
  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   })
  // }

  return (
    <>
      <Toaster />
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
                {totalAmount ? (
                  <h1>Continue Shopping</h1>
                ) : (
                  <h1>Lets start shopping</h1>
                )}
              </button>
            </Link>
            <button className="bg-blue-500 px-6 py-2 text-white rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
