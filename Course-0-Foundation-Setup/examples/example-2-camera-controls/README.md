# Example 2: Camera Controls

Learn to control the camera in your 3D scene using OrbitControls.

## 🎯 Learning Objectives

- Understand OrbitControls from @react-three/drei
- Learn camera positioning
- Configure camera constraints
- Enable user interaction with 3D scenes

## 📚 Key Concepts

### OrbitControls

OrbitControls allows users to interact with the camera:
- **Pan**: Right-click and drag (or middle mouse button) to move the camera
- **Zoom**: Scroll wheel to zoom in/out
- **Rotate**: Left-click and drag to orbit around the scene

### Camera Position

The camera position is set in the Canvas component:
```jsx
<Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
```

- `position`: [x, y, z] coordinates
- `fov`: Field of view in degrees (45-75 is typical)

### Helper Components

- **gridHelper**: Visual grid to understand the scene layout
- **axesHelper**: Colored axes (Red=X, Green=Y, Blue=Z)

### OrbitControls Props

- `enablePan`: Enable/disable panning
- `enableZoom`: Enable/disable zooming
- `enableRotate`: Enable/disable rotation
- `minDistance`: Minimum zoom distance
- `maxDistance`: Maximum zoom distance
- `minPolarAngle`: Minimum vertical angle (0 = top)
- `maxPolarAngle`: Maximum vertical angle (Math.PI = bottom)

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and interact with the scene:
   - **Left-click + drag**: Rotate around
   - **Right-click + drag**: Pan
   - **Scroll**: Zoom in/out

## 🎨 What You'll See

- Multiple orange cubes arranged in a pattern
- A grid on the ground plane
- Colored axes showing X (red), Y (green), Z (blue) directions
- Interactive camera that responds to mouse/touch input

## 💡 Try This

1. Change camera initial position:
   ```jsx
   camera={{ position: [10, 10, 10] }}
   ```

2. Disable panning:
   ```jsx
   <OrbitControls enablePan={false} />
   ```

3. Limit rotation:
   ```jsx
   <OrbitControls
     minPolarAngle={Math.PI / 4}  // Can't look from above
     maxPolarAngle={Math.PI / 2}  // Can't look from below
   />
   ```

4. Change field of view:
   ```jsx
   camera={{ position: [5, 5, 5], fov: 45 }}  // Narrower view
   ```

5. Add auto-rotate:
   ```jsx
   <OrbitControls autoRotate autoRotateSpeed={1} />
   ```

## 📖 Next Steps

- **Example 3**: Explore different lighting types
- **Example 4**: Discover various materials
- **Example 5**: Create different geometries

---

_Camera controls are essential for interactive 3D experiences!_

