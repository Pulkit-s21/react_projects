import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useParams } from "react-router-dom"
import { data } from "../helpers/data"

export const ProjectPage = () => {
  const { id } = useParams()
  const project = data[id]
  return (
    <div className="h-screen m-auto flex flex-col justify-center items-center p-4 gap-6">
      <h1 className="text-3xl lg:text-7xl capitalize font-bold font-Cabin">
        {project.title}
      </h1>
      <img
        className="rounded-xl h-56 lg:h-full"
        src={project.img}
        alt="Project Image"
      />
      <p className="text-xl lg:text-3xl text-gray-600 max-w-xl text-center ">
        {project.description}
      </p>
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
