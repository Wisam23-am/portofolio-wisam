"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  type ThreeEvent,
} from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import {
  Group,
  MathUtils,
  Mesh,
  OrthographicCamera,
  PCFShadowMap,
  Vector3,
} from "three";
import { getZone, zones, type Point, type ZoneId } from "@/content/zones";
import { distance, waypoints } from "@/lib/navigation";
import { usePortfolio } from "@/store/portfolio";
import { ZoneIcon } from "./ZoneContent";

type Vec3 = [number, number, number];
type LabelRefs = React.RefObject<
  Partial<Record<ZoneId, HTMLDivElement | null>>
>;
function Box({
  at,
  size,
  color,
  rotation = 0,
}: {
  at: Vec3;
  size: Vec3;
  color: string;
  rotation?: number;
}) {
  return (
    <mesh position={at} rotation={[0, rotation, 0]} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}
function Cylinder({
  at,
  radius,
  height,
  color,
  top,
  segments = 24,
}: {
  at: Vec3;
  radius: number;
  height: number;
  color: string;
  top?: number;
  segments?: number;
}) {
  return (
    <mesh position={at} castShadow receiveShadow>
      <cylinderGeometry args={[top ?? radius, radius, height, segments]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}
function Windows({
  width = 2.8,
  levels = 2,
  color = "#90b8b8",
  z = 1.06,
}: {
  width?: number;
  levels?: number;
  color?: string;
  z?: number;
}) {
  return (
    <>
      {Array.from({ length: levels }, (_, level) =>
        [-1, 1].map((side) => (
          <group key={`${level}-${side}`}>
            <Box
              at={[side * width * 0.31, 1.1 + level * 0.9, z]}
              size={[0.55, 0.58, 0.08]}
              color="#f7efd9"
            />
            <Box
              at={[side * width * 0.31, 1.1 + level * 0.9, z + 0.05]}
              size={[0.4, 0.43, 0.03]}
              color={color}
            />
            <Box
              at={[side * width * 0.31, 0.76 + level * 0.9, z + 0.05]}
              size={[0.68, 0.1, 0.18]}
              color="#e3dac5"
            />
          </group>
        )),
      )}
    </>
  );
}
function Door({ z = 1.12, color = "#536e65" }: { z?: number; color?: string }) {
  return (
    <>
      <Box at={[0, 0.72, z]} size={[0.57, 1.12, 0.12]} color={color} />
      <Box
        at={[0.16, 0.66, z + 0.08]}
        size={[0.055, 0.055, 0.06]}
        color="#e4c98e"
      />
      <Box at={[0, 0.13, z + 0.18]} size={[1, 0.16, 0.6]} color="#ded6c4" />
    </>
  );
}
function House() {
  return (
    <>
      <Box at={[0, 0.13, 0]} size={[3.6, 0.26, 3]} color="#ddd5bf" />
      <Box at={[0, 1.04, 0]} size={[2.8, 1.8, 2.2]} color="#f5e9d3" />
      <mesh position={[0, 2.18, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.36, 1.16, 4]} />
        <meshStandardMaterial color="#7a9fb3" flatShading />
      </mesh>
      <Box at={[0.8, 2.55, -0.5]} size={[0.38, 1.1, 0.4]} color="#e1b59d" />
      <Windows levels={1} />
      <Door color="#7391a1" />
      <Box at={[0, 1.44, 1.5]} size={[3.2, 0.15, 0.95]} color="#adc3cd" />
      {[-1.4, 1.4].map((x) => (
        <Box
          key={x}
          at={[x, 0.8, 1.75]}
          size={[0.1, 1.4, 0.1]}
          color="#f7f0df"
        />
      ))}
      <Box at={[-1.9, 0.6, 1.2]} size={[0.08, 1.2, 0.08]} color="#b99c79" />
      <Box at={[-1.9, 1.2, 1.2]} size={[0.48, 0.34, 0.32]} color="#7d9eac" />
      <Planter at={[-1.2, 0.2, 1.8]} />
      <Planter at={[1.2, 0.2, 1.8]} />
    </>
  );
}
function Campus() {
  return (
    <>
      <Box at={[0, 0.12, 0]} size={[4.2, 0.25, 3]} color="#ddd6c1" />
      <Box at={[0, 1.35, 0]} size={[3.5, 2.5, 2.2]} color="#e8e5cd" />
      <Box at={[0, 2.7, 0]} size={[3.85, 0.22, 2.6]} color="#7f9c85" />
      <Box at={[0, 3.15, 0]} size={[1.15, 0.9, 1.3]} color="#e8e5cd" />
      <mesh position={[0, 3.85, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.05, 0.6, 4]} />
        <meshStandardMaterial color="#6c8c78" />
      </mesh>
      <mesh position={[0, 3.27, 0.66]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.05, 24]} />
        <meshStandardMaterial color="#fff6dd" />
      </mesh>
      <Box at={[0, 3.32, 0.7]} size={[0.035, 0.2, 0.04]} color="#658373" />
      <Box at={[0.07, 3.24, 0.7]} size={[0.16, 0.035, 0.04]} color="#658373" />
      <Windows width={3.5} levels={2} />
      <Door />
      {[-0.52, 0.52].map((x) => (
        <Cylinder
          key={x}
          at={[x, 0.85, 1.35]}
          radius={0.09}
          height={1.5}
          color="#f8f0dd"
        />
      ))}
      <Box at={[0, 1.64, 1.32]} size={[1.5, 0.16, 0.55]} color="#c1c2a5" />
      <Box
        at={[-1.2, 0.35, 1.7]}
        size={[0.7, 0.15, 0.5]}
        color="#cf9e7c"
        rotation={-0.2}
      />
      <Box
        at={[-1.2, 0.47, 1.7]}
        size={[0.65, 0.12, 0.47]}
        color="#8eaa98"
        rotation={0.1}
      />
    </>
  );
}
function Hall() {
  return (
    <>
      <Box at={[0, 0.1, 0]} size={[3.8, 0.2, 3]} color="#ddd4bc" />
      <Box at={[0, 1.1, 0]} size={[3.2, 2, 2.2]} color="#f0dac1" />
      <mesh position={[0, 2.37, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.65, 0.9, 4]} />
        <meshStandardMaterial color="#c58e70" flatShading />
      </mesh>
      <Windows width={3.2} levels={1} />
      <Door color="#aa7c61" />
      <Cylinder
        at={[1.85, 1.9, 0.1]}
        radius={0.035}
        height={3.7}
        color="#e5dcca"
      />
      <Box at={[2.18, 3.35, 0.1]} size={[0.65, 0.35, 0.045]} color="#bf735a" />
      <Box at={[2.18, 3, 0.1]} size={[0.65, 0.35, 0.045]} color="#fff8e4" />
      <Box at={[-1.85, 0.65, 1.55]} size={[0.8, 0.7, 0.12]} color="#b58f69" />
      <Box at={[-1.85, 0.65, 1.63]} size={[0.62, 0.51, 0.03]} color="#eee4cf" />
      <Bench at={[1.2, 0, 2]} />
    </>
  );
}
function TrophyGarden() {
  return (
    <>
      <Cylinder
        at={[0, 0.12, 0]}
        radius={2.15}
        height={0.24}
        color="#ded4b8"
        segments={48}
      />
      <Box at={[0, 0.55, 0.25]} size={[1.05, 0.85, 1]} color="#eac986" />
      <Box at={[-1.05, 0.36, 0.25]} size={[1, 0.47, 1]} color="#ede1bd" />
      <Box at={[1.05, 0.29, 0.25]} size={[1, 0.33, 1]} color="#d8bc9c" />
      <Cylinder
        at={[0, 1.04, 0.25]}
        radius={0.39}
        height={0.1}
        color="#ad8740"
      />
      <Cylinder
        at={[0, 1.3, 0.25]}
        radius={0.13}
        height={0.5}
        color="#d6a84e"
      />
      <mesh position={[0, 1.78, 0.25]} castShadow>
        <cylinderGeometry args={[0.6, 0.23, 0.75, 12]} />
        <meshStandardMaterial
          color="#edc76a"
          metalness={0.3}
          roughness={0.35}
        />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.56, 1.86, 0.25]}>
          <torusGeometry args={[0.3, 0.075, 6, 12]} />
          <meshStandardMaterial
            color="#dfb254"
            metalness={0.25}
            roughness={0.4}
          />
        </mesh>
      ))}
      {[-1.65, 1.65].map((x) => (
        <group key={x}>
          <Cylinder
            at={[x, 1.2, -0.9]}
            radius={0.045}
            height={2.2}
            color="#b8aa8c"
          />
          <Box at={[x, 2.15, -0.9]} size={[0.52, 0.76, 0.05]} color="#c5a666" />
        </group>
      ))}
    </>
  );
}
function Studio() {
  return (
    <>
      <Box at={[0, 0.12, 0]} size={[4, 0.24, 3.2]} color="#dad3c5" />
      <Box at={[0, 1.25, 0]} size={[3.3, 2.25, 2.6]} color="#e5dfee" />
      <Box at={[0, 2.47, 0]} size={[3.65, 0.23, 2.95]} color="#9c8daf" />
      <Box at={[0.85, 2.75, 0]} size={[1.1, 0.36, 1.35]} color="#c8bfd4" />
      <Box at={[-0.65, 1.28, 1.33]} size={[1.45, 1.23, 0.08]} color="#887e9c" />
      <Box at={[-0.65, 1.3, 1.39]} size={[1.25, 1.02, 0.03]} color="#a5c3cb" />
      <Box at={[-0.65, 1.3, 1.43]} size={[0.06, 1.05, 0.04]} color="#e8e2ed" />
      <Box at={[-0.65, 1.3, 1.43]} size={[1.25, 0.06, 0.04]} color="#e8e2ed" />
      <group position={[1, 0, 0.24]}>
        <Door z={1.12} color="#8c7ea1" />
      </group>
      <Box at={[-0.65, 0.72, 1.5]} size={[1.6, 0.12, 0.6]} color="#ba9d7f" />
      <Box at={[-0.65, 1, 1.65]} size={[0.6, 0.4, 0.06]} color="#515965" />
      <Box at={[-0.65, 1.02, 1.69]} size={[0.49, 0.29, 0.02]} color="#c0dcd3" />
      <Box
        at={[-1, 2.65, -0.15]}
        size={[0.85, 0.06, 1.5]}
        color="#788b9e"
        rotation={0.15}
      />
      <Planter at={[1.65, 0.2, 1.8]} />
    </>
  );
}
function Tree({
  at,
  scale = 1,
  variant = 0,
}: {
  at: Point;
  scale?: number;
  variant?: number;
}) {
  return (
    <group position={[at[0], 0, at[1]]} scale={scale}>
      <Cylinder
        at={[0, 0.65, 0]}
        radius={0.13}
        height={1.3}
        color="#a08a6c"
        segments={7}
      />
      {[0, 1].map((layer) => (
        <mesh key={layer} position={[0, 1.35 + layer * 0.6, 0]} castShadow>
          <coneGeometry args={[0.8 - layer * 0.2, 1.4 - layer * 0.2, 7]} />
          <meshStandardMaterial
            color={variant ? "#8eaa7a" : "#7d9e80"}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
function Planter({ at }: { at: Vec3 }) {
  return (
    <group position={at}>
      <Cylinder
        at={[0, 0.2, 0]}
        radius={0.22}
        top={0.3}
        height={0.4}
        color="#c3987b"
        segments={8}
      />
      <mesh position={[0, 0.55, 0]}>
        <icosahedronGeometry args={[0.37, 0]} />
        <meshStandardMaterial color="#91a880" flatShading />
      </mesh>
    </group>
  );
}
function Bench({ at, rotation = 0 }: { at: Vec3; rotation?: number }) {
  return (
    <group position={at} rotation={[0, rotation, 0]}>
      <Box at={[0, 0.5, 0]} size={[1.2, 0.12, 0.4]} color="#bb9871" />
      <Box at={[0, 0.82, -0.18]} size={[1.2, 0.42, 0.08]} color="#bb9871" />
      {[-0.4, 0.4].map((x) => (
        <Box
          at={[x, 0.25, 0]}
          key={x}
          size={[0.09, 0.5, 0.3]}
          color="#737d70"
        />
      ))}
    </group>
  );
}
function Lamp({ at }: { at: Point }) {
  const night = usePortfolio((s) => s.night);
  return (
    <group position={[at[0], 0, at[1]]}>
      <Cylinder
        at={[0, 1, 0]}
        radius={0.04}
        height={2}
        color="#758174"
        segments={6}
      />
      <Box
        at={[0, 2, 0]}
        size={[0.3, 0.4, 0.3]}
        color={night ? "#ffe0a0" : "#eee8ce"}
      />
      <Box at={[0, 2.25, 0]} size={[0.4, 0.1, 0.4]} color="#758174" />
    </group>
  );
}
function Landmark({ id, labels }: { id: ZoneId; labels: LabelRefs }) {
  const zone = getZone(id);
  const group = useRef<Group>(null);
  const hovered = useRef(false);
  const labelPosition = useRef(new Vector3());
  const navigate = usePortfolio((s) => s.navigate);
  const Model = {
    personal: House,
    education: Campus,
    organisation: Hall,
    achievement: TrophyGarden,
    skills: Studio,
  }[id];
  useFrame(({ camera, size }, dt) => {
    if (group.current)
      group.current.position.y = MathUtils.damp(
        group.current.position.y,
        hovered.current ? 0.15 : 0,
        8,
        dt,
      );
    const label = labels.current[id];
    if (label) {
      const projected = labelPosition.current
        .set(
          zone.position[0],
          id === "education" ? 4.25 : 3.25,
          zone.position[1],
        )
        .project(camera);
      label.style.setProperty(
        "transform",
        `translate3d(${(projected.x * 0.5 + 0.5) * size.width}px, ${(-projected.y * 0.5 + 0.5) * size.height}px, 0) translate(-50%, -50%)`,
      );
      label.style.setProperty("opacity", "1");
    }
  });
  useEffect(
    () => () => {
      document.body.style.cursor = "";
    },
    [],
  );
  return (
    <group position={[zone.position[0], 0, zone.position[1]]}>
      <group
        ref={group}
        onClick={(event: ThreeEvent<MouseEvent>) => {
          event.stopPropagation();
          navigate(id);
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          hovered.current = true;
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          hovered.current = false;
          document.body.style.cursor = "";
        }}
      >
        <Model />
      </group>
    </group>
  );
}
function Fountain() {
  const water = useRef<Mesh>(null);
  const reduced = usePortfolio((s) => s.reducedMotion);
  useFrame(({ clock }) => {
    if (water.current && !reduced)
      water.current.scale.y = 1 + Math.sin(clock.elapsedTime * 2) * 0.08;
  });
  return (
    <group>
      <Cylinder
        at={[0, 0.12, 0]}
        radius={1.45}
        height={0.22}
        color="#d6cdb6"
        segments={40}
      />
      <Cylinder
        at={[0, 0.26, 0]}
        radius={1.24}
        height={0.12}
        color="#9bbfc1"
        segments={40}
      />
      <Cylinder at={[0, 0.7, 0]} radius={0.18} height={1} color="#d8cfb7" />
      <Cylinder
        at={[0, 1.12, 0]}
        radius={0.65}
        top={0.75}
        height={0.15}
        color="#e5dcc4"
      />
      <mesh ref={water} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.19, 10, 8]} />
        <meshStandardMaterial color="#b5dbd9" roughness={0.25} />
      </mesh>
      <Cylinder
        at={[0, 1.32, 0]}
        radius={0.055}
        height={0.38}
        color="#abd0cf"
      />
    </group>
  );
}
function PathMarker() {
  const target = usePortfolio((s) => s.target);
  const moving = usePortfolio((s) => s.moving);
  const path = usePortfolio((s) => s.path);
  const marker = useRef<Mesh>(null);
  const dots = useMemo(
    () =>
      path.flatMap((point, index) => {
        if (!index) return [];
        const before = path[index - 1],
          count = Math.ceil(distance(before, point) / 0.5);
        return Array.from({ length: count }, (_, i): Point => [
          MathUtils.lerp(before[0], point[0], i / count),
          MathUtils.lerp(before[1], point[1], i / count),
        ]);
      }),
    [path],
  );
  useFrame(({ clock }) => {
    if (marker.current)
      marker.current.scale.setScalar(
        1 + Math.sin(clock.elapsedTime * 4) * 0.09,
      );
  });
  if (!target) return null;
  const point = waypoints[getZone(target).node];
  return (
    <>
      <mesh
        ref={marker}
        position={[point[0], 0.04, point[1]]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[0.4, 0.48, 32]} />
        <meshBasicMaterial
          color={getZone(target).color}
          transparent
          opacity={0.8}
        />
      </mesh>
      {moving &&
        dots.map((dot, i) => (
          <mesh
            key={i}
            position={[dot[0], 0.045, dot[1]]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <circleGeometry args={[0.055, 6]} />
            <meshBasicMaterial color="#638d7a" />
          </mesh>
        ))}
    </>
  );
}
function Character() {
  const character = useRef<Group>(null),
    body = useRef<Group>(null),
    leftLeg = useRef<Group>(null),
    rightLeg = useRef<Group>(null),
    leftArm = useRef<Group>(null),
    rightArm = useRef<Group>(null);
  const segment = useRef(1),
    lastPath = useRef<Point[]>([]),
    arrivalTime = useRef(-10);
  const waveUntil = useRef(0);
  useFrame(({ clock }, delta) => {
    const state = usePortfolio.getState();
    const dt = Math.min(delta, 0.05),
      time = clock.elapsedTime;
    if (!character.current) return;
    if (state.path !== lastPath.current) {
      lastPath.current = state.path;
      segment.current = 1;
    }
    if (state.moving && state.path.length > 1) {
      const destination = state.path[segment.current];
      const current: Point = [
        character.current.position.x,
        character.current.position.z,
      ];
      const length = distance(current, destination);
      const step = 3.2 * dt;
      if (length <= step) {
        character.current.position.x = destination[0];
        character.current.position.z = destination[1];
        segment.current++;
        if (segment.current >= state.path.length) {
          state.arrive();
          arrivalTime.current = time;
          waveUntil.current = time + 1.8;
        }
      } else {
        character.current.position.x +=
          ((destination[0] - current[0]) / length) * step;
        character.current.position.z +=
          ((destination[1] - current[1]) / length) * step;
        const angle = Math.atan2(
          destination[0] - current[0],
          destination[1] - current[1],
        );
        character.current.rotation.y +=
          Math.atan2(
            Math.sin(angle - character.current.rotation.y),
            Math.cos(angle - character.current.rotation.y),
          ) *
          (1 - Math.exp(-12 * dt));
      }
      usePortfolio.setState({
        position: [character.current.position.x, character.current.position.z],
      });
    } else {
      character.current.position.set(
        state.position[0],
        0.04,
        state.position[1],
      );
      if (time - arrivalTime.current < 2)
        character.current.rotation.y = MathUtils.damp(
          character.current.rotation.y,
          0.4,
          5,
          dt,
        );
    }
    const stride =
      state.moving && !state.reducedMotion ? Math.sin(time * 11) * 0.65 : 0;
    if (leftLeg.current) leftLeg.current.rotation.x = stride;
    if (rightLeg.current) rightLeg.current.rotation.x = -stride;
    if (leftArm.current) leftArm.current.rotation.x = -stride * 0.6;
    if (rightArm.current) {
      rightArm.current.rotation.x = stride * 0.6;
      rightArm.current.rotation.z =
        time < waveUntil.current && !state.reducedMotion
          ? -2.2 + Math.sin(time * 13) * 0.25
          : -0.1;
    }
    if (body.current)
      body.current.position.y = state.reducedMotion
        ? 0
        : Math.sin(time * (state.moving ? 22 : 2)) *
          (state.moving ? 0.025 : 0.015);
  });
  return (
    <group
      ref={character}
      position={[waypoints[1][0], 0.04, waypoints[1][1]]}
      onClick={(e) => {
        e.stopPropagation();
        waveUntil.current = Infinity;
      }}
      onPointerOut={() => {
        waveUntil.current = 0;
      }}
    >
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.34, 20]} />
        <meshBasicMaterial
          color="#536c52"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
      <group ref={body}>
        <Box at={[0, 0.85, 0]} size={[0.43, 0.5, 0.28]} color="#647e9e" />
        <mesh position={[0, 1.3, 0]} castShadow>
          <boxGeometry args={[0.42, 0.43, 0.38]} />
          <meshStandardMaterial color="#deb591" />
        </mesh>
        <Box at={[0, 1.53, -0.035]} size={[0.46, 0.15, 0.42]} color="#4f4844" />
        <Box at={[0, 1.4, -0.18]} size={[0.45, 0.22, 0.1]} color="#4f4844" />
        {[-1, 1].map((side) => (
          <Box
            key={side}
            at={[side * 0.1, 1.32, 0.199]}
            size={[0.045, 0.045, 0.015]}
            color="#4c4847"
          />
        ))}
        <group ref={leftLeg} position={[-0.12, 0.61, 0]}>
          <Box at={[0, -0.22, 0]} size={[0.17, 0.44, 0.2]} color="#4a5361" />
          <Box at={[0, -0.46, 0.04]} size={[0.2, 0.09, 0.29]} color="#faf1de" />
        </group>
        <group ref={rightLeg} position={[0.12, 0.61, 0]}>
          <Box at={[0, -0.22, 0]} size={[0.17, 0.44, 0.2]} color="#4a5361" />
          <Box at={[0, -0.46, 0.04]} size={[0.2, 0.09, 0.29]} color="#faf1de" />
        </group>
        <group ref={leftArm} position={[-0.29, 1.02, 0]}>
          <Box at={[0, -0.18, 0]} size={[0.15, 0.4, 0.19]} color="#647e9e" />
          <Box at={[0, -0.4, 0]} size={[0.13, 0.14, 0.16]} color="#deb591" />
        </group>
        <group ref={rightArm} position={[0.29, 1.02, 0]}>
          <Box at={[0, -0.18, 0]} size={[0.15, 0.4, 0.19]} color="#647e9e" />
          <Box at={[0, -0.4, 0]} size={[0.13, 0.14, 0.16]} color="#deb591" />
        </group>
        <Box at={[0, 0.86, -0.2]} size={[0.33, 0.36, 0.16]} color="#b9a181" />
      </group>
    </group>
  );
}
function CameraRig({ zoom }: { zoom: number }) {
  const look = useRef(new Vector3());
  const active = usePortfolio((s) => s.active);
  const reducedMotion = usePortfolio((s) => s.reducedMotion);
  useFrame(({ camera, size }, dt) => {
    const state = usePortfolio.getState();
    const x = active && size.width > 700 ? 2.8 : state.position[0] * 0.08;
    const z = state.position[1] * 0.06;
    const damping = reducedMotion ? 1 : 1 - Math.exp(-3 * dt);
    look.current.lerp(new Vector3(x, 0, z), damping);
    camera.position.set(look.current.x + 16, 19, look.current.z + 24);
    camera.lookAt(look.current);
    const ortho = camera as OrthographicCamera;
    ortho.zoom = MathUtils.damp(
      ortho.zoom,
      Math.min(size.width / 25, size.height / 21) * zoom,
      reducedMotion ? 1000 : 5,
      dt,
    );
    ortho.updateProjectionMatrix();
  });
  return null;
}
function Scene({ zoom, labels }: { zoom: number; labels: LabelRefs }) {
  const night = usePortfolio((s) => s.night);
  const lowPower = usePortfolio((s) => s.lowPower);
  const { gl, invalidate } = useThree();
  useEffect(() => {
    const ready = requestAnimationFrame(() =>
      usePortfolio.setState({ ready: true }),
    );
    const lost = (event: Event) => {
      event.preventDefault();
      usePortfolio.getState().fallback();
    };
    const visible = () => {
      if (!document.hidden) invalidate();
    };
    gl.domElement.addEventListener("webglcontextlost", lost);
    document.addEventListener("visibilitychange", visible);
    return () => {
      cancelAnimationFrame(ready);
      gl.domElement.removeEventListener("webglcontextlost", lost);
      document.removeEventListener("visibilitychange", visible);
    };
  }, [gl, invalidate]);
  useFrame(() => {
    if (!document.hidden) invalidate();
  });
  return (
    <>
      <CameraRig zoom={zoom} />
      <ambientLight
        intensity={night ? 0.8 : 1.6}
        color={night ? "#9aaed7" : "#fff5df"}
      />
      <hemisphereLight args={[night ? "#8a9ac7" : "#dfedec", "#b2a287", 1.1]} />
      <directionalLight
        position={[-8, 17, 8]}
        intensity={night ? 0.6 : 2.8}
        color={night ? "#c8d6fa" : "#fff1d6"}
        castShadow={!lowPower}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-normalBias={0.04}
      />
      <group position={[0, -0.15, 0]}>
        <Cylinder
          at={[0, -0.62, 0]}
          radius={10.1}
          top={10.6}
          height={0.85}
          color="#a8b4a0"
          segments={64}
        />
        <Cylinder
          at={[0, -0.13, 0]}
          radius={10.6}
          height={0.18}
          color={night ? "#8eaa95" : "#c2cfac"}
          segments={64}
        />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.025, 0]}
          receiveShadow
        >
          <ringGeometry args={[3.35, 4.65, 10]} />
          <meshStandardMaterial color="#e9dfc6" />
        </mesh>
        {zones.map((zone) => {
          const node = waypoints[zone.node];
          const dx = zone.position[0] - node[0],
            dz = zone.position[1] - node[1];
          return (
            <Box
              key={zone.id}
              at={[
                (zone.position[0] + node[0]) / 2,
                -0.014,
                (zone.position[1] + node[1]) / 2,
              ]}
              size={[0.85, 0.04, Math.hypot(dx, dz)]}
              color="#e9dfc6"
              rotation={Math.atan2(dx, dz)}
            />
          );
        })}
        <Fountain />
        {zones.map((zone) => (
          <Landmark key={zone.id} id={zone.id} labels={labels} />
        ))}
        {(
          [
            [-8, 3],
            [-7.6, 5],
            [-5, -6],
            [-6.6, -5],
            [2, -8.1],
            [4, -7.2],
            [8.5, -1.5],
            [8.6, 1],
            [3.2, 7.4],
            [1.1, 8],
            [-1.2, 7.8],
            [-8.6, -0.4],
            [7.6, 5.5],
          ] as Point[]
        ).map((at, index) => (
          <Tree
            key={index}
            at={at}
            scale={0.75 + (index % 3) * 0.15}
            variant={index % 2}
          />
        ))}
        {(
          [
            [-2, -5.2],
            [4.9, 1.5],
            [-4.8, 2],
            [1.8, 4.6],
          ] as Point[]
        ).map((at, index) => (
          <Lamp key={index} at={at} />
        ))}
        <Bench at={[-2, 0, 0.5]} rotation={Math.PI / 2} />
        <Bench at={[2, 0, -0.5]} rotation={-Math.PI / 2} />
        {Array.from({ length: 20 }, (_, i) => {
          const angle = i * 2.399,
            radius = 7.5 + (i % 3) * 0.45;
          return (
            <mesh
              key={i}
              position={[
                Math.sin(angle) * radius,
                0.12,
                Math.cos(angle) * radius,
              ]}
            >
              <icosahedronGeometry args={[0.12 + (i % 2) * 0.07, 0]} />
              <meshStandardMaterial
                color={["#e8d8b2", "#c79685", "#e8e8d6"][i % 3]}
              />
            </mesh>
          );
        })}
        <PathMarker />
        <Character />
      </group>
      {!lowPower && <BakeShadows />}
    </>
  );
}
export default function World({ zoom }: { zoom: number }) {
  const lowPower = usePortfolio((s) => s.lowPower);
  const target = usePortfolio((s) => s.target);
  const navigate = usePortfolio((s) => s.navigate);
  const labels = useRef<Partial<Record<ZoneId, HTMLDivElement | null>>>({});
  return (
    <div className="world-renderer">
      <Canvas
        orthographic
        camera={{ position: [16, 19, 24], zoom: 28, near: 0.1, far: 150 }}
        dpr={[1, lowPower ? 1 : 1.5]}
        shadows={lowPower ? false : { type: PCFShadowMap }}
        frameloop="demand"
        gl={{ antialias: !lowPower, alpha: true, powerPreference: "low-power" }}
        fallback={<p>Gunakan versi sederhana untuk membaca portofolio.</p>}
      >
        <Scene zoom={zoom} labels={labels} />
      </Canvas>
      <div className="world-label-layer">
        {zones.map((zone) => (
          <div
            className="projected-label"
            key={zone.id}
            ref={(element) => {
              labels.current[zone.id] = element;
            }}
          >
            <button
              className={`landmark-label ${target === zone.id ? "landmark-selected" : ""}`}
              onClick={() => navigate(zone.id)}
              style={{ "--zone-color": zone.color } as React.CSSProperties}
            >
              <ZoneIcon id={zone.id} size={15} />
              <span>{zone.short}</span>
              <span className="landmark-dot" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
