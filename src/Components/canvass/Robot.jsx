import { useState, useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const RobotCanvas = ({ isMobile }) => {
  const { nodes, materials } = useGLTF("./Robot_GLTF/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={2} />
      <pointLight intensity={15} position={[0, 1, 3]} />
      <spotLight intensity={15} position={[0, 1, -3]} />
      <primitive
        object={nodes._rootJoint}
        scale={isMobile ? 0.75 : 1}
        position={[0, 0, 0]}
        rotation={[-1.5, 0, -0.2]}
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.Mat_Screen}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.Mat_ScreenInner}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.Mat_FaceRender}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_60.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_60.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_61.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_61.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_63.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_63.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_64.geometry}
        material={materials.Mat_White}
        skeleton={nodes.Object_64.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_66.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_66.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_67.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_67.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_69.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_69.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_70.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_70.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_72.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_72.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_73.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_73.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_75.geometry}
        material={materials.Mat_Orange}
        skeleton={nodes.Object_75.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_76.geometry}
        material={materials.Mat_Black}
        skeleton={nodes.Object_76.skeleton}
      />
    </mesh>
  );
};
const Robot = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 860px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
      />
      <RobotCanvas isMobile={isMobile} />
      {/* </Suspense> */}
    </Canvas>
  );
};
useGLTF.preload("./Robot_GLTF/scene.gltf");
export default Robot;
