"use client";
// App.jsx (main thread)
import { lazy } from "react";
import { Canvas } from "@react-three/offscreen";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./clump"));

// This is the worker thread that will render the scene
const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
  type: "module",
});

export default function App() {
  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
      worker={worker}
      fallback={<Scene />}
    />
  );
}
