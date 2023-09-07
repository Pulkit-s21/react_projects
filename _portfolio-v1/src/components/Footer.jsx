import { SocialIcons } from "./SocialIcons"

export const Footer = () => {
  return (
    <div
      className="
    flex flex-col gap-8
    bg-blue-900
    justify-center
    items-center
    p-6
    "
    >
      <SocialIcons />
      <p className="text-xl font-bold text-white font-Cabin">
        &copy; updated as of {new Date().getFullYear()}
      </p>
    </div>
  )
}
