import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Example 5: Shaders
 * 
 * Create custom shader materials!
 * 
 * Key Concepts:
 * - GLSL shaders
 * - Vertex shader
 * - Fragment shader
 * - ShaderMaterial
 */

function ShaderBox({ position }) {
  const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
  
  const fragmentShader = `
    uniform float uTime;
    varying vec3 vPosition;
    void main() {
      vec3 color = vec3(0.5 + 0.5 * sin(vPosition.x * 3.0 + uTime));
      gl_FragColor = vec4(color, 1.0);
    }
  `
  
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 }
        }}
      />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        
        <ShaderBox position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App

