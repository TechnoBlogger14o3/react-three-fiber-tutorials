# Example 4: Interactions

Handle user interactions with 3D objects!

## 🎯 Learning Objectives

- Handle click events on 3D objects
- Implement hover effects
- Use pointer events
- Manage state with interactions

## 📚 Key Concepts

### onClick Event
```jsx
<mesh onClick={(e) => console.log('Clicked!')}>
```

### Hover Events
```jsx
<mesh
  onPointerOver={() => setHovered(true)}
  onPointerOut={() => setHovered(false)}
>
```

### Event Propagation
Events bubble up through the scene graph.

## 🚀 Running the Example

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Click and hover over objects!

## 🎨 What You'll See

- Clickable boxes that change color
- Hover effects
- Selection patterns
- Pointer events
- Event propagation

## 💡 Try This

Add your own interactions and see how events work in 3D!

---

_Interactions make 3D scenes engaging and interactive!_

