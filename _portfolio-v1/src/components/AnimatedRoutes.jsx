import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Experience } from "../pages/Experience"
import { ProjectPage } from "../pages/ProjectPage"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </AnimatePresence>
  )
}
