/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion"

export const SkillItem = (props) => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  return (
    <motion.div
      className="flex flex-col items-center hover:animate-pulse shadow-md shadow-blue-300 py-4"
      style={{ scale }}
    >
      <motion.img
        whileHover={{ scale: 1.2 }}
        className="w-24 lg:w-28"
        loading="lazy"
        src={props.img}
        alt="Skill Image"
      />
      <p className="text-lg lg:text-4xl font-Cabin">{props.skillName}</p>
    </motion.div>
  )
}
