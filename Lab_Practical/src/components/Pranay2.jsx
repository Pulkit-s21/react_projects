import { useState } from "react"

export const Pranay2 = () => {
  const colors = ["red", "blue", "green", "orange"]

  let [value, setValue] = useState("yellow")
  return (
    <>
      <button
        onClick={() => {
          setValue(colors[Math.floor(Math.random() * colors.length)])
        }}
      >
        Change the color name
      </button>
      <p>{value}</p>
    </>
  )
}
