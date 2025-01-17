"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. 씬 생성
    const scene = new THREE.Scene();

    // 2. 카메라 생성
    const camera = new THREE.PerspectiveCamera(
      40, // Camera frustum vertical field of view.
      window.innerWidth / window.innerHeight, // Camera frustum aspect ratio.
      0.1, // Camera frustum near plane.
      1000 // Camera frustum far plane.
    );
    camera.position.set(5, 5, 5); // 카메라 위치 설정
    camera.lookAt(0, 0, 0); // 큐브들이 정중앙에 오도록 카메라 시선 조정

    // 3. 렌더러 생성
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const size = 0.8;
    const gap = 1.5;
    const cubeSize = 3;

    const material = new THREE.MeshBasicMaterial({
      color: 0xd9d9d9,
      opacity: 0.1,

      transparent: true,
    });

    // 각 큐브의 라인 설정
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff0000,
      linewidth: 2,
    });

    for (let i = 0; i < cubeSize; i++) {
      for (let j = 0; j < cubeSize; j++) {
        for (let k = 0; k < cubeSize; k++) {
          const geometry = new THREE.BoxGeometry(size, size, size); // 큐브의 사이즈 설정
          const cube = new THREE.Mesh(geometry, material);

          //간격을 두고 배치
          cube.position.set(
            i * (size * gap) - (cubeSize * (size + gap)) / 2, // X 좌표
            j * (size * gap) - (cubeSize * (size + gap)) / 2, // Y 좌표
            k * (size * gap) - (cubeSize * (size + gap)) / 2 // Z 좌표
          );

          scene.add(cube);

          const edges = new THREE.EdgesGeometry(geometry); //큐브 모서리 추출
          const line = new THREE.LineSegments(edges, lineMaterial); //라인 생성
          line.position.set(
            i * (size * gap) - (cubeSize * (size + gap)) / 2, // X 좌표
            j * (size * gap) - (cubeSize * (size + gap)) / 2, // Y 좌표
            k * (size * gap) - (cubeSize * (size + gap)) / 2 // Z 좌표
          );
          scene.add(line);
        }
      }
    }

    // 6. 애니메이션 설정
    const animate = () => {
      requestAnimationFrame(animate);

      // 씬을 회전시켜서 큐브가 돌아가게 하기
      scene.rotation.x += 0.005;
      scene.rotation.y += 0.005;
      scene.rotation.z += 0.005;

      // 렌더링
      renderer.render(scene, camera);
    };

    animate();

    // 윈도우 크기 변경 시 렌더러 크기 재조정
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 unmount 될 때 정리
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
