import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const RobotCanvas = () => {
  const { nodes, materials } = useGLTF("./Robot_GLTF/scene.gltf");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={150}>
          <primitive object={nodes._rootJoint} />
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
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/scene.gltf");
export default RobotCanvas;
