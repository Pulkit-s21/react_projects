import { ProjectCard } from "../components/ProjectCard"
import { data } from "../helpers/data"

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-items-center">
      {data.map((item, idx) => {
        return (
          <ProjectCard
            id={idx}
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            code={item.code}
            demo={item.demo}
          />
        )
      })}
    </div>
  )
}
