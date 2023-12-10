import { FC, useEffect, useState } from 'react'
import { useGLTF, useCursor, useFBX } from "@react-three/drei";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setCurrent, setMode } from '../../redux/slices/transformSlice';
import { MeshProps } from '@react-three/fiber';

interface ModelProps {
    object3D: THREE.Object3D,
}

const Model2: FC<ModelProps & MeshProps> = ({ object3D, ...props }) => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log(object3D)
    },[])
    const { current } = useAppSelector((state) => state.transform);
    // Fetching the GLTF, nodes is a collection of all the meshes
    // It's cached/memoized, it only gets loaded and parsed once
    // const { children } = useFBX('/Scene.fbx')
    // console.log(children)
    // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)
    return (
        // <>
        // {object3D.map((el)=>{
        //     return (
        //         <mesh
        //              key={el.uuid}
        //             // Click sets the mesh as the new target
        //             onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(el.name)); }}
        //             // If a click happened but this mesh wasn't hit we null out the target,
        //             // This works because missed pointers fire before the actual hits
        //             onPointerMissed={(e) => e.type === 'click' && dispatch(setCurrent(null))}
        //             // Right click cycles through the transform modes
        //             onContextMenu={(e) => {
        //                 if (current === el.name) {
        //                     e.stopPropagation();
        //                     dispatch(setMode());
        //                 }
        //             }}
        //             onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        //             onPointerOut={() => setHovered(false)}
        //             name={el.name}
        //             geometry={el.geometry}
        //             material={el.material}
        //             material-color={el.name ? '#ff6080' : 'white'}
        //             {...props}
        //             dispose={null}
        //         />
        //     )
        // })}
        // </>
        <mesh
            // Click sets the mesh as the new target
            onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(object3D.name)); }}
            // If a click happened but this mesh wasn't hit we null out the target,
            // This works because missed pointers fire before the actual hits
            onPointerMissed={(e) => e.type === 'click' && dispatch(setCurrent(null))}
            // Right click cycles through the transform modes
            onContextMenu={(e) => {
                if (current === object3D.name) {
                    e.stopPropagation();
                    dispatch(setMode());
                }
            }}
            position={object3D.position}
            rotation={object3D.rotation}
            scale={object3D.scale}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            name={object3D.name}
            geometry={object3D.geometry}
            material={object3D.material}
            material-color={current === object3D.name ? '#ff6080': 'white'}
            {...props}
            dispose={null}
        />
    )
}

export default Model2
