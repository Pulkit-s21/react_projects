import { motion, AnimatePresence } from "framer-motion"
import { Modal } from "./components/Modal"
import { useState } from "react"

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}

export default App
