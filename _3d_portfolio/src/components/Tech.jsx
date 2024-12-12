import { technologies } from "../constants"
import { BallCanvas } from "./canvas"

export const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {technologies.map((tech, idx) => {
        return (
          <div className="w-36 h-3w-36">
            <BallCanvas key={idx} icon={tech.icon} />
          </div>
        )
      })}
    </div>
  )
}
