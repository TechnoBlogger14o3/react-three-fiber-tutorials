import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState, useRef } from 'react'

/**
 * Project: Interactive 3D Gallery
 * 
 * A complete interactive gallery with:
 * - Multiple clickable 3D objects
 * - Hover effects
 * - Animations
 * - Smooth interactions
 */

function GalleryItem({ position, geometry, material, color, name, onSelect, isSelected }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += delta * 0.3
      // Hover animation
      if (hovered || isSelected) {
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.1
      } else {
        meshRef.current.position.y = position[1]
      }
    }
  })
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => onSelect(name)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={isSelected ? 1.3 : hovered ? 1.1 : 1}
    >
      {geometry}
      <meshStandardMaterial 
        color={isSelected ? 'gold' : hovered ? 'hotpink' : color}
        metalness={isSelected ? 0.8 : 0.3}
        roughness={isSelected ? 0.2 : 0.5}
      />
    </mesh>
  )
}

function App() {
  const [selected, setSelected] = useState(null)
  
  const items = [
    { name: 'cube', geometry: <boxGeometry args={[1, 1, 1]} />, color: 'red', position: [-4, 0, 0] },
    { name: 'sphere', geometry: <sphereGeometry args={[0.7, 32, 32]} />, color: 'blue', position: [-2, 0, 0] },
    { name: 'torus', geometry: <torusGeometry args={[0.6, 0.2, 16, 100]} />, color: 'green', position: [0, 0, 0] },
    { name: 'octahedron', geometry: <octahedronGeometry args={[0.7, 0]} />, color: 'purple', position: [2, 0, 0] },
    { name: 'cone', geometry: <coneGeometry args={[0.6, 1.2, 32]} />, color: 'orange', position: [4, 0, 0] },
  ]
  
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4a90e2" />
        
        <OrbitControls enablePan={false} />
        <gridHelper args={[20, 20]} />
        
        {items.map((item) => (
          <GalleryItem
            key={item.name}
            position={item.position}
            geometry={item.geometry}
            color={item.color}
            name={item.name}
            onSelect={setSelected}
            isSelected={selected === item.name}
          />
        ))}
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
      
      {/* UI */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Interactive 3D Gallery</h2>
        <p style={{ margin: '5px 0' }}>Click objects to select</p>
        <p style={{ margin: '5px 0' }}>Hover for effects</p>
        {selected && (
          <p style={{ margin: '10px 0 0 0', color: 'gold' }}>
            Selected: {selected}
          </p>
        )}
      </div>
    </div>
  )
}

export default App

