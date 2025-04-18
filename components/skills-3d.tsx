"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, Environment, useTexture, OrbitControls } from "@react-three/drei"

function SkillLogo({ position, name, rotation = [0, 0, 0] }) {
  const meshRef = useRef()
  const texture = useTexture(`/placeholder.svg?height=200&width=200&text=${name}`)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  )
}

function SkillsScene() {
  const skills = [
    { name: "HTML", position: [-4, 2, 0] },
    { name: "CSS", position: [-2, -1, 2] },
    { name: "JS", position: [0, 3, -2] },
    { name: "React", position: [3, 0, 3] },
    { name: "Node", position: [-3, -2, -3] },
    { name: "MongoDB", position: [4, 2, -1] },
    { name: "Express", position: [1, -2, -2] },
    { name: "Figma", position: [-1, 1, 4] },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

      {skills.map((skill, index) => (
        <SkillLogo key={index} name={skill.name} position={skill.position} />
      ))}

      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        color="#6366f1"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        SKILLS
      </Text>
    </>
  )
}

export default function Skills3D() {
  return (
    <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-border shadow-lg">
      <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading 3D Skills...</div>}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <SkillsScene />
        </Canvas>
      </Suspense>
    </div>
  )
}
