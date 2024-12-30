
import {useGLTF} from '@react-three/drei/native'


const Earth=()=> {

  const { scene } = useGLTF(require("../assets/model/earth.glb"));

  return (
    <primitive object={scene} />
  );
}

export default Earth;