# Example 6: Refs

Use refs to control 3D objects programmatically!

## 🎯 Learning Objectives

- Use useRef with 3D objects
- Access Three.js objects directly
- Manipulate objects imperatively
- Combine refs with animations

## 📚 Key Concepts

### useRef with 3D
```jsx
const meshRef = useRef()
<mesh ref={meshRef}>
```

### Direct Manipulation
```jsx
meshRef.current.rotation.y += delta
meshRef.current.material.color.set('red')
```

### Imperative Control
Refs allow imperative control alongside declarative React.

## 🚀 Running the Example

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Click objects to see ref control!

## 🎨 What You'll See

- Objects controlled with refs
- Direct material manipulation
- Group refs
- Animation with refs

## 💡 Try This

Use refs to control your objects imperatively!

---

_Refs give you direct access to Three.js objects!_

