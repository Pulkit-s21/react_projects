import { motion } from "framer-motion"
import { services } from "../constants/index"
import { TiltCard } from "./TiltCard"

export const About = () => {
  const container = {
    hidden: { opacity: 0, y: "-100px" },
    show: {
      opacity: 1,
      y: "0px",
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  }

  const pTags = {
    hidden: { opacity: 0, y: "-100px" },
    show: { opacity: 1, y: "0px" },
  }

  return (
    <section className="w-full mx-auto pb-12">
      <div className="grid grid-cols-1 mx-auto gap-5 px-4 max-w-screen-2xl">
        {/* text div */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-2"
        >
          <motion.p
            variants={pTags}
            className="uppercase text-gray-300 text-sm md:text-lg font-semibold"
          >
            introduction
          </motion.p>
          <motion.p
            variants={pTags}
            className="uppercase text-violet-300 font-bold text-4xl md:text-5xl tracking-wider"
          >
            overview.
          </motion.p>
          <motion.p
            variants={pTags}
            className="text-gray-200 tracking-wide md:text-lg md:max-w-[80ch]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            similique alias dolores, corrupti, vitae quis explicabo error sit
            debitis neque beatae dolorum deserunt necessitatibus aliquid
            molestiae nobis sint? Qui necessitatibus sit praesentium, voluptas
            commodi voluptatibus, illo nulla esse quas corrupti eaque non ipsam
            distinctio quia ad veniam laboriosam unde laudantium.
          </motion.p>
        </motion.div>

        {/* cards div */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4"
        >
          {services.map((service, idx) => {
            return (
              <TiltCard key={idx} icon={service.icon} title={service.title} />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
