import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { contain } from 'three/src/extras/TextureUtils'
import { Iconify } from 'react-native-iconify'

export interface OptionButtonProps {
    icon: React.ReactNode,
    title: string
}

const OptionButton: React.FC<OptionButtonProps> = ({ icon, title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            {icon}
            <Text style={styles.title}>{title}</Text>
            <Iconify icon="solar:alt-arrow-down-linear" size={20} color="#fff" />
        </TouchableOpacity>
    )
}

export default OptionButton

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 30,
        borderColor:"#fff",
        borderWidth:1,
        marginVertical:5,
        marginHorizontal:5
    },
    title:{
        color:"#fff",
        fontSize:12,
        marginHorizontal:10
    }
})