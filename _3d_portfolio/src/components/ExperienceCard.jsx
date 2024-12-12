import { VerticalTimelineElement } from "react-vertical-timeline-component"

export const ExperienceCard = ({ exp }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={exp.date}
      iconStyle={{ background: exp.iconStyle }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          {/*
          //TODO: Change company icons
             */}
          <img
            src={exp.icon}
            alt={exp.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold lg:text-2xl">{exp.title}</h3>
        <p className="text-gray-300">{exp.company_name}</p>
      </div>

      <ul className="my-4">
        {exp.points.map((point, idx) => {
          return (
            <li className="list-disc text-xs lg:text-sm pt-1" key={idx}>
              {point}
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
