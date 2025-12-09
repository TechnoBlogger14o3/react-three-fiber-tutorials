import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'

/**
 * Example 4: Interactions
 * 
 * Handle user interactions with 3D objects!
 * 
 * Key Concepts:
 * - onClick: Click events on 3D objects
 * - onPointerOver / onPointerOut: Hover events
 * - onPointerDown / onPointerUp: Pointer events
 * - State management with interactions
 * 
 * Event Handling:
 * - Events work just like React DOM events
 * - Raycasting automatically handles 3D intersection
 * - Events bubble up through the scene graph
 */

function InteractiveBox({ position, color, initialColor }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  return (
    <mesh
      position={position}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={clicked ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? 'hotpink' : clicked ? 'gold' : color} 
      />
    </mesh>
  )
}

function App() {
  const [selected, setSelected] = useState(null)
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        {/* ============================================
            CLICK INTERACTION
            onClick event on 3D objects
        ============================================ */}
        <InteractiveBox position={[-3, 2, 0]} color="red" />
        <InteractiveBox position={[0, 2, 0]} color="green" />
        <InteractiveBox position={[3, 2, 0]} color="blue" />
        
        {/* ============================================
            HOVER INTERACTION
            onPointerOver and onPointerOut
        ============================================ */}
        <mesh
          position={[-3, 0, 0]}
          onPointerOver={(e) => {
            e.stopPropagation()
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default'
          }}
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        {/* ============================================
            SELECTION PATTERN
            Track selected object with state
        ============================================ */}
        <mesh
          position={[0, 0, 0]}
          onClick={(e) => {
            e.stopPropagation()
            setSelected(selected === 'sphere' ? null : 'sphere')
          }}
          scale={selected === 'sphere' ? 1.3 : 1}
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color={selected === 'sphere' ? 'gold' : 'purple'} 
          />
        </mesh>
        
        <mesh
          position={[3, 0, 0]}
          onClick={(e) => {
            e.stopPropagation()
            setSelected(selected === 'torus' ? null : 'torus')
          }}
          scale={selected === 'torus' ? 1.3 : 1}
        >
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial 
            color={selected === 'torus' ? 'gold' : 'cyan'} 
          />
        </mesh>
        
        {/* ============================================
            POINTER EVENTS
            onPointerDown and onPointerUp
        ============================================ */}
        <mesh
          position={[-3, -2, 0]}
          onPointerDown={(e) => {
            e.stopPropagation()
            e.object.material.color.set('lime')
          }}
          onPointerUp={(e) => {
            e.object.material.color.set('teal')
          }}
        >
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="teal" />
        </mesh>
        
        {/* ============================================
            COMPLEX INTERACTION
            Multiple events and state
        ============================================ */}
        <mesh
          position={[0, -2, 0]}
          onClick={(e) => {
            e.stopPropagation()
            console.log('Clicked!', e.object)
          }}
          onPointerOver={(e) => {
            e.object.scale.set(1.2, 1.2, 1.2)
          }}
          onPointerOut={(e) => {
            e.object.scale.set(1, 1, 1)
          }}
        >
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="magenta" />
        </mesh>
        
        {/* ============================================
            EVENT PROPAGATION
            Events bubble up through groups
        ============================================ */}
        <group
          position={[3, -2, 0]}
          onClick={(e) => {
            console.log('Group clicked!', e)
          }}
        >
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="coral" />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="coral" />
          </mesh>
        </group>
      </Canvas>
    </div>
  )
}

export default App

