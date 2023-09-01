/* eslint-disable react/prop-types */
import { data } from "../helpers/data"
export const Filters = ({ filterCategories, filterItems, setItems }) => {
  return (
    <div className="overflow-x-scroll flex gap-6 items-center p-4 bg-neutral-700">
      <button
        className="bg-orange-500 capitalize text-white py-1 px-4 rounded-md md:text-lg lg:text-xl"
        onClick={() => setItems(data)}
      >
        all
      </button>
      {filterCategories.map((val, idx) => (
        <button
          className="bg-orange-500 capitalize text-white py-1 px-4 rounded-md md:text-lg lg:text-xl"
          key={idx}
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
    </div>
  )
}
