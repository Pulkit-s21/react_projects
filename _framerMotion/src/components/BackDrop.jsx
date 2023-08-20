/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
export const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      drag
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="
        absolute
        top-0
        left-0
        h-full
        w-full
        flex
        justify-center
        items-center
        bg-neutral-700
        z-10
        "
    >
      {children}
    </motion.div>
  )
}
