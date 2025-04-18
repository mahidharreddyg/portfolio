"use client" // This makes it a client component

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from 'three'  // Import THREE to use it for material properties

type LogoSphereProps = {
  modelUrl: string
  scale: number
  positionY?: number  // Optional prop to adjust Y position
}

function Logo({ modelUrl, scale, positionY }: { modelUrl: string; scale: number; positionY?: number }) {
  const { scene } = useGLTF(modelUrl)  // Use useGLTF to load .glb files

  // Set material properties to ensure color display
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,  // White color for the material
        roughness: 0.5,   // Moderate roughness for reflection
        metalness: 0.5,   // Allow some reflection for shininess
        emissive: 0xffffff,  // Optional: Add emissive light for more vivid appearance
        emissiveIntensity: 0.5,  // Optional: intensity of emissive light
      })
    }
  })

  return (
    <mesh scale={[scale, scale, scale]} position={[0, positionY || 0, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default function LogoSphere({ modelUrl, scale, positionY }: LogoSphereProps) {
  return (
    <div className="h-40 w-40">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Add an additional light source */}
        <ambientLight intensity={0.4} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={2} color="#ffffff" />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Logo modelUrl={modelUrl} scale={scale} positionY={positionY} />
        </Suspense>

        {/* OrbitControls to rotate the logo */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          minPolarAngle={Math.PI / 3}  // Limit vertical rotation (up/down)
          maxPolarAngle={Math.PI / 3}  // Limit vertical rotation (up/down)
          maxAzimuthAngle={Math.PI / 2}  // Limit horizontal rotation (left/right)
          minAzimuthAngle={-Math.PI / 2} // Limit horizontal rotation (left/right)
        />
      </Canvas>
    </div>
  )
}
