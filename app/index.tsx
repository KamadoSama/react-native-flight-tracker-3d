import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Billet from '@/components/Billet'
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import BottomSheetFly from '@/components/BottomSheet'

const index = () => {
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