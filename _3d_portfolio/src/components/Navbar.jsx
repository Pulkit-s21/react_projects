import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

export const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`w-full flex items-center px-6 py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img className="w-9 h-9 object-contain" src={logo} alt="logo" />
          <p className="text-white font-semibold cursor-pointer text-sm">
            Pulkit
          </p>
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                onClick={() => {
                  setActive(link.title)
                }}
                to={`#${link.id}`}
                className={`font-medium cursor-pointer hover:text-white text-base transition-all duration-200 ${
                  active === link.title ? "text-white" : "text-secondary"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile links */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            alt="hamburger"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                    to={`#${link.id}`}
                    className={`font-medium cursor-pointer hover:text-white text-base transition-all duration-200 ${
                      active === link.title ? "text-white" : "text-secondary"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
