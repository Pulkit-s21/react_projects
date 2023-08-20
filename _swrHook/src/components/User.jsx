import { Image } from "../Hooks/Image"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Users = () => {
  const { data, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  )
  if (isLoading) return <>Loading...</>
  return (
    <>
      {data.map((user) => {
        return (
          <div
            key={user.id}
            className="flex flex-col items-center justify-center my-2 border-2 divide-y-2"
          >
            <Image />
            <button className="p-2 text-2xl font-bold">{user.name}</button>
          </div>
        )
      })}
    </>
  )
}
