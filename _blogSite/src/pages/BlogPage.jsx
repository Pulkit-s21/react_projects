import { useNavigate, useParams } from "react-router-dom"
import { data } from "../helpers/data"
import { motion } from "framer-motion"

export const BlogPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const blog = data[id]
  return (
    <motion.div className="flex flex-col">
      <div className="bg-neutral-900 -mb-4 capitalize text-orange-500 p-8 flex flex-col gap-6 items-center">
        <p
          className="text-xs cursor-pointer hover:text-white transition-all "
          onClick={() => {
            navigate("/")
          }}
        >
          Back to home
        </p>
        <h3 className="text-3xl md:text-4xl text-center">{blog.title}</h3>
        <h1 className="text-2xl lg:text-5xl font-Borel">{blog.category}</h1>
      </div>
      <div className="mx-auto max-w-3xl">
        <img
          className="px-4 pb-2 lg:max-w-3xl mx-auto"
          src={blog.img}
          alt="Blog Image"
        />
        <div className="px-4">
          <p className="text-gray-500 text-lg">
            Published At:{" "}
            <span className="text-black font-semibold">{blog.date}</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-black py-4 p-4">
          <p className="">{blog.para1}</p>
          <p className="">{blog.para2}</p>
        </div>
      </div>
    </motion.div>
  )
}
