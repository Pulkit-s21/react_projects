import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { AnimatedRoutes } from "./components/AnimatedRoutes"

function App() {
  return (
    <div className="App font-serif overflow-hidden">
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
