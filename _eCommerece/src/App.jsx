import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Shop } from "./pages/Shop"
import { Navbar } from "./components/Navbar"
import { Cart } from "./pages/Cart"
import { ShopContextProvider } from "./context/ShopContext"

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App
