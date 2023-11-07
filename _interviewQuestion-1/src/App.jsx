import { useState, useEffect, createContext } from "react"
import { AddressCard } from "./components/AddressCard"
export const Context = createContext()

function App() {
  let [counter, setCounter] = useState(0)
  let [addressData, setAddressData] = useState()

  useEffect(() => {
    async function handleAddressData() {
      const data = await fetch(
        `https://random-data-api.com/api/address/random_address?size=${counter}`
      )
      const json = await data.json()
      setAddressData(json)
    }
    handleAddressData()
  }, [counter])

  return (
    <Context.Provider value={{ addressData }}>
      <div className="flex flex-col gap-4 items-center">
        {/* btn */}
        <div>
          <button
            onClick={() => {
              setCounter((prev) => prev + 1)
            }}
          >
            Click
          </button>
          {counter}
        </div>

        {/* addressCard */}
        <AddressCard />
      </div>
    </Context.Provider>
  )
}

export default App
