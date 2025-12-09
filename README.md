# 🎨 React Three Fiber Tutorial Series

Complete React Three Fiber tutorial series: 7 courses, 41 examples, 12 projects. Learn 3D web development from basics to advanced - 3D models, animations, physics, post-processing, optimization & deployment.

A comprehensive, hands-on learning roadmap to master React Three Fiber (R3F) - a React renderer for Three.js that allows you to build stunning 3D web experiences declaratively with React.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2+-61DAFB?logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.158+-000000?logo=three.js)](https://threejs.org/)

## 🎯 Learning Goals

By the end of this series, you will be able to:

- ✅ Build interactive 3D web experiences with React
- ✅ Understand Three.js fundamentals through React
- ✅ Create animations, interactions, and immersive experiences
- ✅ Load and manipulate 3D models
- ✅ Implement physics simulations
- ✅ Optimize 3D performance in React applications
- ✅ Deploy 3D applications to production
- ✅ Follow R3F best practices and patterns

## 📚 Course Overview

| Course | Focus | Examples | Projects | Duration |
|--------|-------|----------|----------|----------|
| **[Course 0: Foundation & Setup](./Course-0-Foundation-Setup/)** | Understanding 3D concepts, Three.js basics, R3F setup | 5 | 1 | 1-2 weeks |
| **[Course 1: Core Concepts](./Course-1-Core-Concepts/)** | R3F primitives, components, and basic interactions | 6 | 2 | 2-3 weeks |
| **[Course 2: Advanced Geometry & Materials](./Course-2-Advanced-Geometry-Materials/)** | Complex geometries, custom materials, textures | 6 | 2 | 3-4 weeks |
| **[Course 3: Lighting & Post-Processing](./Course-3-Lighting-PostProcessing/)** | Advanced lighting, shadows, post-processing effects | 6 | 2 | 2-3 weeks |
| **[Course 4: Animation & Physics](./Course-4-Animation-Physics/)** | Animations, physics simulation, interactions | 6 | 2 | 3-4 weeks |
| **[Course 5: Performance & Optimization](./Course-5-Performance-Optimization/)** | Performance optimization, LOD, instancing | 6 | 2 | 2-3 weeks |
| **[Course 6: Advanced Techniques & Production](./Course-6-Advanced-Techniques-Production/)** | Advanced patterns, deployment, real-world applications | 6 | 2 | 3-4 weeks |
| **Total** | | **41** | **12** | **16-22 weeks** |

## 🛠️ Prerequisites

Before starting this series, you should have:

- **React Fundamentals**: Components, hooks, state management
- **JavaScript ES6+**: Modern JavaScript features (arrow functions, destructuring, async/await)
- **Basic 3D Math**: Understanding of 3D coordinates (helpful but not required)
- **Node.js & npm**: Package management and development tools
- **Git**: Version control basics
- **Code Editor**: VS Code recommended (with React and GLSL extensions)

## 🗺️ Learning Path

### Phase 1: Foundation (Courses 0-1)
Build understanding of 3D concepts and R3F basics. Learn primitives, transformations, and basic interactions.

### Phase 2: Building Blocks (Courses 2-3)
Learn to create complex scenes with models, materials, lighting, and post-processing effects.

### Phase 3: Interactivity (Course 4)
Add animations and physics for dynamic, interactive experiences.

### Phase 4: Production (Courses 5-6)
Optimize performance and deploy real-world 3D applications.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TechnoBlogger14o3/react-three-fiber-tutorials.git
   cd react-three-fiber-tutorials
   ```

2. **Navigate to a course**
   ```bash
   cd Course-0-Foundation-Setup
   ```

3. **Choose an example or project**
   ```bash
   cd examples/example-1-hello-3d
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to the URL shown in terminal (usually `http://localhost:5173`)

## 📖 Course Structure

Each course follows this structure:

```
CourseX-Topic/
├── README.md          # Theory, concepts, examples overview
├── examples/          # Small working examples
│   ├── example-1-topic/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── README.md
│   └── ...
└── project/           # Full 3D applications
    ├── project-1/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── README.md
    └── ...
```

## 📦 Technologies & Libraries

### Core
- **React Three Fiber** (`@react-three/fiber`) - React renderer for Three.js
- **Three.js** - 3D graphics library
- **React Three Drei** (`@react-three/drei`) - Helpers and utilities

### Animation
- **React Spring** (`@react-spring/three`) - Animation library
- **GSAP** (optional) - Advanced animations

### Physics
- **Rapier** (`@react-three/rapier`) - Physics engine

### Post-Processing
- **Postprocessing** (`postprocessing`) - Effects library

### Utilities
- **Leva** (`leva`) - GUI controls for debugging
- **Zustand** - State management (optional)

## 📊 Course Statistics

- **Total Courses**: 7 (Course 0-6)
- **Total Examples**: 41 examples
- **Total Projects**: 12 projects
- **Estimated Duration**: 16-22 weeks (4-5.5 months)
- **Difficulty**: Beginner to Advanced
- **Estimated Code Files**: 150+

## 📚 Resources

### Official Documentation
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Drei](https://github.com/pmndrs/drei)

### Learning Resources
- Three.js Fundamentals
- WebGL Basics
- 3D Math Basics

### Communities
- [R3F Discord](https://discord.gg/poimandres)
- [Three.js Forum](https://discourse.threejs.org/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-three-fiber)

## 🎯 Project Ideas by Course

### Course 0: Foundation
- **3D Scene Viewer**: Basic scene with multiple objects

### Course 1: Core Concepts
- **Interactive 3D Gallery**: Clickable objects with animations
- **3D Product Showcase**: Rotating product display

### Course 2: Advanced Geometry
- **3D Model Viewer**: Load and display 3D models
- **Material Showcase**: Interactive material library

### Course 3: Lighting & Effects
- **Lighting Studio**: Interactive lighting tool
- **Post-Processing Demo**: Effects showcase

### Course 4: Animation & Physics
- **Physics Playground**: Interactive physics simulation
- **Animated 3D Scene**: Complex animation sequences

### Course 5: Performance
- **Optimized 3D City**: Large scene optimization
- **Performance Benchmark**: Optimization comparison

### Course 6: Production
- **3D Portfolio Website**: Complete portfolio with 3D elements
- **Interactive 3D Experience**: Full-featured 3D application

## 📝 Learning Checklist

Track your progress with our comprehensive learning checklist. See each course README for detailed checklists.

### Course 0: Foundation & Setup
- [ ] Understand what R3F is and why it's useful
- [ ] Set up R3F development environment
- [ ] Create first 3D scene
- [ ] Understand Scene, Camera, Renderer
- [ ] Learn basic 3D coordinate system
- [ ] Set up camera controls

### Course 1: Core Concepts
- [ ] Master R3F primitives
- [ ] Understand transformations
- [ ] Use refs in 3D context
- [ ] Handle 3D interactions
- [ ] Create basic animations
- [ ] Organize objects in groups

_See individual course READMEs for complete checklists._

## 🤝 Contributing

Contributions are welcome! This is a learning resource, so improvements and examples are encouraged.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-example`)
3. Commit your changes (`git commit -m 'Add amazing example'`)
4. Push to the branch (`git push origin feature/amazing-example`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Tutorial Series

Check out our other comprehensive React tutorial series:

- **[React Web Tutorials](https://github.com/TechnoBlogger14o3/react-web-tutorials)** - Complete React web development series
- **[React Native Tutorials](https://github.com/TechnoBlogger14o3/react-native-tutorials)** - Complete React Native mobile development series

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - The amazing R3F team
- [Three.js](https://threejs.org/) - The Three.js community
- [React Three Drei](https://github.com/pmndrs/drei) - Helpful utilities and helpers

## 📖 Additional Documentation

- [Course Plan](./REACT_THREE_FIBER_COURSE_PLAN.md) - Detailed course breakdown
- [Step-by-Step Guide](./REACT_THREE_FIBER_STEP_BY_STEP_GUIDE.md) - Day-by-day learning guide
- [Repository Structure](./REACT_THREE_FIBER_REPO_STRUCTURE.md) - Complete structure reference
- [Summary](./REACT_THREE_FIBER_SUMMARY.md) - Plan summary

---

**Ready to start your 3D journey?** Begin with [Course 0: Foundation & Setup](./Course-0-Foundation-Setup/)!

_Last updated: January 2025_

