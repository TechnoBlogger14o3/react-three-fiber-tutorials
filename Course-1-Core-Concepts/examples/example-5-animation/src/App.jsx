import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

/**
 * Example 5: Animation
 * 
 * Animate objects with useFrame!
 * 
 * Key Concepts:
 * - useFrame: Hook that runs every frame
 * - Delta time: Time between frames
 * - Animation patterns
 * - Performance considerations
 * 
 * useFrame:
 * - Runs 60 times per second (or your frame rate)
 * - Receives state and delta parameters
 * - Perfect for animations
 */

function RotatingBox({ position, color }) {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    // Rotate around Y axis
    meshRef.current.rotation.y += delta
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function BouncingSphere({ position, color }) {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    // Bounce up and down using sine wave
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.5
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function OrbitingCube({ position, color }) {
  const meshRef = useRef()
  const groupRef = useRef()
  
  useFrame((state, delta) => {
    // Orbit around center
    groupRef.current.rotation.y += delta * 0.5
    // Rotate the cube itself
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.z += delta
  })
  
  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

function PulsingTorus({ position, color }) {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    // Pulse scale using sine wave
    const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3
    meshRef.current.scale.set(scale, scale, scale)
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        {/* ============================================
            ROTATING ANIMATION
            Simple rotation around Y axis
        ============================================ */}
        <RotatingBox position={[-3, 2, 0]} color="red" />
        
        {/* ============================================
            BOUNCING ANIMATION
            Using sine wave for smooth motion
        ============================================ */}
        <BouncingSphere position={[0, 2, 0]} color="blue" />
        
        {/* ============================================
            ORBITING ANIMATION
            Object orbits while rotating
        ============================================ */}
        <OrbitingCube position={[3, 2, 0]} color="green" />
        
        {/* ============================================
            PULSING ANIMATION
            Scale animation using sine wave
        ============================================ */}
        <PulsingTorus position={[-3, -2, 0]} color="purple" />
        
        {/* ============================================
            MULTIPLE ANIMATIONS
            Combining different animation types
        ============================================ */}
        <mesh position={[0, -2, 0]}>
          <mesh ref={(ref) => {
            if (ref) {
              let time = 0
              const animate = () => {
                time += 0.01
                ref.rotation.x = Math.sin(time) * 0.5
                ref.rotation.y = time
                ref.position.y = Math.sin(time * 2) * 0.3
                requestAnimationFrame(animate)
              }
              animate()
            }
          }}>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </mesh>
        
        {/* ============================================
            CONDITIONAL ANIMATION
            Animate based on conditions
        ============================================ */}
        <mesh position={[3, -2, 0]}>
          <mesh ref={(ref) => {
            if (ref) {
              useFrame((state) => {
                // Rotate faster when time is even
                const speed = Math.floor(state.clock.elapsedTime) % 2 === 0 ? 2 : 0.5
                ref.rotation.y += speed * 0.01
              })
            }
          }}>
            <coneGeometry args={[0.6, 1.2, 32]} />
            <meshStandardMaterial color="cyan" />
          </mesh>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

