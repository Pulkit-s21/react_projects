import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "../pages/Home"
import { BlogPage } from "./BlogPage"

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Routes>
  )
}
