import { SocialIcons } from "./SocialIcons"

export const Footer = () => {
  return (
    <div
      className="
    flex flex-col gap-8
    bg-blue-900
    w-full
    justify-center
    items-center
    p-6 pt-12
    "
    >
      <SocialIcons />
      <p className="text-xl font-bold text-white">&copy; As of {new Date().getFullYear()}</p>
    </div>
  )
}
