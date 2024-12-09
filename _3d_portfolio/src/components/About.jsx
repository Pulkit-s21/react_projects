import { TechData } from "../utils/TechData"
import { TiltCard } from "./TiltCard"

export const About = () => {
  return (
    <section className="w-full mx-auto">
      <div className="grid grid-cols-1 mx-auto gap-5 px-4 max-w-screen-2xl">
        {/* text div */}
        <div className="grid grid-cols-1 gap-2">
          <p className="uppercase text-gray-300 text-sm md:text-lg font-semibold">
            introduction
          </p>
          <p className="uppercase text-violet-300 font-bold text-4xl md:text-5xl tracking-wider">
            overview.
          </p>
          <p className="text-gray-200 tracking-wide md:text-lg md:max-w-[80ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            similique alias dolores, corrupti, vitae quis explicabo error sit
            debitis neque beatae dolorum deserunt necessitatibus aliquid
            molestiae nobis sint? Qui necessitatibus sit praesentium, voluptas
            commodi voluptatibus, illo nulla esse quas corrupti eaque non ipsam
            distinctio quia ad veniam laboriosam unde laudantium.
          </p>
        </div>

        {/* cards div */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
          {TechData.map((tech, idx) => {
            return <TiltCard key={idx} icon={tech.icon} title={tech.title} />
          })}
        </div>
      </div>
    </section>
  )
}
