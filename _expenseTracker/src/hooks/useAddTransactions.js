import { addDoc, serverTimestamp, collection } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useAddTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()
  const addTransactions = async ({
    description,
    transactionAmount,
    transactionMode,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      transactionType,
      transactionMode,
      transactionAmount,
      createdAt: serverTimestamp(),
    })
  }
  return { addTransactions }
}
