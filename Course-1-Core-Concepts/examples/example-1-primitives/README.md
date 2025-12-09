# Example 1: Primitives

Explore all basic R3F primitives and how to use them in your 3D scenes.

## 🎯 Learning Objectives

- Understand R3F primitives (mesh, group, primitive)
- Learn how to compose components
- See how to use Three.js objects directly
- Understand component structure

## 📚 Key Concepts

### Mesh Primitive

The most common primitive - combines geometry and material:
```jsx
<mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="orange" />
</mesh>
```

### Group Primitive

Organize multiple objects together:
```jsx
<group position={[0, 0, 0]}>
  <mesh>...</mesh>
  <mesh>...</mesh>
</group>
```

Transformations on the group apply to all children.

### Primitive Component

Use any Three.js object directly:
```jsx
<primitive object={threeJsObject} />
```

Useful for:
- Custom Three.js objects
- Objects from external libraries
- Complex setups

### Component Structure

R3F components follow this pattern:
```jsx
<ComponentName prop1={value1} prop2={value2}>
  {/* Children components */}
</ComponentName>
```

### Geometry and Material

Can be defined separately or together:
```jsx
{/* Separate */}
<mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="red" />
</mesh>

{/* Reusable material */}
const material = <meshStandardMaterial color="blue" />
<mesh><boxGeometry />{material}</mesh>
<mesh><sphereGeometry />{material}</mesh>
```

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Use OrbitControls to explore the scene

## 🎨 What You'll See

Various examples of:
- Basic meshes
- Groups with multiple objects
- Primitive components
- Nested groups
- Reused materials

## 💡 Try This

1. Create a new group with multiple objects:
   ```jsx
   <group position={[0, 3, 0]}>
     <mesh><boxGeometry /><meshStandardMaterial color="red" /></mesh>
     <mesh><sphereGeometry /><meshStandardMaterial color="blue" /></mesh>
   </group>
   ```

2. Use primitive with a custom object:
   ```jsx
   const customMesh = new THREE.Mesh(geometry, material)
   <primitive object={customMesh} />
   ```

3. Nest groups:
   ```jsx
   <group>
     <group>
       <mesh>...</mesh>
     </group>
   </group>
   ```

4. Reuse materials:
   ```jsx
   const sharedMaterial = <meshStandardMaterial color="gold" />
   <mesh><boxGeometry />{sharedMaterial}</mesh>
   <mesh><sphereGeometry />{sharedMaterial}</mesh>
   ```

## 📖 Next Steps

- **Example 2**: Learn about transformations
- **Example 3**: Organize with groups
- **Example 4**: Add interactions

---

_Primitives are the building blocks of R3F scenes!_

