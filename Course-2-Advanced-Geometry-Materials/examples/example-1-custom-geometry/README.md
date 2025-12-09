# Example 1: Custom Geometry

Create custom 3D shapes programmatically using BufferGeometry!

## 🎯 Learning Objectives

- Understand BufferGeometry
- Create custom vertices
- Define faces with indices
- Generate procedural shapes

## 📚 Key Concepts

### BufferGeometry

Custom geometry from vertices:
```jsx
const geometry = new THREE.BufferGeometry()
const vertices = new Float32Array([...])
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
```

### Vertices

3D points defined as [x, y, z] coordinates.

### Indices

Triangles connecting vertices (3 indices per triangle).

## 🚀 Running

```bash
npm install
npm run dev
```

---

_Create any shape you can imagine!_

