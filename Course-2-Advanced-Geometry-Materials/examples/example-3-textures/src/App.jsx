import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

/**
 * Example 3: Textures
 * 
 * Load and apply textures to 3D objects!
 * 
 * Key Concepts:
 * - useTexture: Load texture images
 * - Texture mapping
 * - Multiple texture types
 * - UV coordinates
 */

function TexturedBox({ position, textureUrl }) {
  // useTexture loads and caches textures
  // For demo, we'll use a colored material
  // In real usage: const texture = useTexture(textureUrl)
  
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="orange"
        // map={texture} // Apply texture when loaded
      />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        <TexturedBox position={[-2, 0, 0]} />
        <TexturedBox position={[0, 0, 0]} />
        <TexturedBox position={[2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App

