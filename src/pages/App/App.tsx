import React, { Suspense } from 'react'
import styles from './App.module.css'
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box/Box";
import Loader from '../../components/Loadeer/Loader';
import Controls from '../../components/Controls/Controls';
import FileUploader from '../../components/FileUploader/FileUploader';
import { useAppSelector } from '../../hooks/useAppSelector';
import FBXModel from '../../components/FBXModel/FBXModel';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCurrent } from '../../redux/slices/transformSlice';

const App = () => {

  const ListOfObject3D = useAppSelector(store=>store.upolad)

  const dispatch = useAppDispatch()

  return (
    <main className={styles.main}>
      <div className={styles.canvas_container}>
        <Canvas
          shadows={true}
          className={styles.canvas}
          onPointerMissed={(e) => e.type === 'click' && dispatch(setCurrent(null))}
          camera={{
            position: [150, 200, 350],
          }}
        >
          <Suspense fallback={<Loader />}>

            {ListOfObject3D.map((url)=>{
                return <FBXModel url={url} key={url}/>
            })}
          
            <ambientLight color="white" intensity={1} />
            <pointLight intensity={70000} position={[300, 100, 100]} />
            <Box position={[0, 100, 0]} scale={20} />
            <Controls />
          </Suspense>
        </Canvas>
      </div>
      <FileUploader />
    </main>
  )
}

export default App