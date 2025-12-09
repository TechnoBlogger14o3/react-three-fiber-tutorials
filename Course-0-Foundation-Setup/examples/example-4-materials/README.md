# Example 4: Materials

Explore different material types and their properties in React Three Fiber.

## 🎯 Learning Objectives

- Understand different material types
- Learn material properties (color, metalness, roughness)
- See how materials react to light
- Explore special effects (emissive, transparent, wireframe)

## 📚 Key Concepts

### MeshBasicMaterial

Unaffected by light - always fully visible:
- Good for UI elements
- Always-visible objects
- No shadows or lighting calculations
- Fastest to render

```jsx
<meshBasicMaterial color="hotpink" />
```

### MeshStandardMaterial (PBR)

Physically Based Rendering - most commonly used:
- Reacts to light realistically
- Metalness and roughness properties
- Good for most objects
- Standard for modern 3D graphics

```jsx
<meshStandardMaterial
  color="orange"
  metalness={0.5}    // 0 = non-metallic, 1 = metallic
  roughness={0.5}    // 0 = smooth, 1 = rough
/>
```

### MeshPhongMaterial

Shiny material with specular highlights:
- Good for plastic, ceramic, glossy surfaces
- Shininess property controls highlight size
- Specular color controls highlight color

```jsx
<meshPhongMaterial
  color="green"
  shininess={100}
  specular="#ffffff"
/>
```

### MeshPhysicalMaterial

Advanced PBR with more properties:
- Clearcoat (glossy layer)
- Sheen (fabric-like)
- Transmission (glass-like)
- More realistic but slower

```jsx
<meshPhysicalMaterial
  color="purple"
  metalness={0.5}
  roughness={0.2}
  clearcoat={1}
  clearcoatRoughness={0.1}
/>
```

### Material Properties

**Common Properties:**
- `color`: Base color (string or hex)
- `metalness`: How metallic (0-1)
- `roughness`: How rough/smooth (0-1)
- `emissive`: Self-illumination color
- `emissiveIntensity`: How bright the glow (0-1)
- `opacity`: Transparency (0-1)
- `transparent`: Enable transparency
- `wireframe`: Show only edges

**PBR Properties (Standard/Physical):**
- `metalness`: 0 = dielectric, 1 = metal
- `roughness`: 0 = mirror, 1 = matte
- `normalMap`: Surface detail
- `aoMap`: Ambient occlusion
- `roughnessMap`: Varying roughness
- `metalnessMap`: Varying metalness

## 🚀 Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Use OrbitControls to see materials from different angles

## 🎨 What You'll See

A grid of spheres showcasing different materials:
- **Top row**: Basic, Standard (normal), Standard (metallic), Standard (rough)
- **Middle row**: Phong (shiny), Physical (clearcoat), Emissive (glowing)
- **Bottom row**: Transparent, Wireframe

Each sphere demonstrates different material properties and how they react to lighting.

## 💡 Try This

1. Change metalness:
   ```jsx
   <meshStandardMaterial metalness={0.8} />  // More metallic
   <meshStandardMaterial metalness={0.2} />  // Less metallic
   ```

2. Change roughness:
   ```jsx
   <meshStandardMaterial roughness={0.1} />  // Very smooth (mirror-like)
   <meshStandardMaterial roughness={0.9} />  // Very rough (matte)
   ```

3. Add emissive glow:
   ```jsx
   <meshStandardMaterial
     color="blue"
     emissive="#0000ff"
     emissiveIntensity={1}
   />
   ```

4. Make transparent:
   ```jsx
   <meshStandardMaterial
     color="red"
     transparent
     opacity={0.3}
   />
   ```

5. Combine properties:
   ```jsx
   <meshStandardMaterial
     color="gold"
     metalness={1}
     roughness={0.1}
     emissive="#ffaa00"
     emissiveIntensity={0.2}
   />
   ```

6. Try wireframe:
   ```jsx
   <meshStandardMaterial wireframe color="cyan" />
   ```

## 📖 Next Steps

- **Example 5**: Create different geometries
- **Project**: Build a complete 3D scene viewer with various materials

---

_Materials define how your 3D objects look and react to light!_

