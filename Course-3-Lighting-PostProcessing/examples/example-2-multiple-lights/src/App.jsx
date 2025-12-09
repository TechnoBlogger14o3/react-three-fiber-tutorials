import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 2: Multiple Lights
 * 
 * Combine different light types effectively!
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 3, 0]} intensity={0.6} color="#ff6b6b" />
        <spotLight position={[0, 5, -5]} angle={0.3} intensity={0.7} color="#4ecdc4" />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

