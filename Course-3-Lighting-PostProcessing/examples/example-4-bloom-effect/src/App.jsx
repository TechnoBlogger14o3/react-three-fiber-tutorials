import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 4: Bloom Effect
 * 
 * Glow and bloom effects
 * Note: Requires postprocessing library for full implementation
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        {/* Emissive material for glow effect */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="cyan"
            emissive="cyan"
            emissiveIntensity={1}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

