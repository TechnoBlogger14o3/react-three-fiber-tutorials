import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 4: Materials
 * 
 * Explore different material types and their properties!
 * 
 * Key Concepts:
 * - MeshBasicMaterial: Unaffected by light, always visible
 * - MeshStandardMaterial: PBR material, reacts to light (most common)
 * - MeshPhongMaterial: Shiny, specular highlights
 * - MeshPhysicalMaterial: Advanced PBR with more properties
 * 
 * Material Properties:
 * - color: Base color
 * - metalness: How metallic (0-1)
 * - roughness: How rough/smooth (0-1)
 * - emissive: Self-illumination
 * - opacity: Transparency (0-1)
 * - transparent: Enable transparency
 */

function MaterialSphere({ position, material, label }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        {material}
      </mesh>
    </group>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        {/* ============================================
            MESH BASIC MATERIAL
            Unaffected by light, always fully lit
            Good for UI elements, always-visible objects
        ============================================ */}
        <MaterialSphere
          position={[-3, 2, 0]}
          material={<meshBasicMaterial color="hotpink" />}
        />
        
        {/* ============================================
            MESH STANDARD MATERIAL (PBR)
            Physically Based Rendering
            Reacts to light realistically
            Most commonly used material
        ============================================ */}
        <MaterialSphere
          position={[-1, 2, 0]}
          material={
            <meshStandardMaterial
              color="orange"
              metalness={0}
              roughness={0.5}
            />
          }
        />
        
        {/* Metallic material */}
        <MaterialSphere
          position={[1, 2, 0]}
          material={
            <meshStandardMaterial
              color="silver"
              metalness={1}
              roughness={0.1}
            />
          }
        />
        
        {/* Rough material */}
        <MaterialSphere
          position={[3, 2, 0]}
          material={
            <meshStandardMaterial
              color="blue"
              metalness={0}
              roughness={1}
            />
          }
        />
        
        {/* ============================================
            MESH PHONG MATERIAL
            Shiny material with specular highlights
            Good for plastic, ceramic, glossy surfaces
        ============================================ */}
        <MaterialSphere
          position={[-2, 0, 0]}
          material={
            <meshPhongMaterial
              color="green"
              shininess={100}
              specular="#ffffff"
            />
          }
        />
        
        {/* ============================================
            MESH PHYSICAL MATERIAL
            Advanced PBR with more control
            Clearcoat, sheen, transmission
        ============================================ */}
        <MaterialSphere
          position={[0, 0, 0]}
          material={
            <meshPhysicalMaterial
              color="purple"
              metalness={0.5}
              roughness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          }
        />
        
        {/* ============================================
            EMISSIVE MATERIAL
            Self-illuminating, glows
        ============================================ */}
        <MaterialSphere
          position={[2, 0, 0]}
          material={
            <meshStandardMaterial
              color="red"
              emissive="#ff0000"
              emissiveIntensity={0.5}
            />
          }
        />
        
        {/* ============================================
            TRANSPARENT MATERIAL
            See-through material
        ============================================ */}
        <MaterialSphere
          position={[-1, -2, 0]}
          material={
            <meshStandardMaterial
              color="cyan"
              transparent
              opacity={0.5}
            />
          }
        />
        
        {/* ============================================
            WIREFRAME MATERIAL
            Shows only edges
        ============================================ */}
        <MaterialSphere
          position={[1, -2, 0]}
          material={
            <meshStandardMaterial
              color="yellow"
              wireframe
            />
          }
        />
      </Canvas>
    </div>
  )
}

export default App

