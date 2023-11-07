import { useState, useEffect } from "react"
// import { NavBtn } from "./NavBtn"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation()

  let Links = [
    { name: "Shop", link: "/" },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path 
          fill="#ffffff"
          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      ),
      link: "/cart",
    },
  ]

  let [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav className="bg-blue-600 text-white w-full py-2">
      {/* container */}
      <div className="md:flex items-center justify-between md:px-10 px-7 py-4">
        <div>
          <h2>Logo</h2>
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
          className={`bg-blue-600 py-8 lg:py-4 flex flex-col md:flex-row items-center gap-6 md:gap-12 absolute md:static z-auto left-0 w-full md:w-auto transition-all duration-300 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <li key={idx} className="text-xl">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
