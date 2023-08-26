import "../styles/NavBar.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ReorderIcon from "@mui/icons-material/Reorder"

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    setExpanded(false)
  },[location])
  return (
    <nav className="navbar bg-blue-900 text-white" id={expanded ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpanded((prev) => !prev)
          }}
          className="mr-5 bg-transparent cursor-pointer border-none"
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link className="m-5 text-xl" to="/">
          Home
        </Link>
        <Link className="m-5 text-xl" to="/projects">
          Projects
        </Link>
        <Link className="m-5 text-xl" to="/experience">
          Experience
        </Link>
      </div>
    </nav>
  )
}
