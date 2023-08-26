/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export const ProjectCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className="
    bg-white
    max-w-md 
    grid
    gap-2 
    rounded-t-xl overflow-hidden 
    hover:shadow-xl shadow-gray-400 
    cursor-pointer hover:scale-105 transition-all
    ">
      <div className=""
        onClick={() => {
          navigate("/projects/" + props.id)
        }}
      >
        <img loading="lazy" className="h-72 border-b-2" src={props.img} alt="Project Image" />
        <div className="grid place-content-center p-4 gap-2 text-center items-center">
          <h1 className="capitalize text-2xl font-bold font-Cabin">
            {props.title}
          </h1>
          <p className="max-w-[25ch] text-lg text-gray-500">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex justify-around py-4 font-Cabin">
        <button className="rounded-lg bg-violet-500 text-white p-2 px-8">
          <a href={props.demo}>DEMO</a>
        </button>
        <button className="rounded-lg bg-orange-500 text-white p-2 px-8">
          <a href={props.code}>CODE</a>
        </button>
      </div>
    </div>
  )
}
