import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 1: Shadows
 * 
 * Learn shadow casting and receiving!
 * 
 * Key Concepts:
 * - Enable shadows on Canvas
 * - castShadow on lights and objects
 * - receiveShadow on surfaces
 * - Shadow map size and quality
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        shadows
      >
        <ambientLight intensity={0.4} />
        
        {/* Directional light with shadows */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        {/* Objects that cast shadows */}
        <mesh position={[-2, 1, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        <mesh position={[0, 1.5, 0]} castShadow>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        
        <mesh position={[2, 1, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* Ground plane that receives shadows */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

