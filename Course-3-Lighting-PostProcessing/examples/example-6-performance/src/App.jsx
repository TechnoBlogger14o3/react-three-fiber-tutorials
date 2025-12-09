import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'

/**
 * Example 6: Performance
 * 
 * Monitor and optimize lighting performance
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <OrbitControls />
        <Stats />
        <gridHelper args={[10, 10]} />
        
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

