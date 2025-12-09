# Example 3: Lighting

Explore different types of lighting in 3D scenes and how they affect your objects.

## 🎯 Learning Objectives

- Understand different light types
- Learn light properties (intensity, color, position)
- See how materials react to different lights
- Understand shadows and shadow casting

## 📚 Key Concepts

### Ambient Light

Provides global illumination everywhere in the scene:
- No shadows
- No direction
- Soft, even lighting
- Usually combined with other lights

```jsx
<ambientLight intensity={0.3} />
```

### Directional Light

Acts like sunlight - has direction but no specific position:
- Parallel light rays
- Good for outdoor scenes
- Can cast shadows
- Position defines direction

```jsx
<directionalLight position={[5, 5, 5]} intensity={1} />
```

### Point Light

Like a light bulb - emits light in all directions from a point:
- Has position
- Has distance (how far light reaches)
- Has decay (how light fades with distance)
- Can cast shadows

```jsx
<pointLight
  position={[0, 5, 0]}
  intensity={1}
  distance={10}
  decay={2}
/>
```

### Spot Light

Like a flashlight - cone-shaped beam:
- Has position and target
- Has angle (cone width)
- Has penumbra (soft edge)
- Can cast shadows

```jsx
<spotLight
  position={[0, 5, 0]}
  angle={0.3}
  penumbra={0.5}
  intensity={1}
/>
```

### Light Properties

- **intensity**: Brightness (0 = off, 1 = full, can go higher)
- **color**: Light color (default: white)
- **position**: [x, y, z] coordinates
- **distance**: How far light reaches (point/spot lights)
- **decay**: How light fades (point/spot lights)
- **angle**: Cone angle in radians (spot light)
- **penumbra**: Soft edge of cone (0-1, spot light)

### Shadows

To enable shadows:
1. Add `shadows` prop to Canvas
2. Add `castShadow` to lights
3. Add `castShadow` to objects that cast shadows
4. Add `receiveShadow` to objects that receive shadows

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Use OrbitControls to see how lighting affects the spheres from different angles

## 🎨 What You'll See

- Three white spheres on a gray plane
- Multiple light sources with different colors:
  - White directional light (main light)
  - Red point light (left side)
  - Cyan spot light (front)
- Shadows cast by the lights
- How each sphere reacts differently to the lighting

## 💡 Try This

1. Change ambient light intensity:
   ```jsx
   <ambientLight intensity={0.5} />  // Brighter
   <ambientLight intensity={0.1} />  // Darker
   ```

2. Move the point light:
   ```jsx
   <pointLight position={[0, 5, 5]} />
   ```

3. Change light colors:
   ```jsx
   <pointLight color="#00ff00" />  // Green
   <spotLight color="#ff00ff" />    // Magenta
   ```

4. Adjust spot light angle:
   ```jsx
   <spotLight angle={0.5} />  // Wider cone
   <spotLight angle={0.1} />  // Narrower cone
   ```

5. Disable shadows:
   ```jsx
   <Canvas>  // Remove 'shadows' prop
   ```

6. Add more lights:
   ```jsx
   <pointLight position={[5, 3, 5]} intensity={0.5} />
   ```

## 📖 Next Steps

- **Example 4**: Discover various materials
- **Example 5**: Create different geometries
- **Project**: Build a complete 3D scene viewer

---

_Lighting is crucial for making 3D scenes look realistic!_

