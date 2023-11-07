import Hero from "../assets/hero.jpg"

export const HeroArea = () => {
  return (
    <>
      <div className="text-center w-full ">
        <img src={Hero} alt="Trip Image" className="w-full object-cover absolute mix-blend-overlay"/>
        <h2 className="text-white">
          Plan the trip of your life because planned trip are the best trip
        </h2>
      </div>
    </>
  )
}
