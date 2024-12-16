import { lazy, Suspense } from "react"
import { projects } from "../constants"

const ProjectCard = lazy(() => import("./ProjectCard"))

export const Works = () => {
  return (
    <section id="work" className="w-full mx-auto ">
      <div className="grid grid-cols-1 mx-auto gap-5 px-4 max-w-screen-2xl">
        <span className="uppercase text-gray-300 text-sm md:text-lg font-semibold">
          my work
        </span>
        <h3 className="uppercase text-violet-300 font-bold text-4xl md:text-5xl tracking-wider">
          Projects.
        </h3>
        <p className="text-gray-200 tracking-wide md:text-lg md:max-w-[80ch]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          corporis laboriosam minus harum animi, numquam consequuntur quisquam
          praesentium adipisci rerum earum perferendis possimus veritatis? Nemo
          odio incidunt facilis enim ut!
        </p>

        <Suspense fallback="Loading...">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  name={project.name}
                  desc={project.description}
                  img={project.image}
                  live={project.live}
                  github={project.github}
                  tags={project.tags}
                />
              )
            })}
          </div>
        </Suspense>
      </div>
    </section>
  )
}
