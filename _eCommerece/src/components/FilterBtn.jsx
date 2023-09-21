import { Data } from "../helpers/Data"

/* eslint-disable react/prop-types */

export const FilterBtn = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className="overflow-x-scroll flex gap-6 items-center p-4">
      <button
        onClick={() => setItems(Data)}
        className="bg-blue-600 px-6 py-2 rounded-md text-white"
      >
        All
      </button>
      {menuItems.map((val, idx) => (
        <button
          onClick={() => filterItems(val)}
          className="bg-blue-600 px-6 py-2 rounded-md text-white"
          key={idx}
        >
          {val}
        </button>
      ))}
    </div>
  )
}
