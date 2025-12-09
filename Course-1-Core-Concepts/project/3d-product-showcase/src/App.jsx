import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

/**
 * Project: 3D Product Showcase
 * 
 * A rotating product display with:
 * - Auto-rotation
 * - Manual controls
 * - Multiple products
 * - Professional presentation
 */

function Product({ geometry, material, color, position, autoRotate }) {
  const groupRef = useRef()
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.5
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
    }
  })
  
  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        {geometry}
        <meshStandardMaterial 
          color={color}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

function App() {
  const [autoRotate, setAutoRotate] = useState(true)
  
  const products = [
    { name: 'Product 1', geometry: <boxGeometry args={[1, 1, 1]} />, color: '#ff6b6b', position: [-3, 0, 0] },
    { name: 'Product 2', geometry: <sphereGeometry args={[0.8, 32, 32]} />, color: '#4ecdc4', position: [0, 0, 0] },
    { name: 'Product 3', geometry: <torusGeometry args={[0.6, 0.2, 16, 100]} />, color: '#95e1d3', position: [3, 0, 0] },
  ]
  
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffd93d" />
        
        <OrbitControls autoRotate={autoRotate} autoRotateSpeed={1} />
        <gridHelper args={[20, 20]} />
        
        {products.map((product, index) => (
          <Product
            key={index}
            geometry={product.geometry}
            color={product.color}
            position={product.position}
            autoRotate={autoRotate}
          />
        ))}
        
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
      
      {/* UI */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '25px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          style={{
            background: autoRotate ? '#4ecdc4' : '#666',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {autoRotate ? 'Pause Rotation' : 'Start Rotation'}
        </button>
      </div>
    </div>
  )
}

export default App

