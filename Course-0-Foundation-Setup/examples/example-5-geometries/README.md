# Example 5: Geometries

Explore different basic 3D shapes (geometries) available in React Three Fiber.

## 🎯 Learning Objectives

- Understand different geometry types
- Learn geometry parameters (args)
- See how to position and organize multiple objects
- Understand geometry detail levels

## 📚 Key Concepts

### BoxGeometry

Creates a rectangular box/cube:
```jsx
<boxGeometry args={[width, height, depth]} />
```

### SphereGeometry

Creates a sphere/ball:
```jsx
<sphereGeometry args={[radius, widthSegments, heightSegments]} />
```
- More segments = smoother but more vertices

### PlaneGeometry

Creates a flat plane:
```jsx
<planeGeometry args={[width, height]} />
```
- Good for floors, walls, backgrounds
- Usually rotated to be horizontal or vertical

### CylinderGeometry

Creates a cylinder/tube:
```jsx
<cylinderGeometry args={[radiusTop, radiusBottom, height, radialSegments]} />
```
- Can create cones by making one radius 0

### TorusGeometry

Creates a donut shape:
```jsx
<torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
```

### ConeGeometry

Creates a cone:
```jsx
<coneGeometry args={[radius, height, radialSegments]} />
```

### RingGeometry

Creates a flat ring/disc:
```jsx
<ringGeometry args={[innerRadius, outerRadius, thetaSegments]} />
```

### Polyhedron Geometries

- **OctahedronGeometry**: 8-sided diamond shape
- **TetrahedronGeometry**: 4-sided pyramid
- **IcosahedronGeometry**: 20-sided sphere-like
- **DodecahedronGeometry**: 12-sided shape

### Special Geometries

- **TorusKnotGeometry**: Complex twisted donut
- **CapsuleGeometry**: Pill-shaped geometry

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Use OrbitControls to explore all the different shapes

## 🎨 What You'll See

A grid of different 3D shapes, each with a different color:
- **Top row**: Box, Sphere, Plane, Cylinder, Torus
- **Middle row**: Cone, Ring, Octahedron, Tetrahedron
- **Bottom row**: Icosahedron, Dodecahedron, TorusKnot, Capsule

Each shape demonstrates a different geometry type with various parameters.

## 💡 Try This

1. Change sphere detail:
   ```jsx
   <sphereGeometry args={[1, 8, 8]} />    // Low detail
   <sphereGeometry args={[1, 64, 64]} />  // High detail
   ```

2. Create a cone using cylinder:
   ```jsx
   <cylinderGeometry args={[0, 0.7, 1.5, 32]} />  // Top radius = 0
   ```

3. Rotate a plane:
   ```jsx
   <mesh rotation={[-Math.PI / 2, 0, 0]}>  // Horizontal
   <mesh rotation={[0, Math.PI / 2, 0]}>     // Vertical
   ```

4. Change torus parameters:
   ```jsx
   <torusGeometry args={[1, 0.5, 16, 100]} />  // Thicker donut
   <torusGeometry args={[1, 0.1, 16, 100]} />  // Thinner donut
   ```

5. Create a flat disc (ring with innerRadius = 0):
   ```jsx
   <ringGeometry args={[0, 1, 32]} />
   ```

6. Add more detail to polyhedrons:
   ```jsx
   <octahedronGeometry args={[1, 1]} />  // More subdivisions
   ```

7. Experiment with torus knot:
   ```jsx
   <torusKnotGeometry args={[0.5, 0.2, 100, 16, 2, 3]} />
   // Change p and q values for different knots
   ```

## 📖 Geometry Parameters Guide

**Common Parameters:**
- **radius**: Size of the shape
- **segments**: Detail level (more = smoother but slower)
- **width/height/depth**: Dimensions for boxes/planes

**Performance Tip:**
- Use fewer segments for objects far away
- Use more segments for close-up objects
- Balance detail with performance

## 📖 Next Steps

- **Project**: Build a complete 3D scene viewer with various geometries
- **Course 1**: Learn about transformations, groups, and interactions

---

_Geometries are the building blocks of 3D scenes!_

