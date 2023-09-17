import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Shop } from "./pages/Shop"
import { Navbar } from "./components/Navbar"
import { Cart } from "./pages/Cart"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  )
}

export default App
