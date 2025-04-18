// components/3d/LogoSphere.tsx
"use client" // This makes it a client component

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, useTexture } from "@react-three/drei"
import { Suspense } from "react"

type LogoSphereProps = {
  textureUrl: string
  scale: number
}

function Sphere({ textureUrl, scale }: { textureUrl: string, scale: number }) {
  const texture = useTexture(textureUrl)

  return (
    <mesh scale={[scale, scale, scale]} rotation={[0.2, 0.2, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function LogoSphere({ textureUrl, scale }: LogoSphereProps) {
  return (
    <div className="h-40 w-40">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Sphere textureUrl={textureUrl} scale={scale} />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}
