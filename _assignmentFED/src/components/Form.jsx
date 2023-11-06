import { useState } from "react"
import { Data } from "../helpers/Data"

export const Form = () => {
  const [medicine, setMedicine] = useState()
  let [quantity, setQuantity] = useState(0)
  let [list, setList] = useState([])
  let [totalAmount, setTotalAmount] = useState(0)

  return (
    <div className="flex flex-col gap-4 p-2">
      <select name="medicine" className="p-2 text-center text-lg">
        <option value="Please select the medicine" disabled>
          Please select the medicine
        </option>

        {Data.map((med, idx) => (
          <option
            key={idx}
            value={med.name}
            onClick={(e) => {
              setMedicine(e.target.value)
              {
                quantity != 0 && setQuantity(0)
              }
            }}
            className="text-lg"
          >
            {med.name}
          </option>
        ))}
      </select>

      {Data.filter((meds) => meds.name == medicine).map((wanted, idx) => (
        <div key={idx} className="flex flex-col gap-4 items-end">
          <div className="flex gap-2">
            <label className="text-lg md:text-2xl" htmlFor="quantity">
              Quantity Available :{" "}
            </label>
            <input
              name="quantity"
              type="number"
              disabled
              value={wanted.quantity}
              className="outline-none text-center"
            />
          </div>

          <div className="flex gap-2">
            <label className="text-lg md:text-2xl" htmlFor="want">
              Quantity Needed :{" "}
            </label>
            <input
              name="want"
              type="number"
              value={Math.floor(quantity)}
              onChange={(e) => setQuantity(e.target.value)}
              className="outline-none text-center"
            />
          </div>

          {quantity > wanted.quantity &&
            alert(
              "Available amount is less than desired...Sorry for inconvience"
            )}

          <div className="flex gap-2">
            <label className="text-lg md:text-2xl" htmlFor="price">
              Price / Tablet :
            </label>
            <input
              name="price"
              type="number"
              disabled
              value={wanted.price}
              className="outline-none text-center"
            />
          </div>

          <div className="flex gap-2">
            <label className="text-lg md:text-2xl" htmlFor="totalPrice">
              Total :{" "}
            </label>
            <input
              name="totalPrice"
              type="number"
              disabled
              value={Math.floor(wanted.price * quantity)}
              className="outline-none text-center"
            />
          </div>
          <button
            onClick={() => {
              let order = {}
              order.med = wanted.name
              order.price = wanted.price
              order.quantity = quantity
              order.total = Math.floor(wanted.price * quantity)
              setTotalAmount((current) => current + order.total)
              setList((current) => [...current, order])
            }}
          >
            {console.log(list)}
            Buy
          </button>
        </div>
      ))}

      <table className="border-2 text-center mx-2">
        <tr className="border-2 divide-y-2">
          <th className="border-2 px-1 md:px-4">Medicine</th>
          <th className="border-2 px-1 md:px-4">Price / Tablet</th>
          <th className="border-2 px-1 md:px-4">Quantity</th>
          <th className="border-2 px-1 md:px-4">Med Total</th>
        </tr>
        {list.map((medOrdered, idx) => (
          <tr className="p-2" key={idx}>
            <td className="border-2 text-lg md:text-2xl md:px-4">
              {medOrdered.med}
            </td>
            <td className="border-2 text-lg md:text-2xl md:px-4">
              &#x20b9; {medOrdered.price}
            </td>
            <td className="border-2 text-lg md:text-2xl md:px-4">
              {medOrdered.quantity}
            </td>
            <td className="border-2 text-lg md:text-2xl md:px-4">
              {medOrdered.total}
            </td>
          </tr>
        ))}
      </table>
      {totalAmount != 0 && (
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-xl">
            Total Amount :{" "}
            <span className="font-bold text-green-500 text-2xl md:text-3xl">
              &#x20b9; {totalAmount}
            </span>
          </h3>
          <p className="text-sm">
            GST of <span className="font-bold text-base">8%</span> applicable
          </p>
          <h3 className="text-xl">
            Total Amount Payable:{" "}
            <span className="font-bold text-green-500 text-2xl md:text-3xl">
              &#x20b9; {Math.floor(totalAmount + 0.08 * totalAmount)}
            </span>
          </h3>
        </div>
      )}
    </div>
  )
}
