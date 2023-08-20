import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useParams } from "react-router-dom"
import { data } from "../helpers/data"

export const ProjectPage = () => {
  const { id } = useParams()
  const project = data[id]
  return (
    <div className="h-screen flex flex-col items-center p-4 gap-6">
      <h1 className="text-2xl uppercase font-bold">{project.title}</h1>
      <img className="w-96 rounded-xl" src={project.img} alt="" />
      <a href="https://github.com/Pulkit-s21" rel="noreferrer" target="_blank">
        <FontAwesomeIcon
          className="text-4xl md:text-5xl hover:animate-none"
          icon={faGithub}
          bounce
        />
      </a>
    </div>
  )
}
