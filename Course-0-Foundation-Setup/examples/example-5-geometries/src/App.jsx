import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Example 5: Geometries
 * 
 * Explore different basic 3D shapes (geometries)!
 * 
 * Key Concepts:
 * - BoxGeometry: Rectangular box/cube
 * - SphereGeometry: Sphere/ball
 * - PlaneGeometry: Flat plane
 * - CylinderGeometry: Cylinder/tube
 * - TorusGeometry: Donut shape
 * - ConeGeometry: Cone
 * - RingGeometry: Flat ring/disc
 * 
 * Geometry Parameters:
 * Each geometry has different parameters (args)
 * that define its size and detail level
 */

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        
        {/* ============================================
            BOX GEOMETRY
            args: [width, height, depth]
        ============================================ */}
        <mesh position={[-6, 3, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        {/* ============================================
            SPHERE GEOMETRY
            args: [radius, widthSegments, heightSegments]
            More segments = smoother sphere
        ============================================ */}
        <mesh position={[-3, 3, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        
        {/* ============================================
            PLANE GEOMETRY
            args: [width, height]
            Flat surface, good for floors/walls
        ============================================ */}
        <mesh position={[0, 3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* ============================================
            CYLINDER GEOMETRY
            args: [radiusTop, radiusBottom, height, radialSegments]
        ============================================ */}
        <mesh position={[3, 3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
        
        {/* ============================================
            TORUS GEOMETRY (Donut)
            args: [radius, tube, radialSegments, tubularSegments]
        ============================================ */}
        <mesh position={[6, 3, 0]}>
          <torusGeometry args={[0.6, 0.3, 16, 100]} />
          <meshStandardMaterial color="purple" />
        </mesh>
        
        {/* ============================================
            CONE GEOMETRY
            args: [radius, height, radialSegments]
        ============================================ */}
        <mesh position={[-4.5, 0, 0]}>
          <coneGeometry args={[0.7, 1.5, 32]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        
        {/* ============================================
            RING GEOMETRY
            args: [innerRadius, outerRadius, thetaSegments]
        ============================================ */}
        <mesh position={[-1.5, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.4, 0.8, 32]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
        
        {/* ============================================
            OCTAHEDRON GEOMETRY
            args: [radius, detail]
            Diamond-like shape
        ============================================ */}
        <mesh position={[1.5, 0, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="pink" />
        </mesh>
        
        {/* ============================================
            TETRAHEDRON GEOMETRY
            args: [radius, detail]
            4-sided pyramid
        ============================================ */}
        <mesh position={[4.5, 0, 0]}>
          <tetrahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="lime" />
        </mesh>
        
        {/* ============================================
            ICOSAHEDRON GEOMETRY
            args: [radius, detail]
            20-sided sphere-like shape
        ============================================ */}
        <mesh position={[-4.5, -3, 0]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="coral" />
        </mesh>
        
        {/* ============================================
            DODECAHEDRON GEOMETRY
            args: [radius, detail]
            12-sided shape
        ============================================ */}
        <mesh position={[-1.5, -3, 0]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="teal" />
        </mesh>
        
        {/* ============================================
            TORUS KNOT GEOMETRY
            args: [radius, tube, tubularSegments, radialSegments, p, q]
            Complex twisted donut shape
        ============================================ */}
        <mesh position={[1.5, -3, 0]}>
          <torusKnotGeometry args={[0.5, 0.2, 100, 16, 2, 3]} />
          <meshStandardMaterial color="magenta" />
        </mesh>
        
        {/* ============================================
            CAPSULE GEOMETRY
            args: [radius, length, capSubdivisions, radialSegments]
            Pill-shaped
        ============================================ */}
        <mesh position={[4.5, -3, 0]}>
          <capsuleGeometry args={[0.5, 1, 4, 8]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

