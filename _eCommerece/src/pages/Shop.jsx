import { useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { FilterBtn } from "./../components/FilterBtn"
import { Data } from "../helpers/Data"
import { Toaster } from "react-hot-toast"

export const Shop = () => {
  const [items, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = Data.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col gap-4 text-center p-6">
        <h1 className="text-3xl text-blue-500 font-bold">Shopping Website</h1>

        <FilterBtn
          menuItems={menuItems}
          filterItems={filterItems}
          setItems={setItems}
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <ProductCard items={items} />
        </div>
      </div>
    </>
  )
}
