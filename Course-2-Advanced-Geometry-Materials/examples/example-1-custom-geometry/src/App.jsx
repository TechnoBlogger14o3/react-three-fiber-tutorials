import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Example 1: Custom Geometry
 * 
 * Create custom 3D shapes programmatically!
 * 
 * Key Concepts:
 * - BufferGeometry: Custom geometry from vertices
 * - Vertices: 3D points (x, y, z)
 * - Faces: Triangles connecting vertices
 * - Procedural generation
 */

function CustomTriangle() {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    // Define vertices (3 points for a triangle)
    const vertices = new Float32Array([
      // Triangle 1
      0, 1, 0,    // Top vertex
      -1, -1, 0,  // Bottom left
      1, -1, 0,   // Bottom right
    ])
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geom.computeVertexNormals()
    return geom
  }, [])
  
  return (
    <mesh position={[-3, 2, 0]} geometry={geometry}>
      <meshStandardMaterial color="orange" side={THREE.DoubleSide} />
    </mesh>
  )
}

function CustomPlane() {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    // Create a plane with custom vertices
    const vertices = new Float32Array([
      -1, -1, 0,  // Bottom left
      1, -1, 0,   // Bottom right
      1, 1, 0,    // Top right
      -1, 1, 0,   // Top left
    ])
    const indices = new Uint16Array([
      0, 1, 2,  // First triangle
      0, 2, 3,  // Second triangle
    ])
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geom.setIndex(new THREE.BufferAttribute(indices, 1))
    geom.computeVertexNormals()
    return geom
  }, [])
  
  return (
    <mesh position={[0, 2, 0]} geometry={geometry}>
      <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
    </mesh>
  )
}

function ProceduralSphere() {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const radius = 1
    const segments = 32
    const vertices = []
    const indices = []
    
    // Generate sphere vertices
    for (let lat = 0; lat <= segments; lat++) {
      const theta = (lat * Math.PI) / segments
      const sinTheta = Math.sin(theta)
      const cosTheta = Math.cos(theta)
      
      for (let lon = 0; lon <= segments; lon++) {
        const phi = (lon * 2 * Math.PI) / segments
        const sinPhi = Math.sin(phi)
        const cosPhi = Math.cos(phi)
        
        const x = cosPhi * sinTheta
        const y = cosTheta
        const z = sinPhi * sinTheta
        
        vertices.push(x * radius, y * radius, z * radius)
      }
    }
    
    // Generate indices
    for (let lat = 0; lat < segments; lat++) {
      for (let lon = 0; lon < segments; lon++) {
        const first = lat * (segments + 1) + lon
        const second = first + segments + 1
        
        indices.push(first, second, first + 1)
        indices.push(second, second + 1, first + 1)
      }
    }
    
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3))
    geom.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1))
    geom.computeVertexNormals()
    return geom
  }, [])
  
  return (
    <mesh position={[3, 2, 0]} geometry={geometry}>
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function WavePlane() {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const width = 3
    const height = 3
    const widthSegments = 50
    const heightSegments = 50
    const vertices = []
    const indices = []
    
    // Generate vertices with wave effect
    for (let i = 0; i <= heightSegments; i++) {
      const y = (i / heightSegments - 0.5) * height
      for (let j = 0; j <= widthSegments; j++) {
        const x = (j / widthSegments - 0.5) * width
        const z = Math.sin(x * 2) * Math.cos(y * 2) * 0.3
        vertices.push(x, y, z)
      }
    }
    
    // Generate indices
    for (let i = 0; i < heightSegments; i++) {
      for (let j = 0; j < widthSegments; j++) {
        const a = i * (widthSegments + 1) + j
        const b = a + widthSegments + 1
        
        indices.push(a, b, a + 1)
        indices.push(b, b + 1, a + 1)
      }
    }
    
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3))
    geom.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1))
    geom.computeVertexNormals()
    return geom
  }, [])
  
  return (
    <mesh position={[-3, -2, 0]} geometry={geometry}>
      <meshStandardMaterial color="purple" wireframe />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        
        <CustomTriangle />
        <CustomPlane />
        <ProceduralSphere />
        <WavePlane />
      </Canvas>
    </div>
  )
}

export default App

