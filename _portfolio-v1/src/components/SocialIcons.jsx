import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export const SocialIcons = () => {
  return (
    <div className="flex gap-8 text-white">
      <a
        href="https://www.linkedin.com/in/pulkit-saxena-721815169/"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-4xl md:text-5xl hover:animate-none"
          icon={faLinkedin}
          bounce
        />
      </a>
      <a href="https://github.com/Pulkit-s21" rel="noreferrer" target="_blank">
        <FontAwesomeIcon
          className="text-4xl md:text-5xl hover:animate-none"
          icon={faGithub}
          bounce
        />
      </a>
      <a
        href="mailto:pulkitsaxena795@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-4xl md:text-5xl hover:animate-none"
          icon={faEnvelope}
          bounce
        />
      </a>
    </div>
  )
}
