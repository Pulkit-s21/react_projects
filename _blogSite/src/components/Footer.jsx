export const Footer = () => {
  return (
    <div className="bg-neutral-900 w-full p-12 text-white">
      <p className="text-orange-500 capitalize text-lg lg:text-2xl flex justify-center items-center">&copy; made in {new Date().getFullYear()}</p>
    </div>
  )
}
