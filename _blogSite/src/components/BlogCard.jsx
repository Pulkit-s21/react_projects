/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export const BlogCard = ({ items }) => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 p-8 bg-neutral-900">
      {items.map((val, idx) => (
        <motion.div
          onClick={() => navigate("/blog/" + idx)}
          key={idx}
          className="flex flex-col rounded-lg max-w-md cursor-pointer overflow-hidden"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            className="rounded-t-lg"
            src={val.img}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            alt="Blog Image"
          />
          <div className="flex flex-col gap-2 p-4 bg-neutral-800 text-white">
            <p className="text-gray-300">{val.category}</p>
            <motion.p className="text-2xl font-bold text-orange-600">
              {val.title}
            </motion.p>
            <p className="text-sm">{val.description}</p>
            <p>{val.time}</p>
            <p>{val.author}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
