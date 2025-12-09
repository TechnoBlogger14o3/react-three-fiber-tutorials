# Example 1: Hello 3D

Your first React Three Fiber scene! This example demonstrates the most basic 3D scene setup.

## 🎯 Learning Objectives

- Understand the Canvas component
- Create your first 3D object (a cube)
- Learn about Mesh, Geometry, and Material
- Set up basic lighting

## 📚 Key Concepts

### Canvas Component

The `<Canvas>` component is the root of every R3F application. It automatically:
- Creates a Three.js Scene
- Sets up a PerspectiveCamera
- Initializes a WebGL Renderer
- Handles the render loop (60 FPS)

### Mesh

A Mesh is a 3D object that combines:
- **Geometry**: The shape (vertices, faces)
- **Material**: The appearance (color, texture, how it reacts to light)

### BoxGeometry

Creates a box/cube shape. The `args` prop defines dimensions:
- `[width, height, depth]` - all in units

### MeshStandardMaterial

A physically-based material that reacts to light. Properties include:
- `color`: The base color of the material

### Lighting

3D objects need light to be visible:
- **Ambient Light**: Provides global illumination (no shadows)
- **Directional Light**: Acts like sunlight, has direction and position

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

## 🎨 What You'll See

A simple orange cube in the center of the screen. You can:
- Rotate the view by clicking and dragging (if OrbitControls were added)
- See how the cube reacts to the lighting

## 💡 Try This

1. Change the cube color:
   ```jsx
   <meshStandardMaterial color="blue" />
   ```

2. Change the cube size:
   ```jsx
   <boxGeometry args={[2, 2, 2]} />
   ```

3. Add more cubes at different positions:
   ```jsx
   <Cube position={[2, 0, 0]} />
   <Cube position={[-2, 0, 0]} />
   ```

4. Change light intensity:
   ```jsx
   <ambientLight intensity={1} />
   <directionalLight intensity={2} />
   ```

## 📖 Next Steps

- **Example 2**: Learn about camera controls
- **Example 3**: Explore different lighting types
- **Example 4**: Discover various materials

---

_This is the foundation of all 3D scenes in React Three Fiber!_

