import { useParams } from "react-router-dom"
import { data } from "../helpers/data"

export const BlogPage = () => {
  const { id } = useParams()
  const blog = data[id]
  return (
    <div>
      <h1>{blog.category}</h1>
      <img src={blog.img} alt="Blog Image" />
    </div>
  )
}
