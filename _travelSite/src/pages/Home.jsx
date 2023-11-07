// import { HeroArea } from "../components/HeroArea"

import { PopularArea } from "../components/PopularArea"
import { TravelTips } from "../components/TravelTips"

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <HeroArea /> */}
      <PopularArea />
      <TravelTips />
    </div>
  )
}
