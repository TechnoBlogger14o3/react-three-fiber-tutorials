import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 2: Camera Controls
 * 
 * Learn to control the camera in your 3D scene!
 * 
 * Key Concepts:
 * - OrbitControls: Allows users to interact with the camera
 * - Pan: Move the camera left/right/up/down
 * - Zoom: Scroll to zoom in/out
 * - Rotate: Click and drag to orbit around the scene
 * - Camera positioning: Set initial camera position
 * 
 * OrbitControls from @react-three/drei provides:
 * - Mouse/touch interaction
 * - Smooth camera movement
 * - Configurable constraints
 */

function Cube({ position }) {
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
      <Canvas
        camera={{
          position: [5, 5, 5], // [x, y, z] - camera position
          fov: 75, // Field of view (degrees)
        }}
      >
        {/* Ambient light for global illumination */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light */}
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* OrbitControls - enables camera interaction */}
        <OrbitControls
          enablePan={true}      // Enable panning (default: true)
          enableZoom={true}      // Enable zooming (default: true)
          enableRotate={true}    // Enable rotation (default: true)
          minDistance={2}        // Minimum zoom distance
          maxDistance={20}       // Maximum zoom distance
        />
        
        {/* Helper grid to visualize the scene */}
        <gridHelper args={[10, 10]} />
        
        {/* Helper axes to see X, Y, Z directions */}
        <axesHelper args={[5]} />
        
        {/* Multiple cubes to see the camera movement */}
        <Cube position={[0, 0, 0]} />
        <Cube position={[2, 0, 0]} />
        <Cube position={[-2, 0, 0]} />
        <Cube position={[0, 2, 0]} />
        <Cube position={[0, -2, 0]} />
      </Canvas>
    </div>
  )
}

export default App

