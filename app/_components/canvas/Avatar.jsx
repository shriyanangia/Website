"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const AvatarCanvas = () => {
  const containerRef = useRef();

 useEffect(() => {
  const container = containerRef.current;

  // Scene, Camera, Renderer initialization
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    30,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  camera.position.set(0, 2, 5);
  controls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, 3);
  scene.add(ambientLight);

  // Initialize loaders
  const loader = new GLTFLoader(); // Add this line
  const fbxLoader = new FBXLoader();
  const group = new THREE.Group();
  const mixers = [];
  const clock = new THREE.Clock();

  loader.load("models/678597c3de70b99d94453ace.glb", (gltf) => {
    group.add(gltf.scene);
    group.position.set(0, -2, 0);
    group.scale.set(1.5, 1.5, 1.5);
    scene.add(group);

    fbxLoader.load("animations/Standing Greeting.fbx", (fbx) => {
      const mixer = new THREE.AnimationMixer(group);
      const wavingAction = mixer.clipAction(fbx.animations[0]);
      wavingAction.play();
      mixers.push(mixer);

      setTimeout(() => {
        wavingAction.stop();
        fbxLoader.load("animations/Standing Idle.fbx", (fbxIdle) => {
          const standingAction = mixer.clipAction(fbxIdle.animations[0]);
          standingAction.play();
        });
      }, fbx.animations[0].duration * 1000);
    });

    // Mouse tracking
    const target = new THREE.Vector3(0, 0, 1);
    document.addEventListener("mousemove", (event) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      target.set(mouseX, mouseY, 1).unproject(camera);
    });

    const head = group.getObjectByName("Head");
    if (head) {
      head.lookAt(camera.position.clone().setZ(camera.position.z + 10));

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixers.forEach((mixer) => mixer.update(delta));
        head.lookAt(target);
        renderer.render(scene, camera);
      };
      animate();
    }
  });

  const onWindowResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener("resize", onWindowResize);

  return () => {
    window.removeEventListener("resize", onWindowResize);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}, []);

  

  return <div ref={containerRef} className="w-full h-full" />;
};

export default AvatarCanvas;
