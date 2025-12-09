import { Canvas } from '@react-three/fiber'

/**
 * Example 1: Hello 3D
 * 
 * This is your first React Three Fiber scene!
 * 
 * Key Concepts:
 * - Canvas: The root component that sets up the 3D scene
 * - mesh: A 3D object that combines geometry and material
 * - boxGeometry: Creates a box shape
 * - meshStandardMaterial: A material that reacts to light
 * 
 * The Canvas component automatically:
 * - Creates a Scene
 * - Sets up a PerspectiveCamera
 * - Initializes a WebGL Renderer
 * - Handles the render loop
 */

function Cube() {
  return (
    <mesh>
      {/* Geometry defines the shape */}
      <boxGeometry args={[1, 1, 1]} />
      
      {/* Material defines the appearance */}
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* Ambient light provides global illumination */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light acts like sunlight */}
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Our 3D cube */}
        <Cube />
      </Canvas>
    </div>
  )
}

export default App

