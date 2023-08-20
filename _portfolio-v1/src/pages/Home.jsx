import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { SocialIcons } from "../components/SocialIcons"

export const Home = () => {
  return (
    <div className="font-serif">
      <div
        className="
    h-screen
    bg-blue-900
    text-white
    flex flex-col gap-8
    items-center
    text-center
    justify-center
    p-4
    "
      >
        <About />
        <SocialIcons />
      </div>
      <Skills />
    </div>
  )
}
