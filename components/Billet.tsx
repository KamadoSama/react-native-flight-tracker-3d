import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Iconify } from 'react-native-iconify';

const Billet = () => {
    const [barcodeUrl, setBarcodeUrl] = React.useState("");

    React.useEffect(() => {
        // Génération d'un code-barres PDF417 via une API
        const generateBarcode = async () => {
            const url = `https://bwipjs-api.metafloor.com/?bcid=pdf417&text=${123456789}`;
            setBarcodeUrl(url);
        };

        generateBarcode();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Iconify icon="ri:walk-fill" size={28} color="#FED201" />
                </View>
                <View>
                    <Text style={{ fontWeight: "700" }}> Gate A10</Text>
                    <Text> Gate departure in 45 min </Text>
                </View>
            </View>

            <View style={styles.bottom}>

                <View style={styles.flightInfo}>
                    <View >
                        <Text style={styles.title}>Gate</Text>
                        <Text style={styles.value}> A10</Text>
                    </View>

                    <View style={{ marginLeft: 10, alignItems: "flex-end", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Text style={styles.title} >Boarding</Text>
                        <Text style={[styles.value, { color: "#5c5656" }]}> 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.containDetails}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Iconify icon="proicons:airplane-takeoff" size={28} color="#052482" />
                            <Text style={{ color: "#052482", fontWeight: "700", fontSize: 16, marginLeft: 5 }}>KamadoFlight</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Text style={{ fontWeight:"400", fontSize: 18, marginLeft: 5 }}>
                                ***
                            </Text>
                            <Text style={{ fontWeight:"400", fontSize: 26, marginLeft: 5 }}>
                                LAX/CDG
                            </Text>
                        </View>
                    </View>

                    <Image
                        source={{ uri: barcodeUrl }}
                        style={styles.barcode}
                        resizeMode="contain"
                    />
                </View>

            </View>
        </View>
    )
}

export default Billet

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: "95%",
        backgroundColor: "#fff",
        borderRadius: 20,

    },
    header: {
        height: 60,
        width: "100%",
        backgroundColor: "#FED201",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    iconContainer: {
        height: 35,
        width: 35,
        backgroundColor: "#000",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",

    },
    bottom: {
        flex: 1,
        flexDirection: "column",
    },
    flightInfo: {
        // flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    title: { fontWeight: "400", alignSelf: "flex-start", marginLeft: 11 },
    value: { fontWeight: "700", fontSize: 42, alignSelf: "flex-end", color: "#A8A3A0", },
    column: {
        flex: 1, // Chaque colonne occupe un espace équitable
        alignItems: 'flex-start', // Aligne le texte à gauche
    },
    containDetails: {
        flexDirection: 'row',
        // backgroundColor: "#F5F5F5",
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    barcode: {
        width: 200,
        height: 70,
    },

})