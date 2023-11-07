/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
export const PopularCard = (props) => {
  return (
    <div className="flex flex-col group justify-between  gap-4 overflow-hidden rounded-xl max-w-md">
      <img
        className="rounded-xl group-hover:scale-110 transition-all duration-500"
        src={props.img}
        alt="Place"
      />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#01acde" }} />
          <p className="font-Holtwood text-3xl">{props.name}</p>
        </div>
        <p className="font-Thasadith text-neutral-600 text-lg">
          {props.country}
        </p>
      </div>
    </div>
  )
}
