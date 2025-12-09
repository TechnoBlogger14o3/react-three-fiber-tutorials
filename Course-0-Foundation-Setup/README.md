# Course 0: Foundation & Setup

## 📋 Overview

Welcome to your first course in React Three Fiber! This course will introduce you to the fundamentals of 3D web development, Three.js basics, and how to set up and work with React Three Fiber.

**Duration:** 1-2 weeks  
**Focus:** Understanding 3D concepts, Three.js basics, R3F setup

## 🎯 Learning Objectives

By the end of this course, you will be able to:

- ✅ Understand what React Three Fiber is and why it's useful
- ✅ Set up a React Three Fiber development environment
- ✅ Create your first 3D scene
- ✅ Understand the core concepts: Scene, Camera, and Renderer
- ✅ Learn the basic 3D coordinate system
- ✅ Set up and use camera controls
- ✅ Add lighting to your scenes
- ✅ Work with different materials
- ✅ Create basic 3D geometries

## 📚 Topics Covered

### 1. What is React Three Fiber?

React Three Fiber (R3F) is a React renderer for Three.js. It allows you to build 3D experiences declaratively using React components, just like you would build a regular React application.

**Key Benefits:**
- Declarative 3D with React
- Component-based architecture
- Automatic scene management
- React hooks for 3D objects
- Easy integration with React ecosystem

### 2. Three.js Fundamentals

#### Scene
The Scene is a container that holds all your 3D objects, lights, and cameras. Think of it as the world where your 3D content exists.

#### Camera
The Camera defines the viewpoint from which you see the scene. There are two main types:
- **PerspectiveCamera**: Mimics human vision (most common)
- **OrthographicCamera**: Parallel projection (useful for technical drawings)

#### Renderer
The Renderer draws the scene from the camera's perspective onto the canvas. R3F handles this automatically.

#### Mesh
A Mesh is a 3D object that combines:
- **Geometry**: The shape (vertices, faces)
- **Material**: The appearance (color, texture, how it reacts to light)

### 3. 3D Coordinate System

Understanding 3D coordinates is crucial:
- **X-axis**: Left (-) to Right (+)
- **Y-axis**: Down (-) to Up (+)
- **Z-axis**: Away from you (-) to Toward you (+)

In R3F, you use arrays: `position={[x, y, z]}`

### 4. Canvas Component

The `<Canvas>` component is the root of every R3F application. It automatically:
- Creates a Scene
- Sets up a Camera
- Initializes a Renderer
- Handles the render loop

## 🛠️ Examples

### Example 1: Hello 3D
**Location:** `examples/example-1-hello-3d/`

Your first 3D scene! Learn to:
- Set up a basic R3F project
- Create a Canvas
- Add a simple cube (mesh)
- Understand the basic structure

**Key Concepts:**
- Canvas component
- Mesh, BoxGeometry, MeshStandardMaterial
- Basic scene setup

### Example 2: Camera Controls
**Location:** `examples/example-2-camera-controls/`

Learn to control the camera:
- Install and use OrbitControls
- Pan, zoom, and rotate the view
- Set camera constraints
- Understand camera positioning

**Key Concepts:**
- OrbitControls from drei
- Camera positioning
- User interaction with 3D scenes

### Example 3: Lighting
**Location:** `examples/example-3-lighting/`

Explore different types of lighting:
- Ambient Light (global illumination)
- Directional Light (sun-like)
- Point Light (light bulb)
- Spot Light (flashlight)

**Key Concepts:**
- Light types and their use cases
- Light properties (intensity, color, position)
- How materials react to light

### Example 4: Materials
**Location:** `examples/example-4-materials/`

Discover different material types:
- MeshBasicMaterial (unaffected by light)
- MeshStandardMaterial (PBR, reacts to light)
- MeshPhongMaterial (shiny)
- MeshPhysicalMaterial (advanced PBR)

**Key Concepts:**
- Material properties
- Color, metalness, roughness
- Emissive and opacity

### Example 5: Geometries
**Location:** `examples/example-5-geometries/`

Explore basic 3D shapes:
- BoxGeometry
- SphereGeometry
- PlaneGeometry
- CylinderGeometry
- TorusGeometry

**Key Concepts:**
- Geometry parameters
- Creating multiple objects
- Organizing objects in a scene

## 🎨 Project: 3D Scene Viewer

**Location:** `project/3d-scene-viewer/`

Build a complete interactive 3D scene viewer that combines everything you've learned:
- Multiple 3D objects with different geometries
- Various materials and colors
- Multiple light sources
- Camera controls for navigation
- Clean, organized code structure

**Features:**
- Interactive scene with multiple objects
- Different materials and lighting
- Smooth camera controls
- Responsive design

## 📝 Learning Checklist

Track your progress:

- [ ] Understand what R3F is and why it's useful
- [ ] Set up R3F development environment
- [ ] Create first 3D scene
- [ ] Understand Scene, Camera, Renderer
- [ ] Learn basic 3D coordinate system
- [ ] Set up camera controls
- [ ] Add different types of lighting
- [ ] Work with different materials
- [ ] Create various geometries
- [ ] Complete the 3D Scene Viewer project

## 🚀 Quick Start

1. Navigate to any example:
   ```bash
   cd examples/example-1-hello-3d
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open in browser and start learning!

## 📖 Prerequisites

Before starting, make sure you have:
- Node.js (v16 or higher)
- npm or yarn
- Basic React knowledge (components, JSX, hooks)
- Code editor (VS Code recommended)

## 🎓 Next Steps

After completing this course, you'll be ready for:
- **Course 1: Core Concepts** - Primitives, transformations, interactions, and animations

## 📚 Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Drei](https://github.com/pmndrs/drei)

---

**Ready to start?** Begin with [Example 1: Hello 3D](./examples/example-1-hello-3d/)!

_Last updated: January 2025_

