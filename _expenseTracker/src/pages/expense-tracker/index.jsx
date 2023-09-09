/* eslint-disable no-unused-vars */
import { useAddTransactions } from "../../hooks/useAddTransactions"
import { useState } from "react"
import { useGetTransactions } from "../../hooks/useGetTransactions"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase-config"
import { useNavigate } from "react-router-dom"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"

export const ExpenseTracker = () => {
  const navigate = useNavigate()
  const { addTransactions } = useAddTransactions()
  const { transactions, transactionTotal } = useGetTransactions()
  const { name, profilePic } = useGetUserInfo()

  const [description, setDescription] = useState()
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionType, setTransactionType] = useState("Expense")

  const onSubmit = (e) => {
    e.preventDefault()
    addTransactions({
      description,
      transactionAmount,
      transactionType,
    })
    e.target.reset()
  }

  const signUserOut = () => {
    setTimeout(async () => {
      try {
        await signOut(auth)
        localStorage.clear()
        navigate("/")
      } catch (error) {
        console.error(error)
      }
    }, 1000)
  }
  return (
    <div className="flex flex-col text-center gap-6 items-center py-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <h1 className="">
            {" "}
            <span className="block">{name}&apos;s</span> Expense Tracker
          </h1>
          <div className="flex flex-col gap-4 items-center">
            {profilePic && (
              <div>
                <img
                  className="rounded-full"
                  src={profilePic}
                  alt="User Logged In"
                />
              </div>
            )}
            <button onClick={signUserOut}>Sign Out</button>
          </div>
        </div>
        <div className="grid grid-cols-3 py-4">
          <div>
            <h2 className="text-2xl">Your Balance</h2>
            {transactionTotal.balance < 0 ? (
              <p className="text-3xl text-red-500">
                &#8377; {transactionTotal.balance}
              </p>
            ) : (
              <p className="text-2xl text-green-500">
                &#8377; {transactionTotal.balance}
              </p>
            )}
          </div>
          <div>
            <h2 className="text-2xl">Income</h2>
            <p className="text-3xl text-green-500">
              &#8377; {transactionTotal.income}
            </p>
          </div>
          <div>
            <h2 className="text-2xl">Expense</h2>
            <p className="text-3xl text-red-500">
              &#8377; {transactionTotal.expense}
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="flex gap-8 text-xl">
            <input
              className="p-2 rounded-lg outline-none border-2 border-transparent focus:border-green-300"
              type="text"
              name="description"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="p-2 rounded-lg outline-none border-2 border-transparent focus:border-green-300"
              type="number"
              name="amount"
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
          </div>
          <div className="flex gap-6">
            <div>
              <input
                type="radio"
                name="expense"
                id="Expense"
                value="Expense"
                checked={transactionType === "Expense"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label
                className="text-3xl ml-2 cursor-pointer transition-colors hover:text-red-500"
                htmlFor="Expense"
              >
                Expense
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="income"
                id="Income"
                value="Income"
                checked={transactionType === "Income"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label
                className="text-3xl ml-2 cursor-pointer transition-colors hover:text-green-500"
                htmlFor="Income"
              >
                Income
              </label>
            </div>
          </div>

          <button className="bg-green-600 text-white" type="submit">
            Add Transaction
          </button>
        </form>
      </div>

      <div className="">
        <h1 className="pb-4">Transactions</h1>
        <ul className="grid grid-cols-3 gap-6">
          {transactions.map((transaction) => {
            return (
              <li className="flex flex-col gap-2" key={transaction.id}>
                <h2 className="text-2xl">{transaction.description}</h2>
                <p className="text-3xl">
                  &#8377;{transaction.transactionAmount} &#x2022;{" "}
                  <label
                    className={`${
                      transaction.transactionType === "Expense"
                        ? "text-red-500"
                        : "text-green-500"
                    } text-xl`}
                  >
                    {transaction.transactionType}
                  </label>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
