import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 4: PBR Materials
 * 
 * Advanced Physically Based Rendering materials!
 * 
 * Key Concepts:
 * - Metalness and roughness
 * - Normal maps
 * - Ambient occlusion
 * - Material properties
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        {/* Metallic material */}
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={1}
            roughness={0.1}
          />
        </mesh>
        
        {/* Rough material */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#8b4513"
            metalness={0}
            roughness={1}
          />
        </mesh>
        
        {/* Balanced PBR */}
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#ff6b6b"
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

