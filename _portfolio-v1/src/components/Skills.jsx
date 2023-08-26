import { skillData } from "../helpers/skillData"
import { SkillItem } from "./SkillItem"
export const Skills = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center p-12">
      <h1 className="text-5xl md:text-7xl font-Cabin lg:text-9xl text-blue-900">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {skillData.map((skill) => {
          return (
            <SkillItem
              key={skill.id}
              img={skill.img}
              skillName={skill.skillName}
            />
          )
        })}
      </div>
    </div>
  )
}
