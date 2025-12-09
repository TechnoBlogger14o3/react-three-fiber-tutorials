import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 2: Transforms
 * 
 * Learn transformations in action!
 * 
 * Key Concepts:
 * - position: [x, y, z] - Move objects in 3D space
 * - rotation: [x, y, z] - Rotate objects (in radians)
 * - scale: [x, y, z] or number - Scale objects
 * 
 * Transform Order:
 * 1. Scale
 * 2. Rotate
 * 3. Position
 * 
 * Coordinate System:
 * - X: Left (-) to Right (+)
 * - Y: Down (-) to Up (+)
 * - Z: Away (-) to Toward you (+)
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
            POSITION
            Move objects in 3D space
            position={[x, y, z]}
        ============================================ */}
        
        {/* Center (origin) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
        
        {/* Right (+X) */}
        <mesh position={[3, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        {/* Left (-X) */}
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        
        {/* Up (+Y) */}
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* Down (-Y) */}
        <mesh position={[0, -3, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        
        {/* Forward (+Z) */}
        <mesh position={[0, 0, 3]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="purple" />
        </mesh>
        
        {/* Backward (-Z) */}
        <mesh position={[0, 0, -3]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="pink" />
        </mesh>
        
        {/* ============================================
            ROTATION
            Rotate objects around axes
            rotation={[x, y, z]} in radians
            Math.PI = 180 degrees
        ============================================ */}
        
        {/* Rotated 45 degrees around Y axis */}
        <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
        
        {/* Rotated 45 degrees around X axis */}
        <mesh position={[-5, -2, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="magenta" />
        </mesh>
        
        {/* Rotated 45 degrees around Z axis */}
        <mesh position={[-7, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="lime" />
        </mesh>
        
        {/* Multiple rotations */}
        <mesh position={[5, 2, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="coral" />
        </mesh>
        
        {/* ============================================
            SCALE
            Make objects bigger or smaller
            scale={[x, y, z]} or scale={uniform}
        ============================================ */}
        
        {/* Uniform scale (all axes) */}
        <mesh position={[5, -2, 0]} scale={1.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gold" />
        </mesh>
        
        {/* Non-uniform scale */}
        <mesh position={[7, 0, 0]} scale={[1, 2, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="silver" />
        </mesh>
        
        {/* Small scale */}
        <mesh position={[5, -4, 0]} scale={0.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="teal" />
        </mesh>
        
        {/* ============================================
            COMBINING TRANSFORMS
            All transforms work together
            Order: Scale → Rotate → Position
        ============================================ */}
        
        {/* Positioned, rotated, and scaled */}
        <mesh 
          position={[-7, -2, 0]} 
          rotation={[0, Math.PI / 4, Math.PI / 6]}
          scale={[1.2, 0.8, 1.2]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        
        {/* Complex transform */}
        <mesh 
          position={[0, 5, 0]} 
          rotation={[Math.PI / 6, Math.PI / 3, Math.PI / 4]}
          scale={2}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="violet" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

