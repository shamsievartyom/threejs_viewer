import React, { Suspense } from 'react'
import styles from './App.module.css'
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box/Box";
// import Light from "../../components/Light/Light";
// import Floor from "../../components/Floor/Floor";
import Model from '../../components/Model/Model';
import Loader from '../../components/Loadeer/Loader';
import Controls from '../../components/Controls/Controls';
import FileUploader from '../../components/FileUploader/FileUploader';
import Model2 from '../../components/Model2/Model2';
import { useAppSelector } from '../../hooks/useAppSelector';

const App = () => {

  const ListOfObject3D = useAppSelector(store=>store.upolad)

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

            {/* <Model name="Curly" position={[1, -11, -20]} rotation={[2, 0, -0]} />
            <Model name="Curly" position={[20, 0, -17]} rotation={[1, 1, -2]} />
            <Model name="Notebook" position={[-21, -15, -13]} rotation={[2, 0, 1]} /> */}

            {ListOfObject3D.map((object3D)=>{
              return (
                object3D.map((el)=>{
                  return <Model2 object3D={el} key={el.uuid}/>
                })
              )
            })}
            {/* {ListOfObject3D[0] && <Model2 object3D={ListOfObject3D[0]} />} */}

            <ambientLight color="white" intensity={1} />
            <pointLight intensity={70000} position={[300, 100, 100]} />
            {/* <Box position={[0, 100, 0]} scale={20} /> */}
            {/* <Floor color='red' /> */}
            {/* <OrbitControls makeDefault /> */}
            <Controls />
          </Suspense>
        </Canvas>
      </div>
      <FileUploader />
    </main>
  )
}

export default App