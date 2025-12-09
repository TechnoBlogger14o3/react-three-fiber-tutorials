# Project: 3D Scene Viewer

A complete interactive 3D scene viewer that combines everything you've learned in Course 0!

## 🎯 Project Overview

This project demonstrates:
- Multiple 3D objects with different geometries
- Various materials (metallic, transparent, emissive)
- Multiple light sources (ambient, directional, point, spot)
- Camera controls for navigation
- Shadows and lighting effects
- Clean, organized code structure

## ✨ Features

- **10+ Different 3D Objects**: Spheres, boxes, cylinders, torus, cones, and more
- **Variety of Materials**: Metallic, transparent, emissive, and standard materials
- **Multiple Light Sources**: Ambient, directional, point, and spot lights
- **Interactive Camera**: OrbitControls for smooth navigation
- **Shadows**: Realistic shadow casting and receiving
- **Scene Helpers**: Grid and axes for reference

## 🚀 Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and interact with the scene:
   - **Left-click + drag**: Rotate camera
   - **Right-click + drag**: Pan camera
   - **Scroll**: Zoom in/out

## 🎨 What You'll See

An interactive 3D scene with:
- **Center**: Metallic sphere, glowing cube, transparent cylinder
- **Left Side**: Torus and cone
- **Right Side**: Octahedron and torus knot
- **Back**: Icosahedron and dodecahedron
- **Ground**: Gray plane with shadows
- **Lighting**: Multiple colored lights creating atmosphere

## 📚 Concepts Demonstrated

### Scene Composition
- Organizing multiple objects in a scene
- Positioning objects in 3D space
- Creating visual hierarchy

### Materials
- **Metallic**: High metalness, low roughness
- **Transparent**: Using opacity and transparent props
- **Emissive**: Self-illuminating objects
- **Standard**: PBR materials with various properties

### Lighting
- **Ambient**: Global illumination
- **Directional**: Main light source with shadows
- **Point**: Colored fill light
- **Spot**: Accent lighting

### Organization
- Reusable components
- Clean code structure
- Comments for clarity

## 💡 Enhancements You Can Add

1. **Animation**:
   ```jsx
   import { useFrame } from '@react-three/fiber'
   
   function RotatingObject() {
     const meshRef = useRef()
     useFrame((state, delta) => {
       meshRef.current.rotation.y += delta
     })
     return <mesh ref={meshRef}>...</mesh>
   }
   ```

2. **Interactivity**:
   ```jsx
   <mesh onClick={(e) => console.log('Clicked!')}>
   ```

3. **More Objects**: Add more geometries and materials

4. **Environment Map**: Add HDRI for reflections
   ```jsx
   import { Environment } from '@react-three/drei'
   <Environment preset="sunset" />
   ```

5. **Post-Processing**: Add effects like bloom, blur, etc.

6. **UI Controls**: Add Leva for real-time parameter adjustment

## 🎓 Learning Outcomes

After completing this project, you should:
- ✅ Understand how to compose complex 3D scenes
- ✅ Know how to organize multiple objects
- ✅ Be able to set up multiple light sources
- ✅ Understand material properties and their effects
- ✅ Be comfortable with camera controls
- ✅ Have experience with shadows and lighting

## 📖 Next Steps

- **Course 1**: Learn about transformations, groups, interactions, and animations
- Experiment with different object arrangements
- Try different lighting setups
- Add your own objects and materials

## 🐛 Troubleshooting

**Shadows not showing?**
- Make sure `shadows` prop is on Canvas
- Add `castShadow` to lights
- Add `castShadow` to objects
- Add `receiveShadow` to ground plane

**Objects too dark?**
- Increase ambient light intensity
- Add more light sources
- Adjust material properties

**Performance issues?**
- Reduce geometry segments
- Use fewer objects
- Disable shadows if not needed

---

**Congratulations on completing Course 0!** 🎉

You've built a complete 3D scene viewer and are ready for Course 1!

