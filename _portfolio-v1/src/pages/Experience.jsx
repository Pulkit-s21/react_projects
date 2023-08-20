import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChalkboardUser,
  faSchool,
  faBuildingColumns,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export const Experience = () => {
  return (
    <div className="px-2">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faChalkboardUser} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            DC Model Sr Sec School
          </h3>
          <p className="">Elementary School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Govt Model Sr Sec School, 19-C
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Non- Medical
          </p>
          <p className="">High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#fff", color: "red" }}
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Chitkara University
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Bachelors in Computer Applications
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2024"
          iconStyle={{ background: "#fff", color: "red" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Chitkara University
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Masters in Computer Applications
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
