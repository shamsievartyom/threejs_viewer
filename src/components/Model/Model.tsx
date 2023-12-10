import { FC, useState } from 'react'
import { useGLTF, useCursor, useFBX } from "@react-three/drei";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setCurrent, setMode } from '../../redux/slices/transformSlice';
import { MeshProps } from '@react-three/fiber';

interface ModelProps {
  name: string,
}

const Model: FC<ModelProps & MeshProps> = ({ name, ...props }) => {
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.transform);
  // Fetching the GLTF, nodes is a collection of all the meshes
  // It's cached/memoized, it only gets loaded and parsed once
  const { children } = useFBX('/Scene.fbx')
  console.log(children)
  // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      // Click sets the mesh as the new target
      onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(name)); }}
      // If a click happened but this mesh wasn't hit we null out the target,
      // This works because missed pointers fire before the actual hits
      onPointerMissed={(e) => e.type === 'click' && dispatch(setCurrent(null))}
      // Right click cycles through the transform modes
      onContextMenu={(e) => {
        if (current === name) {
          e.stopPropagation();
          dispatch(setMode());
        }
      }}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      name={name}
      geometry={children[0].geometry}
      material={children[0].material}
      material-color={current === name ? '#ff6080' : 'white'}
      {...props}
      dispose={null}
    />
  )
}

export default Model
