import { PopularCard } from "./PopularCard"
import NewYork from "../assets/newYork.jpg"
import Paris from "../assets/paris.jpg"
import London from "../assets/london.jpg"

export const PopularArea = () => {
  let Popular = [
    { img: Paris, name: "Paris", country: "France" },
    { img: NewYork, name: "New York", country: "America" },
    { img: London, name: "London", country: "England" },
  ]
  return (
    <div className="flex flex-col p-4 gap-6">
      <div className="flex">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-wider">
            Popular Places
          </h2>
          <p className="text-lg text-neutral-500 tracking-wider">
            let&apos;s enjoy this beautiful earth
          </p>
        </div>
        <div>{/* Something else to be paired with the title */}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Popular.map((place, idx) => (
          <PopularCard
            key={idx}
            img={place.img}
            name={place.name}
            country={place.country}
          />
        ))}
      </div>
    </div>
  )
}
