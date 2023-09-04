/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export const BlogCard = ({ items }) => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 p-8 bg-neutral-900">
      {items.map((val) => (
        <motion.div
          onClick={() => navigate("/blog/" + val.id)}
          key={val.id}
          className="flex flex-col rounded-lg max-w-md cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img className="rounded-t-lg" src={val.img} alt="Blog Image" />
          <div className="flex flex-col gap-2 p-4 bg-neutral-800 text-white">
            <p className="capitalize text-gray-300">{val.category}</p>
            <motion.p className="text-2xl font-bold text-orange-600">
              {val.title}
            </motion.p>
            <p className="text-sm">{val.description}</p>
            <p>{val.time}</p>
            <div className="flex gap-4 items-center">
              <img className="rounded-full w-10 h-8" src={val.pic} alt="" />
              <p>{val.author}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
