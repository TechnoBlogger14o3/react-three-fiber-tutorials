import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Project: Material Showcase
 * 
 * Interactive material library with various materials
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        {/* Various materials */}
        <mesh position={[-3, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="red" metalness={0.5} roughness={0.5} />
        </mesh>
        
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="blue" metalness={1} roughness={0.1} />
        </mesh>
        
        <mesh position={[3, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="green" metalness={0} roughness={1} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

