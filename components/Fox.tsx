import { Image, StyleSheet, Platform, View } from 'react-native';
import { useGLTF, useAnimations } from '@react-three/drei/native'
import React from 'react';


const Fox = () => {
    const group = React.useRef();
    const { scene, animations } = useGLTF(require("../assets/model/Fox.glb"));
    const { actions, mixer } = useAnimations(animations, group);

    React.useEffect(() => {
        if (actions) {
            // Jouer l'animation principale (par exemple, "Run" ou "Walk")
            // Jouer l'animation principale (par exemple, "Run" ou "Walk")
            actions['Run']?.play();
        }

        // Nettoyer le mixer pour éviter les fuites mémoire
        return () => mixer?.stopAllAction();
    }, [actions, mixer]);


    return (
        <primitive object={scene} ref={group} />
    );
}

export default Fox;