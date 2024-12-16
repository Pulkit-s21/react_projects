import { technologies } from "../constants"
import { BallCanvas } from "./canvas"

export const Tech = () => {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-wrap gap-10 mx-auto max-w-screen-2xl justify-center">
        {technologies.map((tech, idx) => {
          return (
            <div className="w-36 h-3w-36">
              <BallCanvas key={idx} icon={tech.icon} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
