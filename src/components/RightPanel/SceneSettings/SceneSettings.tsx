import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { changeItensity, changeShadowResolution } from '../../../redux/slices/sceneSlice'
import DefaultInput from '../../DefaultInput/DefaultInput'

const SceneSettings = () => {

  const { ambientLigth, shadowResolution } = useAppSelector((store) => store.scene)

  const dispatch = useAppDispatch()

  return (
    <>
      <DefaultInput
        value={ambientLigth}
        type='range'
        min={0}
        max={5}
        onChange={(e) => { dispatch(changeItensity(Number(e.target.value))) }}
        labelText='Ambient ligth itensity'
        step={0.05} />
      <DefaultInput
        value={shadowResolution}
        type='range'
        min={1024}
        max={1024 * 4}
        onChange={(e) => { dispatch(changeShadowResolution(Number(e.target.value))) }}
        labelText='Shadow Resolution'
        step={1} />
    </>
  )
}

export default SceneSettings