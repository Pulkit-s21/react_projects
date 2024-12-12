import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { useRef } from "react"

const ROTATION_RANGE = 30.5
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2

export const TiltCard = ({ title, icon }) => {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-52 w-40 md:h-56 md:w-44 lg:h-64 lg:w-52 rounded-xl violet-gradient"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-sm lg:text-lg text-violet-400 flex flex-col lg:gap-4 px-1 items-center"
        >
          <img className="h-14" src={icon} alt={title} />
          {title}
        </p>
      </div>
    </motion.div>
  )
}
