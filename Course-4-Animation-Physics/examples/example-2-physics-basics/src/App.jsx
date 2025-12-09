import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

/**
 * Example 2: Physics Basics
 * 
 * Basic physics simulation with Rapier!
 * 
 * Key Concepts:
 * - Physics component
 * - Rigid bodies
 * - Gravity
 * - Physics world
 */

function Box({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        <Physics gravity={[0, -9.81, 0]}>
          <Box position={[0, 5, 0]} />
        </Physics>
      </Canvas>
    </div>
  )
}

export default App

