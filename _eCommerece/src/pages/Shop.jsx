import { useState } from "react"
import { Data } from "../helpers/data"
import { ProductCard } from "../components/ProductCard"
import { FilterBtn } from "./../components/FilterBtn"

export const Shop = () => {
  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = Data.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }

  return (
    <div className="flex flex-col gap-4 text-center p-6">
      <h1 className="text-3xl text-blue-500 font-bold">Shopping Website</h1>

      <FilterBtn
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <ProductCard item={item} />
      </div>
    </div>
  )
}
