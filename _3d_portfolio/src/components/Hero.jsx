import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas"

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="px-8 absolute inset-0 top-[120px] mx-auto flex items-start gap-5">
        {/* Line div */}
        <div className="flex flex-col justify-center items-center mt-5 overflow-y-hidden">
          <div className="w-5 h-5 rounded-full bg-[#915eff] z-[6]"></div>
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            className="w-1 h-40 lg:h-80 violet-gradient z-[5]"
          ></motion.div>
        </div>

        {/* Dev info div */}
        <div>
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] mt-2 text-white">
            Hi, I'am{" "}
            <span className="text-violet-400 font-semibold">Pulkit</span>
          </h1>
          <p className="text-gray-200 sm:text-[20px] lg:text-[30px] max-w-[50ch] lg:max-w-[30ch]">
            Web developer excelling in frontend, refining backend skills,
            passionate about <br className="block md:hidden" />
            crafting seamless digital experiences.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}
