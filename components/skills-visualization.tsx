"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, Float, Environment, OrbitControls, useTexture } from "@react-three/drei"

// Logo component that will be rendered in 3D
function LogoBox({ position, name, color }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Create a texture with the logo name
  const texture = useTexture(`/placeholder.svg?height=200&width=200&text=${name}`)

  // Animation for the logo
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={clicked ? 1.2 : hovered ? 1.1 : 1}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial map={texture} color={hovered ? color : "white"} metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  )
}

// Main scene component
function Scene() {
  const { viewport } = useThree()

  // Define skills with positions and colors
  const skills = [
    { name: "HTML", position: [-4, 2, 0], color: "#e34c26" },
    { name: "CSS", position: [-2, -1, 2], color: "#264de4" },
    { name: "JS", position: [0, 3, -2], color: "#f0db4f" },
    { name: "React", position: [3, 0, 3], color: "#61dafb" },
    { name: "Node", position: [-3, -2, -3], color: "#68a063" },
    { name: "MongoDB", position: [4, 2, -1], color: "#4db33d" },
    { name: "Express", position: [1, -2, -2], color: "#000000" },
    { name: "Figma", position: [-1, 1, 4], color: "#f24e1e" },
    { name: "AWS", position: [2, -3, 1], color: "#ff9900" },
    { name: "Git", position: [-4, 0, -2], color: "#f05032" },
    { name: "Python", position: [0, -4, 0], color: "#306998" },
    { name: "TypeScript", position: [3, 3, -3], color: "#007acc" },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />

      {/* Add orbit controls for interaction */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />

      {/* Render all skill logos */}
      {skills.map((skill, index) => (
        <LogoBox key={index} name={skill.name} position={skill.position} color={skill.color} />
      ))}

      {/* Central text */}
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

export default function SkillsVisualization() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-[500px] w-full rounded-3xl overflow-hidden border border-border shadow-lg bg-card/30 backdrop-blur-lg">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
