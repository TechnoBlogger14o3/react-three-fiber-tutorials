# Example 3: Groups

Organize objects with groups and hierarchies!

## 🎯 Learning Objectives

- Understand the group component
- Learn transform inheritance
- See nested groups in action
- Organize complex scenes

## 📚 Key Concepts

### Group Component

Groups organize multiple objects:
```jsx
<group position={[0, 0, 0]}>
  <mesh>...</mesh>
  <mesh>...</mesh>
</group>
```

### Transform Inheritance

All children inherit the group's transforms:
- Position
- Rotation
- Scale

### Nested Groups

Groups can contain other groups:
```jsx
<group>
  <group>
    <mesh>...</mesh>
  </group>
</group>
```

## 🚀 Running the Example

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Explore the scene with OrbitControls

## 🎨 What You'll See

- Basic groups with multiple objects
- Groups with transforms
- Nested groups
- Solar system example (hierarchy)
- Robot arm example (articulated structure)

## 💡 Try This

Create your own hierarchies and see how transforms cascade!

---

_Groups are essential for organizing complex 3D scenes!_

