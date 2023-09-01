import { MyData } from "../helpers/Mydata"
export const MyInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="uppercase text-5xl font-Cabin text-blue-300">about me</h1>
      <ul className="lg:max-w-xl text-lg md:text-xl font-Cabin text-white flex flex-col gap-4">
        {MyData.map((info, idx) => {
          return <li className="" key={idx}>{info.info}</li>
        })}
      </ul>
    </div>
  )
}
