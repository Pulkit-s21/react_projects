import { SubHeading } from "../components/SubHeading"
import { Skills } from "../components/Skills"
import { SocialIcons } from "../components/SocialIcons"
import { motion } from "framer-motion"
import { About } from "../components/About"

export const Home = () => {
  return (
    <motion.div
      className="font-serif"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div
        className="h-screen bg-blue-900 text-white flex flex-col gap-8 
        items-center text-center justify-center p-4"
      >
        <SubHeading />
        <SocialIcons />
      </div>
      <About />
      <Skills />
    </motion.div>
  )
}
