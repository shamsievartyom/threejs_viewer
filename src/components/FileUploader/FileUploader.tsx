import { ChangeEvent, FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addObject } from '../../redux/slices/upoadSlice';

const FileUploader: FC = () => {

    const dispatch = useAppDispatch()
    
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            dispatch(addObject(URL.createObjectURL(file)))
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default FileUploader