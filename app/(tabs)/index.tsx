import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import Fox from '@/components/Fox'
import { Environment } from '@react-three/drei'
import Earth from '@/components/Earth'
import Plane from '@/components/Plane'
import useControls from "r3f-native-orbitcontrols"
import Billet from '@/components/Billet'
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import BottomSheetFly from '@/components/BottomSheet'

const index = () => {
  const [OrbitControls, events] = useControls()
  const sheetRef = React.useRef<BottomSheetMethods>(null);

  const openSheet = () => {
    sheetRef.current?.open();
  }

  return (
    <ImageBackground style={styles.container} resizeMode="cover" source={require("@/assets/images/fly.png")} >

      <Billet />

      <TouchableOpacity style={styles.button} onPress={openSheet}>  
        <Text>Voir plus</Text>
      </TouchableOpacity>
      {/* <View style={styles.bottom} {...events} >
        <Canvas style={{ backgroundColor: "#191919" }} gl={{ preserveDrawingBuffer: true }} performance={{ min: 0.5 }}  camera={{ position: [5, 2, 10], fov: 50 }}>
          <Suspense>
            <OrbitControls />
            <Plane />
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
            <Environment preset="apartment" />
          </Suspense>
        </Canvas>
      </View> */}
      <BottomSheetFly sheetRef={sheetRef} />
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom:{
    height:200,
    width:"100%",
    position:"absolute",
    bottom:0,
  },
  button:{
    width:"95%",
    marginVertical:10,
    borderRadius:40,
    height:60,
    backgroundColor:"#DFDAD4",
    justifyContent:"center",  
    alignItems:"center",
  }

})