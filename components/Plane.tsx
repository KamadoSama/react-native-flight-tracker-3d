import { useGLTF} from '@react-three/drei/native'
import React from 'react';


const Plane = () => {

    const { scene } = useGLTF(require("../assets/model/Plane.glb"));

    return (
        <primitive object={scene} scale={[0.2, 0.2, 0.2]} position={[0, -1, 0]}  />
    );
}

export default Plane;