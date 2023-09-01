export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-black h-64">
      <h1 className="text-5xl lg:text-7xl text-white font-semibold">
        Bl<span className="text-orange-500">og Post</span>
      </h1>
      <p className="text-white text-sm lg:text-lg">Source of your information</p>
    </div>
  )
}
