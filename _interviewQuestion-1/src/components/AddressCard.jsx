/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Context } from "../App"

export const AddressCard = () => {
  const { addressData } = useContext(Context)
  return (
    <div
      className="
    grid 
    grid-cols-1 
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    p-4 gap-4
    "
    >
      {addressData?.map((props) => (
        <div className="bg-blue-400 p-4" key={props.id}>
          <p>Street Address : {props.street_address}</p>
          <p>Street Name : {props.street_name}</p>
          <p>City : {props.city}</p>
          <p>State : {props.state}</p>
        </div>
      ))}
    </div>
  )
}
