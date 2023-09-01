import { useParams, useNavigate } from "react-router-dom"
import { data } from "../helpers/data"

export const BlogPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const blog = data[id]
  return (
    <div className="relative">
      <div className="-mb-8 bg-black text-center flex flex-col justify-center items-center h-52 p-2">
        <p
          className="text-white cursor-pointer"
          onClick={() => {
            navigate("/")
          }}
        >
          Back to Home
        </p>
        <h1 className="text-3xl text-orange-500">{blog.title}</h1>
      </div>
      <div className="mx-auto max-w-5xl px-4">
        <img className="rounded-t-md" src={blog.img} alt="Blog Image" />
        <div className="flex flex-col items-center gap-4">
          <p className="text-base lg:text-xl py-8">
            {blog.fullDescription}
          </p>
          <p className="text-orange-500 text-2xl capitalize">{blog.author}</p>
        </div>
      </div>
    </div>
  )
}
