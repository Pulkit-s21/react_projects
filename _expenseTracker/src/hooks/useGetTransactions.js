import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [transactionTotal, setTransactionTotal] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  })
  const { userId } = useGetUserInfo()
  const transactionCollectionRef = collection(db, "transactions")

  const getTransactions = async () => {
    let unsubscribe
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      )

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = []
        let totalExpense = 0
        let totalIncome = 0
        snapshot.forEach((doc) => {
          const data = doc.data()
          const id = doc.id
          docs.push({ ...data, id })

          if (data.transactionType === "Expense") {
            totalExpense += Number(data.transactionAmount)
          } else {
            totalIncome += Number(data.transactionAmount)
          }
        })
        setTransactions(docs)
        let balance = totalIncome - totalExpense
        setTransactionTotal({
          balance,
          income: totalIncome,
          expense: totalExpense,
        })
      })
    } catch (error) {
      console.error(error)
    }
    return () => unsubscribe()
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return { transactions, transactionTotal }
}
