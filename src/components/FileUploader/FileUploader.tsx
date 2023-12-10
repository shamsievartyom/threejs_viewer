import { ChangeEvent, FC, useState, useEffect } from 'react'
import { FBXLoader } from 'three/examples/jsm/Addons.js';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addObject } from '../../redux/slices/upoadSlice';

const FileUploader: FC = () => {
    // const [selectedFile, setSelectedFile] = useState<THREE.Group[]>([]);

    const dispatch = useAppDispatch()
    
    const fbxLoader = new FBXLoader();

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const blob = new Blob([await file.arrayBuffer()]);
            const reader = new FileReader();
            reader.onload = (event) => {
                fbxLoader.load(
                    event.target.result as string,
                    (fbx) => dispatch(addObject(fbx.children)),
                    undefined,
                    (error) => console.error(error)
                );
            };
            reader.readAsDataURL(blob);
        }
    };

    // const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         const file = e.target.files[0];
    //         URL.createObjectURL(file);
    //     }
    // };

    // useEffect(()=>{
    //     console.log(selectedFile)
    // },[selectedFile])

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default FileUploader