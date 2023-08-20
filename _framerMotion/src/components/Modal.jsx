/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Backdrop } from "./BackDrop"

const dropIn = {
    hidden:{
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 500,
            damping: 100
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

export const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div className="
      m-auto
      px-8
      rounded-lg
      flex
      flex-col
      items-center
      " onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  )
}
