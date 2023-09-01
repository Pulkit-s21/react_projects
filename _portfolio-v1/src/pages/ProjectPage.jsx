import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useParams } from "react-router-dom"
import { data } from "../helpers/data"

export const ProjectPage = () => {
  const { id } = useParams()
  const project = data[id]
  return (
    <div className="min-h-screen m-auto flex flex-col justify-center items-center p-4 gap-6">
      <h1 className="text-3xl lg:text-7xl capitalize font-bold font-Cabin">
        {project.title}
      </h1>
      <div className="grid md:grid-cols-2 gap-8 p-4">
        <div className={`max-w-6xl rounded-xl`}>
          <img className="rounded-xl" src={project.img} alt="Project Image" />
        </div>
        <ol className="flex flex-col justify-evenly items-left gap-4 text-left">
          <ul className="text-xl lg:text-3xl max-w-2xl">
            {project.description}
          </ul>
          <ul className="text-lg lg:text-2xl text-neutral-600 max-w-3xl">
            {project.about}
          </ul>
        </ol>
      </div>
      <a href={project.code} rel="noreferrer" target="_blank">
        <FontAwesomeIcon
          className="text-4xl md:text-5xl hover:animate-none"
          icon={faGithub}
          bounce
        />
      </a>
    </div>
  )
}
