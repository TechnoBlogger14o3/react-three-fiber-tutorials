import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

/**
 * Example 6: Refs
 * 
 * Use refs to control 3D objects programmatically!
 * 
 * Key Concepts:
 * - useRef: Access Three.js objects directly
 * - Direct manipulation
 * - Imperative control
 * - Combining with animations
 * 
 * Refs allow you to:
 * - Access Three.js object properties
 * - Manipulate objects imperatively
 * - Control animations
 * - Integrate with external libraries
 */

function ControlledBox({ position, color }) {
  const meshRef = useRef()
  const [scale, setScale] = useState(1)
  
  // Access the Three.js object through ref
  const handleClick = () => {
    if (meshRef.current) {
      // Direct manipulation
      meshRef.current.material.color.set('hotpink')
      setScale(scale === 1 ? 1.5 : 1)
      meshRef.current.scale.set(scale === 1 ? 1.5 : 1, scale === 1 ? 1.5 : 1, scale === 1 ? 1.5 : 1)
    }
  }
  
  return (
    <mesh ref={meshRef} position={position} onClick={handleClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function AnimatedWithRef({ position, color }) {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Direct rotation manipulation
      meshRef.current.rotation.x += delta
      meshRef.current.rotation.y += delta * 0.5
      
      // Access and modify position
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function GroupWithRef({ position }) {
  const groupRef = useRef()
  const [rotationSpeed, setRotationSpeed] = useState(1)
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire group
      groupRef.current.rotation.y += delta * rotationSpeed
    }
  })
  
  const handleClick = () => {
    setRotationSpeed(rotationSpeed === 1 ? 2 : 1)
  }
  
  return (
    <group ref={groupRef} position={position} onClick={handleClick}>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  )
}

function MaterialControl({ position, color }) {
  const meshRef = useRef()
  const [metalness, setMetalness] = useState(0)
  
  const toggleMetalness = () => {
    if (meshRef.current) {
      const newMetalness = metalness === 0 ? 1 : 0
      setMetalness(newMetalness)
      meshRef.current.material.metalness = newMetalness
    }
  }
  
  return (
    <mesh ref={meshRef} position={position} onClick={toggleMetalness}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial color={color} metalness={metalness} />
    </mesh>
  )
}

function App() {
  const sceneRef = useRef()
  
  // Access scene through ref
  const logSceneInfo = () => {
    if (sceneRef.current) {
      console.log('Scene children:', sceneRef.current.children.length)
    }
  }
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        {/* ============================================
            BASIC REF USAGE
            Access and manipulate object directly
        ============================================ */}
        <ControlledBox position={[-3, 2, 0]} color="orange" />
        
        {/* ============================================
            REF WITH ANIMATION
            Combine refs with useFrame
        ============================================ */}
        <AnimatedWithRef position={[0, 2, 0]} color="green" />
        
        {/* ============================================
            GROUP REF
            Control entire groups
        ============================================ */}
        <GroupWithRef position={[3, 2, 0]} />
        
        {/* ============================================
            MATERIAL CONTROL
            Modify material properties
        ============================================ */}
        <MaterialControl position={[-3, -2, 0]} color="purple" />
        
        {/* ============================================
            MULTIPLE REFS
            Control multiple objects
        ============================================ */}
        <mesh position={[0, -2, 0]}>
          <mesh ref={(ref) => {
            if (ref) {
              useFrame((state) => {
                ref.rotation.x = state.clock.elapsedTime
              })
            }
          }}>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color="cyan" />
          </mesh>
        </mesh>
        
        {/* ============================================
            REF CALLBACK PATTERN
            Use callback refs for setup
        ============================================ */}
        <mesh 
          position={[3, -2, 0]}
          ref={(ref) => {
            if (ref) {
              // Setup code runs when ref is attached
              ref.userData.customProperty = 'Hello from ref!'
              console.log('Ref attached:', ref)
            }
          }}
        >
          <coneGeometry args={[0.6, 1.2, 32]} />
          <meshStandardMaterial color="magenta" />
        </mesh>
      </Canvas>
      
      {/* UI Button to demonstrate ref access */}
      <button 
        onClick={logSceneInfo}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          padding: '10px 20px',
          zIndex: 1000
        }}
      >
        Log Scene Info
      </button>
    </div>
  )
}

export default App

