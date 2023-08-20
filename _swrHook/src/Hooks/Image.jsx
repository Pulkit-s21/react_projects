import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Image = () => {
  const { data, isLoading } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher
  )
  if (isLoading) return <>Loading...</>
  return (
    <>
      <img
        className="transition-all duration-400 rounded-t-2xl hover:rounded-none"
        src={data.message}
        width={500}
        height={200}
      />
    </>
  )
}
