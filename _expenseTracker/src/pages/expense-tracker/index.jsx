/* eslint-disable no-unused-vars */
import { useAddTransactions } from "../../hooks/useAddTransactions"
import { useState } from "react"
import { useGetTransactions } from "../../hooks/useGetTransactions"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase-config"
import { useNavigate } from "react-router-dom"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"
import Swal from "sweetalert2"

export const ExpenseTracker = () => {
  const navigate = useNavigate()
  const { addTransactions } = useAddTransactions()
  const { transactions, transactionTotal } = useGetTransactions()
  const { name, profilePic } = useGetUserInfo()

  const [description, setDescription] = useState("")
  const [transactionMode, setTransactionMode] = useState("")
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionType, setTransactionType] = useState("Expense")

  const onSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      html: `
            <div class="flex flex-col gap-4">
                <p>
                    A transaction of type <b>${transactionType}</b> for <b>${description}</b> of amount <b>${transactionAmount}</b>
                </p>
            </div>
            `,
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      closeButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        addTransactions({
          description,
          transactionAmount,
          transactionMode,
          transactionType,
        })
        e.target.reset()

        // setDescription("");
        // setTransactionAmount("");
        // setTransactionMode("");

        Swal.fire({
          title: "Confirmed",
          text: "Your transaction has been saved !!",
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
        })
      }
    })
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
        <div className="flex flex-col gap-8 md:flex-row md:justify-center">
          <h1 className="text-3xl lg:text-5xl">
            {" "}
            <span className="block">{name}&apos;s</span> Expense Tracker
          </h1>
          <div className="grid grid-cols-1 gap-4 place-items-center">
            {profilePic && (
              <div>
                <img
                  className="rounded-full"
                  src={profilePic}
                  alt="User Logged In"
                />
              </div>
            )}
            <button className="" onClick={signUserOut}>
              Sign Out
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4">
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-2xl">Balance</h2>
            {transactionTotal.balance < 0 ? (
              <p className="text-2xl text-red-500">
                &#8377; {transactionTotal.balance}
              </p>
            ) : (
              <p className="text-2xl text-green-500">
                &#8377; {transactionTotal.balance}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-2xl">Income</h2>
            <p className="text-2xl text-green-500">
              &#8377; {transactionTotal.income}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-2xl">Expense</h2>
            <p className="text-2xl text-red-500">
              &#8377; {transactionTotal.expense}
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 text-xl">
            <input
              className={`p-2 rounded-lg text-center outline-none border-2 border-transparent bg-neutral-900 ${
                transactionType === "Expense"
                  ? "focus:border-red-500"
                  : "focus:border-green-500"
              }`}
              type="text"
              name="description"
              placeholder="Description"
              autoComplete="off"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className={`p-2 rounded-lg text-center outline-none border-2 border-transparent bg-neutral-900 ${
                transactionType === "Expense"
                  ? "focus:border-red-500"
                  : "focus:border-green-500"
              }`}
              type="text"
              name="mode"
              placeholder="Mode of transaction"
              autoComplete="off"
              required
              onChange={(e) => setTransactionMode(e.target.value)}
            />
            <input
              className={`p-2 rounded-lg text-center outline-none border-2 border-transparent bg-neutral-900 ${
                transactionType === "Income"
                  ? "focus:border-green-500"
                  : "focus:border-red-500"
              }`}
              min={0}
              name="amount"
              placeholder="Amount"
              autoComplete="off"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
          </div>
          <div className="flex gap-6 py-4">
            <div className="flex">
              <input
                type="radio"
                name="expense"
                id="Expense"
                value="Expense"
                checked={transactionType === "Expense"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label
                className="text-2xl md:text-3xl lg:text-4xl ml-2 cursor-pointer transition-colors hover:text-red-500"
                htmlFor="Expense"
              >
                Expense
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                name="income"
                id="Income"
                value="Income"
                checked={transactionType === "Income"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label
                className="text-2xl md:text-3xl lg:text-4xl ml-2 cursor-pointer transition-colors hover:text-green-500"
                htmlFor="Income"
              >
                Income
              </label>
            </div>
          </div>

          <button className="bg-blue-600 text-lg text-white border-2 border-transparent hover:border-2 hover:border-blue-300">
            Add Transaction
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-4xl text-neutral-500 md:text-6xl pb-4">
          Transactions
        </h1>
        <ul className="grid grid-cols-3 gap-8 px-4">
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id} className="flex flex-col gap-2">
                <div className="flex flex-col lg:flex-row lg:gap-8 justify-between items-center bg-neutral-900 px-6 py-2 rounded-lg">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-start">
                    <p className="text-xs lg:text-base text-white">
                      {transaction?.description}
                    </p>
                    <p className="text-xs text-neutral-600">
                      {transaction?.transactionMode}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <p
                      className={`text-xl lg:text-3xl font-semibold ${
                        transaction.transactionType === "Income"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <span className="text-sm text-neutral-400">&#8377;</span>
                      {transaction.transactionAmount}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
