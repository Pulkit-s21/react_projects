import "./App.css"
import { BrowserRouter as Router} from "react-router-dom"
import { Footer } from "./components/Footer"
import { AnimatedRoutes } from "./components/AnimatedRoutes"

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App
