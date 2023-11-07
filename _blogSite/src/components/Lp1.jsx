// import React from 'react'
import { useState } from "react"
export const Lp1 = () => {
  const [input, setInput] = useState("")
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={input}
        required
      />

      <p className="text-blue-500">{input}</p>
    </>
  )
}
