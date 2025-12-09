import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

/**
 * Example 1: Primitives
 * 
 * Explore all basic R3F primitives and how to use them!
 * 
 * Key Concepts:
 * - <mesh>: Basic 3D object container
 * - <group>: Organize multiple objects
 * - <primitive>: Use any Three.js object directly
 * - Geometry and Material as separate components
 * - Helper components from drei
 * 
 * R3F Primitives:
 * - All Three.js objects are available as React components
 * - Lowercase names match Three.js classes
 * - Props map directly to Three.js properties
 */

function App() {
  // Using primitive to access Three.js objects directly
  const customObject = useRef()
  
  // Create a custom Three.js object
  const customGeometry = new THREE.BoxGeometry(1, 1, 1)
  const customMaterial = new THREE.MeshStandardMaterial({ color: 'purple' })
  const customMesh = new THREE.Mesh(customGeometry, customMaterial)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[5]} />
        
        {/* ============================================
            MESH PRIMITIVE
            The most common primitive - combines geometry and material
        ============================================ */}
        <mesh position={[-3, 2, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        {/* ============================================
            GROUP PRIMITIVE
            Organize multiple objects together
            Transformations apply to all children
        ============================================ */}
        <group position={[0, 2, 0]}>
          <mesh position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[0.5, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </group>
        
        {/* ============================================
            PRIMITIVE COMPONENT
            Use any Three.js object directly
            Useful for custom objects or external libraries
        ============================================ */}
        <primitive 
          object={customMesh} 
          position={[3, 2, 0]}
          ref={customObject}
        />
        
        {/* ============================================
            SEPARATE GEOMETRY AND MATERIAL
            You can define geometry and material separately
            Useful for reusing materials
        ============================================ */}
        <mesh position={[-3, 0, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* Reusing the same material */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* ============================================
            NESTED GROUPS
            Groups can contain other groups
            Transformations cascade down
        ============================================ */}
        <group position={[1, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <group position={[0, 0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial color="yellow" />
            </mesh>
          </group>
          <group position={[0, -0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </group>
        </group>
        
        {/* ============================================
            PRIMITIVE WITH THREE.JS OBJECTS
            You can use any Three.js class as a component
        ============================================ */}
        <mesh position={[3, 0, 0]}>
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial color="pink" />
        </mesh>
        
        {/* ============================================
            EMPTY GROUP
            Groups don't need to have visible children
            Useful for organization and transformations
        ============================================ */}
        <group position={[-3, -2, 0]}>
          {/* Empty group - just for positioning */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="teal" />
          </mesh>
        </group>
        
        {/* ============================================
            MULTIPLE MESHES IN GROUP
            All share the group's transformation
        ============================================ */}
        <group position={[0, -2, 0]} scale={[1.2, 1.2, 1.2]}>
          <mesh position={[-0.5, 0, 0]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color="coral" />
          </mesh>
          <mesh position={[0.5, 0, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="coral" />
          </mesh>
        </group>
        
        {/* ============================================
            PRIMITIVE WITH REF
            Access the underlying Three.js object
        ============================================ */}
        <primitive 
          object={new THREE.Mesh(
            new THREE.ConeGeometry(0.5, 1, 32),
            new THREE.MeshStandardMaterial({ color: 'magenta' })
          )}
          position={[3, -2, 0]}
        />
      </Canvas>
    </div>
  )
}

export default App

