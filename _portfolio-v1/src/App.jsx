import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Experience } from "./pages/Experience"
import { Footer } from "./components/Footer"
import { ProjectPage } from "./pages/ProjectPage"

function App() {
  return (
    <div className="App font-serif">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage/>} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
