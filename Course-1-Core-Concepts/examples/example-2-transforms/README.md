# Example 2: Transforms

Learn transformations in action - position, rotation, and scale.

## 🎯 Learning Objectives

- Understand 3D coordinate system
- Learn position, rotation, and scale
- See how transforms combine
- Understand transform order

## 📚 Key Concepts

### Position

Move objects in 3D space:
```jsx
<mesh position={[x, y, z]} />
```

**Coordinate System:**
- **X-axis**: Left (-) to Right (+)
- **Y-axis**: Down (-) to Up (+)
- **Z-axis**: Away (-) to Toward you (+)

### Rotation

Rotate objects around axes:
```jsx
<mesh rotation={[x, y, z]} />
```

**Important:**
- Values are in **radians**, not degrees
- `Math.PI` = 180 degrees
- `Math.PI / 2` = 90 degrees
- `Math.PI / 4` = 45 degrees

**Rotation Order:**
1. X-axis (pitch)
2. Y-axis (yaw)
3. Z-axis (roll)

### Scale

Make objects bigger or smaller:
```jsx
<mesh scale={[x, y, z]} />  {/* Non-uniform */}
<mesh scale={2} />            {/* Uniform */}
```

### Transform Order

Transforms are applied in this order:
1. **Scale** - First
2. **Rotate** - Second
3. **Position** - Last

This means:
- Scaling happens at the origin
- Rotation happens around the origin
- Position moves the final result

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Use OrbitControls to see objects from different angles

## 🎨 What You'll See

- Objects positioned along X, Y, Z axes
- Rotated objects showing different orientations
- Scaled objects (bigger and smaller)
- Objects with combined transforms

## 💡 Try This

1. Convert degrees to radians:
   ```jsx
   // 90 degrees = Math.PI / 2
   rotation={[0, Math.PI / 2, 0]}
   
   // 30 degrees = Math.PI / 6
   rotation={[0, Math.PI / 6, 0]}
   ```

2. Create a helper function:
   ```jsx
   const degToRad = (deg) => (deg * Math.PI) / 180
   rotation={[0, degToRad(45), 0]}
   ```

3. Animate position:
   ```jsx
   const [x, setX] = useState(0)
   position={[x, 0, 0]}
   ```

4. Scale only one axis:
   ```jsx
   scale={[1, 2, 1]}  // Taller
   scale={[2, 1, 1]}  // Wider
   ```

5. Combine transforms:
   ```jsx
   <mesh
     position={[2, 2, 2]}
     rotation={[Math.PI / 4, Math.PI / 4, 0]}
     scale={1.5}
   >
   ```

## 📖 Common Transform Patterns

**Center object:**
```jsx
position={[0, 0, 0]}
```

**Move right:**
```jsx
position={[5, 0, 0]}
```

**Rotate 90 degrees:**
```jsx
rotation={[0, Math.PI / 2, 0]}
```

**Double size:**
```jsx
scale={2}
```

**Flip horizontally:**
```jsx
scale={[-1, 1, 1]}
```

## 📖 Next Steps

- **Example 3**: Organize with groups
- **Example 4**: Add interactions
- **Example 5**: Animate transforms

---

_Transforms are essential for positioning and orienting 3D objects!_

