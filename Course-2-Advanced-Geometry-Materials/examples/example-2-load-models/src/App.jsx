import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

/**
 * Example 2: Load Models
 * 
 * Load and display 3D models using useGLTF!
 * 
 * Key Concepts:
 * - useGLTF: Load GLTF/GLB models
 * - Model positioning and scaling
 * - Accessing model parts
 * - Model optimization
 * 
 * Note: This example uses a placeholder. In real projects,
 * you would load actual GLTF files from your public folder.
 */

function Model({ url, position, scale = 1 }) {
  // useGLTF loads and caches the model
  // For this example, we'll create a simple placeholder
  // In real usage: const { scene } = useGLTF(url)
  
  return (
    <group position={position} scale={scale}>
      {/* Placeholder - replace with actual model loading */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  )
}

// Example of how to use useGLTF (commented for demo)
/*
function LoadedModel({ url, position }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene.clone()} position={position} />
}

// Preload model for better performance
useGLTF.preload('/models/model.glb')
*/

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        <Model position={[0, 0, 0]} scale={1} />
        
        {/* Instructions */}
        <mesh position={[0, -2, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color="rgba(0,0,0,0.5)" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

