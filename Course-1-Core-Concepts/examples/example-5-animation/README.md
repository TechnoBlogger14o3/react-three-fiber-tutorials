# Example 5: Animation

Animate objects with useFrame!

## 🎯 Learning Objectives

- Use useFrame hook
- Understand delta time
- Create smooth animations
- Learn animation patterns

## 📚 Key Concepts

### useFrame Hook
```jsx
useFrame((state, delta) => {
  meshRef.current.rotation.y += delta
})
```

### Delta Time
Time between frames - ensures smooth animations regardless of frame rate.

### Animation Patterns
- Rotation
- Movement
- Scaling
- Combining animations

## 🚀 Running the Example

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Watch the animations!

## 🎨 What You'll See

- Rotating boxes
- Bouncing spheres
- Orbiting objects
- Pulsing shapes
- Complex animations

## 💡 Try This

Create your own animations using useFrame and delta time!

---

_Animations bring 3D scenes to life!_

