import { BlogCard } from "../components/BlogCard"
import { Filters } from "../components/Filters"
import { Lp1 } from "../components/lp1"
import { Header } from "../components/Header"
import { data } from "../helpers/data"
import { useState } from "react"

export const Home = () => {
  const [items, setItems] = useState(data)
  const filterCategories = [...new Set(data.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = data.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }
  return (
    <>
      <Header />
      <Lp1 title={"Hello"}/>
      <Filters
        filterCategories={filterCategories}
        filterItems={filterItems}
        setItems={setItems}
      />
      <BlogCard items={items} />
    </>
  )
}
