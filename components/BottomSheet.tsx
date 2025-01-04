import React, { Suspense } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BottomSheet from '@devvie/bottom-sheet';
import { Iconify } from 'react-native-iconify';
import { Colors } from '@/constants/Colors';
import OptionButton, { OptionButtonProps } from './OptionButton';
import { Canvas } from '@react-three/fiber/native'
import useControls from "r3f-native-orbitcontrols"
import { Environment } from '@react-three/drei'
import Model from './Model';


interface BottomSheetProps {
    sheetRef: any
}

const TabOptionButton: OptionButtonProps[] = [
    {
        icon: <Iconify icon="material-symbols:person-rounded" size={19} color="#fff" />,
        title: "My Flight"
    },
    {
        icon: <Iconify icon="hugeicons:ai-magic" size={19} color="#fff" />,
        title: "Alternatives"
    },
    {
        icon: <Iconify icon="mdi:users" size={19} color="#fff" />,
        title: "Share"
    }
]

const BottomSheetFly: React.FC<BottomSheetProps> = ({ sheetRef }) => {
    const [OrbitControls, events] = useControls()
    return (
        <BottomSheet
            height={750}
            disableKeyboardHandling={true}
            disableBodyPanning={true}
            style={styles.bottomSheetStyle}
            ref={sheetRef}>

            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.iconContainer}>
                            <Iconify icon="proicons:airplane-takeoff" size={30} color="#fff" />
                        </View>

                        <View>
                            <Text style={styles.flightInfo}>LH109 - Sun 17 Nov</Text>
                            <Text style={styles.route}>Los Angeles to Paris</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Iconify icon="material-symbols:close-rounded" size={27} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Time Details */}
                <View style={styles.timeSection}>
                    <View style={styles.row}>
                        <View style={styles.timeCard}>
                            <Text style={styles.airportCode}>LAX</Text>
                            <Text style={styles.time}>9:00 AM</Text>
                        </View>

                        <View style={styles.timeCard}>
                            <Iconify icon="clarity:minus-line" size={22} color={Colors.light.dimGray} />

                            <Iconify icon="famicons:airplane-sharp" size={22} color={Colors.light.dimGray} />

                            <Iconify icon="clarity:minus-line" size={22} color={Colors.light.dimGray} />
                        </View>

                        <View style={styles.timeCard}>
                            <Text style={styles.airportCode}>ORY</Text>
                            <Text style={styles.time}>4:00 PM</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.scrollContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {TabOptionButton.map((item, index) => (
                            <View key={index} >
                                <OptionButton {...item} />
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.timeSection}>
                    <View style={[styles.row, { justifyContent: "flex-start", }]}>
                        <Iconify icon="el:star-alt" size={12} color="#fff" />
                        <Text style={styles.airportDetailTitle} >LAX - </Text>
                        <Text style={styles.airportDetail}> Los Angeles International Airport</Text>
                    </View>

                    <View style={[styles.row]}>
                        <View style={{ width: "50%" }}>
                            <Text style={[styles.time, { marginLeft: 0, fontSize: 30 }]}>9:00 AM</Text>
                            <Text style={styles.status}><Text style={{ color: Colors.light.green }}>On time</Text> - Departs in 59 min</Text>
                        </View>

                        <View>
                            <View style={styles.terminalContainer}>
                                <Iconify icon='emojione-monotone:down-arrow' size={20} color="#000" rotation={245} />
                                <Text style={styles.terminal}>A10</Text>

                            </View>
                            <Text style={styles.terminalLabel}>Terminal 1</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.timeSection}>
                    <View style={[styles.row, { justifyContent: "flex-start", }]}>
                        <Iconify icon="el:star-alt" size={12} color="#fff" />
                        <Text style={styles.airportDetailTitle} >ORY - </Text>
                        <Text style={styles.airportDetail}>
                            Paris Orly Airport
                        </Text>
                    </View>

                    <View style={[styles.row]}>
                        <View style={{ width: "50%" }}>
                            <Text style={[styles.time, { marginLeft: 0, fontSize: 30 }]}>4:00 PM</Text>
                            <Text style={styles.status}><Text style={{ color: Colors.light.green }}>On time</Text> -
                                Arrives in 9h
                            </Text>
                        </View>

                        <View>
                            <View style={styles.terminalContainer}>
                                <Iconify icon='majesticons:suitcase-2' size={20} color="#000" />
                                <Text style={styles.terminal}>23</Text>

                            </View>
                            <Text style={styles.terminalLabel}>Terminal 3</Text>
                        </View>
                    </View>
                </View>
                {/* Flight Image */}
                <View style={styles.imageContainer}>
                    <View style={styles.container3D}  {...events} >
                        <Canvas style={{ backgroundColor: Colors.light.taupeGray, height: 200, width: '100%', borderRadius: 8 }} gl={{ preserveDrawingBuffer: true }} performance={{ min: 0.5 }} camera={{ position: [5, 2, 10], fov: 50 }}>
                            <Suspense>
                                <OrbitControls
                                    enableZoom={true}
                                    maxPolarAngle={Math.PI / 2}
                                    minPolarAngle={0}
                                    enablePan={false}
                                    maxZoom={10}
                                    // minZoom={5}
                                    maxAzimuthAngle={Math.PI / 2}
                                />
                                <Model model={require("../assets/model/Plane.glb")} />
                                <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
                                <Environment preset="apartment" />
                            </Suspense>
                        </Canvas>
                    </View>
                </View>

            </ScrollView>
        </BottomSheet>

    )
}

export default BottomSheetFly

const styles = StyleSheet.create({
    scrollContainer: {
        marginBottom: 15,
    },
    iconContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 30,
        padding: 5,
        marginRight: 20,
    },
    scrollView: {
        paddingTop: 0,
        padding: 20,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomSheetStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#070707',
    },
    container: {
        // flex: 1,
        width: '100%',
        backgroundColor: '#000', // Dark background
        // padding: 10,
        paddingHorizontal: 10,
    },
    header: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    flightInfo: {
        color: Colors.light.taupeGray,
        fontSize: 16,
        fontWeight: 'bold',
    },
    route: {
        color: '#fff',
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    timeSection: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    airportCode: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    time: {
        color: Colors.light.green,
        fontSize: 22,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    status: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 5,
    },
    terminalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: Colors.light.yellow,
        borderRadius: 12,
        padding: 5,
        width: 70,
    },
    terminal: {
        color: '#000',
        padding: 5,
        borderRadius: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    terminalLabel: {
        color: '#ccc',
        fontSize: 12,
    },
    imageContainer: {
        // alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        height: 200,
        borderRadius: 10,

    },
    image: {
        width: 300,
        height: 150,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#444',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    airportDetailTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 7
    },
    airportDetail: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    container3D: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 200,
    },

});