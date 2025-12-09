import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { useState } from 'react'

/**
 * Example 1: React Spring
 * 
 * Animations with React Spring!
 * 
 * Key Concepts:
 * - useSpring hook
 * - animated component
 * - Spring animations
 * - Smooth transitions
 */

function AnimatedBox({ position }) {
  const [active, setActive] = useState(false)
  
  const { scale, rotation } = useSpring({
    scale: active ? 1.5 : 1,
    rotation: active ? [Math.PI, Math.PI, 0] : [0, 0, 0],
    config: { tension: 200, friction: 20 }
  })
  
  return (
    <animated.mesh
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </animated.mesh>
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
        
        <AnimatedBox position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App

