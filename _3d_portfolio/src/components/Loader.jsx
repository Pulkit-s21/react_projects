import { Html, useProgress } from "@react-three/drei"

export const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <p className="text-base mt-12 font-bold text-[#f1f1f1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
