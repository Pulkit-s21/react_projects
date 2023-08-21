/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export const ProjectCard = (props) => {
  const navigate = useNavigate()
  return (
    <div
      className="bg-neutral-100 w-80 flex flex-col justify-around gap-2 rounded-t-xl overflow-hidden hover:shadow-xl shadow-gray-400 cursor-pointer hover:scale-105 transition-all"
      onClick={() => {
        navigate("/project/" + props.id)
      }}
    >
      <img className="w-fit" src={props.img} alt="Project Image" />
      <div className="flex flex-col p-4 gap-2 text-center items-center">
        <h1 className="capitalize text-2xl font-bold font-Cabin">
          {props.title}
        </h1>
        <p className="max-w-[25ch] text-lg text-gray-500">
          {props.description}
        </p>
      </div>
      <div className="flex justify-around py-4">
        <button className="rounded-xl bg-blue-500 text-white p-2 px-8">
          <a href={props.demo}>DEMO</a>
        </button>
        <button className="rounded-xl bg-blue-500 text-white p-2 px-6">
          <a href={props.code}>CODE</a>
        </button>
      </div>
    </div>
  )
}
