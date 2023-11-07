import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Ticket } from "./pages/Ticket"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
