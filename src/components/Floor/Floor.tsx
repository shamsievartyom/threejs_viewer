import { Plane } from "@react-three/drei"
import { ReactNode } from "react"

interface FloorProps {
  color?: string;
  children?: ReactNode;
}

const Floor = (props: FloorProps) => {
  return (
    <Plane {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color={props.color || 'green'} />
    </Plane>
  )
}

export default Floor