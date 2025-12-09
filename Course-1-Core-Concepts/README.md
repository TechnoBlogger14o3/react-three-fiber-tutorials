# Course 1: Core Concepts

## 📋 Overview

Welcome to Course 1! Now that you understand the basics, we'll dive deeper into React Three Fiber's core concepts. You'll learn about primitives, transformations, groups, interactions, animations, and refs.

**Duration:** 2-3 weeks  
**Focus:** R3F primitives, components, and basic interactions

## 🎯 Learning Objectives

By the end of this course, you will be able to:

- ✅ Master R3F primitives and their usage
- ✅ Understand and apply transformations (position, rotation, scale)
- ✅ Organize objects using groups and hierarchies
- ✅ Handle 3D interactions (click, hover events)
- ✅ Create basic animations with useFrame
- ✅ Use refs to control 3D objects programmatically
- ✅ Build interactive 3D applications

## 📚 Topics Covered

### 1. R3F Primitives

React Three Fiber provides declarative primitives for Three.js objects:
- `<mesh>` - 3D objects
- `<group>` - Organize multiple objects
- `<primitive>` - Use any Three.js object
- All Three.js geometries and materials as components

### 2. Transformations

Control object position, rotation, and scale:
- **Position**: `position={[x, y, z]}`
- **Rotation**: `rotation={[x, y, z]}` (in radians)
- **Scale**: `scale={[x, y, z]}` or `scale={uniformScale}`

### 3. Groups and Hierarchies

Organize objects in parent-child relationships:
- Transform inheritance
- Group transformations
- Nested groups
- Scene organization

### 4. Event Handling

Interact with 3D objects:
- `onClick` - Click events
- `onPointerOver` / `onPointerOut` - Hover events
- `onPointerDown` / `onPointerUp` - Pointer events
- Raycasting for 3D interactions

### 5. Animation with useFrame

Animate objects using the render loop:
- `useFrame` hook
- Delta time
- Animation patterns
- Performance considerations

### 6. Refs in 3D Context

Access and control Three.js objects:
- `useRef` with 3D objects
- Direct object manipulation
- Accessing Three.js properties
- Imperative control

## 🛠️ Examples

### Example 1: Primitives
**Location:** `examples/example-1-primitives/`

Explore all basic R3F primitives and how to use them:
- Mesh, Group, Primitive
- Geometry and Material components
- Helper components

**Key Concepts:**
- R3F component structure
- Primitive usage
- Component composition

### Example 2: Transforms
**Location:** `examples/example-2-transforms/`

Learn transformations in action:
- Position arrays
- Rotation in radians
- Scale values
- Combining transformations

**Key Concepts:**
- 3D coordinate system
- Transform order
- Relative vs absolute positioning

### Example 3: Groups
**Location:** `examples/example-3-groups/`

Organize objects with groups:
- Parent-child relationships
- Transform inheritance
- Nested groups
- Scene organization

**Key Concepts:**
- Group component
- Hierarchy
- Transform propagation

### Example 4: Interactions
**Location:** `examples/example-4-interactions/`

Handle user interactions:
- Click events on 3D objects
- Hover effects
- Pointer events
- Event handling patterns

**Key Concepts:**
- 3D event handling
- Raycasting
- Interactive objects
- State management with interactions

### Example 5: Animation
**Location:** `examples/example-5-animation/`

Animate objects with useFrame:
- useFrame hook
- Delta time
- Rotation animations
- Movement animations
- Animation patterns

**Key Concepts:**
- Animation loop
- Performance
- Smooth animations
- Time-based animations

### Example 6: Refs
**Location:** `examples/example-6-refs/`

Use refs to control 3D objects:
- Accessing Three.js objects
- Direct manipulation
- Imperative control
- Combining with animations

**Key Concepts:**
- useRef in 3D
- Object access
- Imperative vs declarative
- Performance considerations

## 🎨 Projects

### Project 1: Interactive 3D Gallery
**Location:** `project/interactive-3d-gallery/`

Build a complete interactive gallery:
- Multiple clickable 3D objects
- Hover effects
- Animations
- Smooth interactions

**Features:**
- Click to select objects
- Hover to highlight
- Animated transitions
- Clean UI

### Project 2: 3D Product Showcase
**Location:** `project/3d-product-showcase/`

Create a product showcase:
- Rotating product display
- Interactive controls
- Multiple views
- Smooth animations

**Features:**
- Auto-rotation
- Manual controls
- Multiple products
- Professional presentation

## 📝 Learning Checklist

Track your progress:

- [ ] Master R3F primitives
- [ ] Understand transformations (position, rotation, scale)
- [ ] Use refs in 3D context
- [ ] Handle 3D interactions (click, hover)
- [ ] Create basic animations with useFrame
- [ ] Organize objects in groups
- [ ] Build interactive 3D applications
- [ ] Complete Interactive 3D Gallery project
- [ ] Complete 3D Product Showcase project

## 🚀 Quick Start

1. Navigate to any example:
   ```bash
   cd examples/example-1-primitives
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## 📖 Prerequisites

Before starting this course, make sure you've completed:
- Course 0: Foundation & Setup
- Understanding of Canvas, Mesh, Geometry, Material
- Basic React hooks (useState, useEffect)

## 🎓 Next Steps

After completing this course, you'll be ready for:
- **Course 2: Advanced Geometry & Materials** - Custom geometries, 3D models, textures, shaders

## 📚 Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Drei](https://github.com/pmndrs/drei)

---

**Ready to start?** Begin with [Example 1: Primitives](./examples/example-1-primitives/)!

_Last updated: January 2025_

