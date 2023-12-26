import { Suspense } from 'react'
import styles from './App.module.css'
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box/Box";
import Loader from '../../components/Loadeer/Loader';
import Controls from '../../components/Controls/Controls';
import { useAppSelector } from '../../hooks/useAppSelector';
import FBXModel from '../../components/FBXModel/FBXModel';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCurrent, switchMode } from '../../redux/slices/transformSlice';
import RightPanel from '../../components/RightPanel/RightPanel';

const App = () => {

  const ListOfObject3D = useAppSelector(store => store.upolad)

  const dispatch = useAppDispatch()

  return (
    <div className={styles.global_container}>
      <main className={styles.main}>
          <Canvas
            shadows={true}
            onPointerMissed={(e) => e.type === 'click' && dispatch(setCurrent(null))}
            onContextMenu={(e) => {
              e.stopPropagation();
              dispatch(switchMode());
            }}
            camera={{
              fov: 75,
              near: 0.1,
              far: 10000,
              position: [150, 200, 350],
            }}
          >
            <Suspense fallback={<Loader />}>

              {ListOfObject3D.map((url) => {
                return <FBXModel url={url} key={url} />
              })}

              {/* <ambientLight castShadow color="white" intensity={1} /> */}
              <pointLight
                distance={1000}
                castShadow
                intensity={100000}
                position={[300, 400, 100]}
                shadow-mapSize-width={1024 * 4}
                shadow-mapSize-height={1024 * 4}
              />
              <Box position={[0, 100, 0]} scale={20} />
              <Controls />
            </Suspense>
          </Canvas>
      </main>
      <RightPanel />
    </div>
  )
}

export default App