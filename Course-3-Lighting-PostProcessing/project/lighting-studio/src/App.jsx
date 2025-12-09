import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Project: Lighting Studio
 * 
 * Interactive lighting setup tool
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

