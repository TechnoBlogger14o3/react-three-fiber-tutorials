import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 3: Groups
 * 
 * Organize objects with groups and hierarchies!
 * 
 * Key Concepts:
 * - <group>: Organize multiple objects
 * - Transform inheritance
 * - Nested groups
 * - Scene organization
 * 
 * Groups allow you to:
 * - Apply transformations to multiple objects at once
 * - Organize complex scenes
 * - Create hierarchies
 * - Reuse object arrangements
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        
        {/* ============================================
            BASIC GROUP
            Multiple objects share group's transform
        ============================================ */}
        <group position={[-5, 3, 0]}>
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
            GROUP WITH TRANSFORM
            All children inherit the group's transform
        ============================================ */}
        <group position={[0, 3, 0]} rotation={[0, Math.PI / 4, 0]}>
          <mesh position={[-0.5, 0, 0]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh position={[0.5, 0, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
        </group>
        
        {/* ============================================
            NESTED GROUPS
            Groups can contain other groups
            Transforms cascade down
        ============================================ */}
        <group position={[5, 3, 0]} scale={1.2}>
          <group position={[0, 0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial color="purple" />
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
            SOLAR SYSTEM EXAMPLE
            Demonstrates hierarchy and transform inheritance
        ============================================ */}
        
        {/* Sun (center) */}
        <group position={[-5, -2, 0]}>
          <mesh>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={0.5} />
          </mesh>
          
          {/* Planet 1 (orbits sun) */}
          <group position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
            <mesh>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="blue" />
            </mesh>
            
            {/* Moon (orbits planet) */}
            <group position={[0.6, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshStandardMaterial color="gray" />
              </mesh>
            </group>
          </group>
        </group>
        
        {/* ============================================
            ROBOT ARM EXAMPLE
            Shows how groups create articulated structures
        ============================================ */}
        <group position={[0, -2, 0]}>
          {/* Base */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
            <meshStandardMaterial color="silver" />
          </mesh>
          
          {/* Upper arm */}
          <group position={[0, 0.5, 0]} rotation={[0, Math.PI / 6, 0]}>
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[0.2, 1, 0.2]} />
              <meshStandardMaterial color="red" />
            </mesh>
            
            {/* Lower arm */}
            <group position={[0, 1, 0]} rotation={[0, -Math.PI / 4, 0]}>
              <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[0.15, 1, 0.15]} />
                <meshStandardMaterial color="blue" />
              </mesh>
              
              {/* Hand */}
              <group position={[0, 1, 0]}>
                <mesh>
                  <boxGeometry args={[0.2, 0.2, 0.2]} />
                  <meshStandardMaterial color="green" />
                </mesh>
              </group>
            </group>
          </group>
        </group>
        
        {/* ============================================
            SCALED GROUP
            All children scale together
        ============================================ */}
        <group position={[5, -2, 0]} scale={1.5}>
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="orange" />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="pink" />
          </mesh>
        </group>
      </Canvas>
    </div>
  )
}

export default App

