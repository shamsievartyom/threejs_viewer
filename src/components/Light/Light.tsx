interface LightProps {
  color?: string;
  intensity?: number;
}

const Light: React.FC<LightProps> = ({ color = 'white', intensity = 1}) => {
  return (
    <>
      <ambientLight color={color} intensity={intensity} />
    </>
  )
}

export default Light