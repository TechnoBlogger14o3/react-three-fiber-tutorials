import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 3: Lighting
 * 
 * Explore different types of lighting in 3D scenes!
 * 
 * Key Concepts:
 * - Ambient Light: Global illumination, no shadows
 * - Directional Light: Sun-like light with direction
 * - Point Light: Light bulb effect, emits in all directions
 * - Spot Light: Flashlight effect, cone-shaped beam
 * 
 * Lighting Properties:
 * - intensity: Brightness of the light (0-1 or higher)
 * - color: Color of the light (default: white)
 * - position: Where the light is located (for point/spot lights)
 */

function Sphere({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        shadows
      >
        {/* ============================================
            AMBIENT LIGHT
            Provides global illumination everywhere
            No shadows, no direction
        ============================================ */}
        <ambientLight intensity={0.3} />
        
        {/* ============================================
            DIRECTIONAL LIGHT
            Acts like sunlight
            Has direction but no specific position
        ============================================ */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* ============================================
            POINT LIGHT
            Like a light bulb
            Emits light in all directions from a point
        ============================================ */}
        <pointLight
          position={[-5, 3, 0]}
          intensity={1}
          color="#ff6b6b"
          distance={10}
          decay={2}
        />
        
        {/* ============================================
            SPOT LIGHT
            Like a flashlight
            Cone-shaped beam of light
        ============================================ */}
        <spotLight
          position={[0, 5, -5]}
          angle={0.3}
          penumbra={0.5}
          intensity={1}
          color="#4ecdc4"
          castShadow
        />
        
        {/* Camera controls */}
        <OrbitControls />
        
        {/* Helper grid */}
        <gridHelper args={[10, 10]} />
        
        {/* Spheres to see lighting effects */}
        <Sphere position={[-2, 1, 0]} color="white" />
        <Sphere position={[0, 1, 0]} color="white" />
        <Sphere position={[2, 1, 0]} color="white" />
        
        {/* Ground plane to see shadows */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

