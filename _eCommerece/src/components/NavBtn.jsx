/* eslint-disable react/prop-types */
export const NavBtn = (props) => {
  return (
    <button className="px-6 py-2 text-white rounded-md bg-green-500 hover:bg-green-600 transition-colors">
      {props.children}
    </button>
  )
}
