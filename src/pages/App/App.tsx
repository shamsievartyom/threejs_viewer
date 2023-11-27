import React, { Suspense } from 'react'
import styles from './App.module.css'
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box/Box";
import { OrbitControls } from '@react-three/drei'
// import Light from "../../components/Light/Light";
import Floor from "../../components/Floor/Floor";
import Draggable from "../../components/Draggable/Draggable";
import Scene from '../../components/Scene/Scene';
import Loader from '../../components/Loadeer/Loader';

const App = () => {
  return (
    <main className={styles.main}>
      <div className={styles.canvas_container}>
        <Canvas
          shadows={true}
          className={styles.canvas}
          camera={{
            position: [150, 200, 350],
          }}
        >
          <Suspense fallback={<Loader />}>
            <Draggable>
             <Scene />
            </Draggable>
            
            <ambientLight color="white" intensity={1} />
            <pointLight intensity={70000} position={[300, 100, 100]} />
            <Box  position={[0,100,0]} scale={20}/>
            
            <OrbitControls />
            {/* <Floor color='red' /> */}
          </Suspense>
        </Canvas>
      </div>
    </main>
  )
}

export default App