import profile_photo from "../assets/profile_photo.webp"
import bg_img from "../assets/bg_img.jpg"
import { MyInfo } from "./MyInfo"
import { motion, useScroll, useTransform } from "framer-motion"

export const About = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1])
  return (
    <div className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-violet-800 to-neutral-700">
      <img
        src={bg_img}
        className="absolute w-full h-full object-cover mix-blend-overlay opacity-60"
        alt=""
      />
      <motion.div className="flex flex-col items-center p-12" style={{ scale }}>
        <div className="flex flex-col items-center lg:flex-row gap-12">
          <img
            className="rounded-3xl max-h-96 z-20"
            src={profile_photo}
            alt="Photo about me"
          />
          <MyInfo />
        </div>
      </motion.div>
    </div>
  )
}
