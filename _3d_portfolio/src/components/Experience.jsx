import { motion } from "framer-motion"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { experiences } from "../constants"
import ExperienceCard from "./ExperienceCard"
import "react-vertical-timeline-component/style.min.css"

export const Experience = () => {
  const container = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    show: {
      opacity: 1,
      y: "0px",
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    show: {
      opacity: 1,
      y: "0px",
    },
  }
  return (
    <section className="w-full mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-4 flex flex-col gap-3 max-w-screen-2xl mx-auto"
      >
        <motion.p
          variants={child}
          className="uppercase text-gray-300 text-sm md:text-lg font-semibold"
        >
          What I have done so far
        </motion.p>
        <motion.h2
          variants={child}
          className="uppercase text-violet-300 font-bold text-4xl md:text-5xl tracking-wider"
        >
          Experiences
        </motion.h2>
      </motion.div>

      <div className="my-8">
        <VerticalTimeline>
          {experiences.map((exp, idx) => {
            return <ExperienceCard key={idx} exp={exp} />
          })}
        </VerticalTimeline>
      </div>
    </section>
  )
}
