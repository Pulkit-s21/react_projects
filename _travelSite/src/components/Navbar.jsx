import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Ticket", link: "/ticket" },
  ]

  let [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav className="bg-red-500 text-white w-full py-2">
      {/* container */}
      <div className="md:flex items-center justify-between md:px-10 px-7 py-4">
        <div>
          <h2>AdvenTrip</h2>
        </div>

        {/* hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 md:hidden cursor-pointer transition-all duration-200 hover:text-neutral-400"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          )}
        </div>

        <ul
          className={`bg-red-500 py-8 lg:py-4 flex flex-col md:flex-row items-center gap-6 md:gap-12 absolute md:static z-auto left-0 w-full md:w-auto transition-all duration-300 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <li key={idx}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
