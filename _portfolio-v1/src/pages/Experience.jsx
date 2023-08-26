import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChalkboardUser,
  faSchool,
  faBuildingColumns,
  faGraduationCap,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons"
import { faSquareJs, faCss3, faReact } from "@fortawesome/free-brands-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"

export const Experience = () => {
  return (
    <motion.div
      className="px-2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
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
          date="2019"
          iconStyle={{ background: "#3e497a" }}
          icon={<FontAwesomeIcon icon={faDesktop} style={{ color: "#fff" }} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Started Web Development
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Learning vanilla HTML, CSS
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#3e487a" }}
          icon={
            <FontAwesomeIcon icon={faSquareJs} style={{ color: "#e4da05" }} />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Started making websites functional
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Learning vanilla JS
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#fff" }}
          icon={<FontAwesomeIcon icon={faCss3} style={{ color: "#2369be" }} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Introduced to TailwindCSS
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Stopped using vanilla CSS and used only Tailwind for projects
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#fff" }}
          icon={<FontAwesomeIcon icon={faReact} style={{ color: "#30bfde" }} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Started ReactJS
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Learning ReactJS for projects and future
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
    </motion.div>
  )
}
