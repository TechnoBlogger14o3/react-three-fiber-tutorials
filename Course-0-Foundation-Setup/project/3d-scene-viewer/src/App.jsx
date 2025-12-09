import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Project: 3D Scene Viewer
 * 
 * A complete interactive 3D scene that combines everything learned:
 * - Multiple 3D objects with different geometries
 * - Various materials and colors
 * - Multiple light sources
 * - Camera controls for navigation
 * - Clean, organized code structure
 * 
 * This project demonstrates:
 * - Scene composition
 * - Object organization
 * - Lighting setup
 * - Material variety
 * - Geometry diversity
 */

// Reusable component for different objects
function SceneObject({ position, geometry, material, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      {geometry}
      {material}
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [8, 6, 8], fov: 60 }}
        shadows
      >
        {/* ============================================
            LIGHTING SETUP
        ============================================ */}
        
        {/* Ambient light for global illumination */}
        <ambientLight intensity={0.4} />
        
        {/* Main directional light (sun) */}
        <directionalLight
          position={[10, 10, 5]}
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
        
        {/* Secondary point light for fill */}
        <pointLight
          position={[-5, 5, -5]}
          intensity={0.5}
          color="#4a90e2"
          distance={20}
          decay={2}
        />
        
        {/* Accent spot light */}
        <spotLight
          position={[0, 8, 0]}
          angle={0.4}
          penumbra={0.5}
          intensity={0.8}
          color="#ff6b6b"
          castShadow
        />
        
        {/* ============================================
            CAMERA CONTROLS
        ============================================ */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          autoRotate={false}
        />
        
        {/* ============================================
            SCENE HELPERS
        ============================================ */}
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        
        {/* ============================================
            3D OBJECTS - CENTER AREA
        ============================================ */}
        
        {/* Metallic sphere */}
        <SceneObject
          position={[0, 2, 0]}
          geometry={<sphereGeometry args={[1, 32, 32]} />}
          material={
            <meshStandardMaterial
              color="#c0c0c0"
              metalness={1}
              roughness={0.1}
            />
          }
        />
        
        {/* Glowing cube */}
        <SceneObject
          position={[-3, 1, 0]}
          geometry={<boxGeometry args={[1.5, 1.5, 1.5]} />}
          material={
            <meshStandardMaterial
              color="#ff6b6b"
              emissive="#ff6b6b"
              emissiveIntensity={0.5}
            />
          }
        />
        
        {/* Transparent cylinder */}
        <SceneObject
          position={[3, 1, 0]}
          geometry={<cylinderGeometry args={[0.8, 0.8, 2, 32]} />}
          material={
            <meshStandardMaterial
              color="#4ecdc4"
              transparent
              opacity={0.7}
              metalness={0.3}
              roughness={0.2}
            />
          }
        />
        
        {/* ============================================
            3D OBJECTS - LEFT SIDE
        ============================================ */}
        
        {/* Torus (donut) */}
        <SceneObject
          position={[-5, 1.5, -2]}
          rotation={[Math.PI / 4, 0, 0]}
          geometry={<torusGeometry args={[0.8, 0.3, 16, 100]} />}
          material={
            <meshStandardMaterial
              color="#95e1d3"
              metalness={0.5}
              roughness={0.3}
            />
          }
        />
        
        {/* Cone */}
        <SceneObject
          position={[-5, 0.5, 2]}
          geometry={<coneGeometry args={[0.7, 1.5, 32]} />}
          material={
            <meshStandardMaterial
              color="#f38181"
              metalness={0}
              roughness={0.8}
            />
          }
        />
        
        {/* ============================================
            3D OBJECTS - RIGHT SIDE
        ============================================ */}
        
        {/* Octahedron */}
        <SceneObject
          position={[5, 1.5, -2]}
          geometry={<octahedronGeometry args={[1, 0]} />}
          material={
            <meshStandardMaterial
              color="#a8e6cf"
              metalness={0.7}
              roughness={0.2}
            />
          }
        />
        
        {/* Torus Knot */}
        <SceneObject
          position={[5, 1, 2]}
          geometry={<torusKnotGeometry args={[0.6, 0.2, 100, 16, 2, 3]} />}
          material={
            <meshStandardMaterial
              color="#ffd93d"
              metalness={0.8}
              roughness={0.1}
            />
          }
        />
        
        {/* ============================================
            3D OBJECTS - BACK AREA
        ============================================ */}
        
        {/* Icosahedron */}
        <SceneObject
          position={[-2, 1, -4]}
          geometry={<icosahedronGeometry args={[0.8, 0]} />}
          material={
            <meshStandardMaterial
              color="#6c5ce7"
              metalness={0.4}
              roughness={0.6}
            />
          }
        />
        
        {/* Dodecahedron */}
        <SceneObject
          position={[2, 1, -4]}
          geometry={<dodecahedronGeometry args={[0.8, 0]} />}
          material={
            <meshStandardMaterial
              color="#fd79a8"
              metalness={0.6}
              roughness={0.4}
            />
          }
        />
        
        {/* ============================================
            GROUND PLANE
        ============================================ */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial
            color="#f0f0f0"
            metalness={0}
            roughness={0.8}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

