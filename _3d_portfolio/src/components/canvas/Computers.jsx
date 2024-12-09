import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Loader } from "../Loader"

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  const [scale, setScale] = useState(".75")
  const [position, setPosition] = useState([0, -3.5, -1.5])
  const [rotation, setRotation] = useState([0, 0, 0])

  // change scale for screen size
  useEffect(() => {
    const handleScale = () => {
      const newScale = window.innerWidth <= 500 ? 0.6 : 0.75
      setScale(newScale)
    }

    handleScale() // for initial load

    window.addEventListener("resize", handleScale)
    return () => {
      window.removeEventListener("resize", handleScale)
    }
  }, [])

  // rotation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const rotationY = (scrollY / window.innerHeight) * Math.PI * 2 // change num for speed of rotation
      setRotation([0, rotationY, 0])
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // change position for screen size
  useEffect(() => {
    const handlePosition = () => {
      const newPosition =
        window.innerWidth <= 500 ? [2, -3, -1.5] : [0, -3.5, -1.5]
      setPosition(newPosition)
    }

    handlePosition() // for initial load

    window.addEventListener("resize", handlePosition)
    return () => {
      window.removeEventListener("resize", handlePosition)
    }
  }, [])

  return (
    // 3d mesh
    <mesh rotation={rotation}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      {/* scene that displays the computer */}
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [fov, setFov] = useState(25)

  // change fov for screen size
  useEffect(() => {
    const handleFov = () => {
      const newFov = window.innerWidth <= 500 ? 35 : 25
      setFov(newFov)
    }

    handleFov() // for initial load

    window.addEventListener("resize", handleFov)
    return () => {
      window.removeEventListener("resize", handleFov)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 5, 5], fov: fov }}
      gl={{ preserveDrawingBuffer: "true" }}
    >
      {/* until the scene loads, we show this from react/drei..works great as same thing */}
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2} // allows user to only rotate 3d object on a specific axis
          minPolarAngle={Math.PI / 2} // allows user to only rotate 3d object on a specific axis
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
