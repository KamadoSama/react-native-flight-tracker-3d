import { useGLTF} from '@react-three/drei/native'
import React from 'react';

interface ModelProps {
    model: any;
}

const Model:React.FC<ModelProps> = ({model}) => {

    const { scene } = useGLTF(model);

    return (
        <primitive object={scene} scale={[0.2, 0.2, 0.2]} position={[0, -1, 0]}  />
    );
}

export default Model;