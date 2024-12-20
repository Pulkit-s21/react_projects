import { Points, Preload, PointMaterial, Point } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useState, useRef, Suspense } from "react"
import * as random from "maath/random/dist/maath-random.esm"
import { Loader } from "../Loader"

const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(500), { radius: 1.2 })

  // this makes the stars move
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={2}
          sizeAttenuation="true"
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<Loader />}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
