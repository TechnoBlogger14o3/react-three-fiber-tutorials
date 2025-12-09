import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

/**
 * Example 6: Environment
 * 
 * Set up environment maps and HDRI!
 * 
 * Key Concepts:
 * - Environment component
 * - HDRI images
 * - Reflections
 * - IBL (Image-Based Lighting)
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Environment provides HDRI lighting and reflections */}
        <Environment preset="sunset" />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        {/* Reflective sphere */}
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="white"
            metalness={1}
            roughness={0}
          />
        </mesh>
        
        {/* Another reflective object */}
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#4ecdc4"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

