import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
    const [sizeShirt, setSizeShirt] = useState("?");
    const [sizePants, setSizePants] = useState("?");
    const [sizeShoes, setSizeShoes] = useState("?");
    const router = useRouter();

    const goToFriends = () => {
        router.push("/friends"); // Ajusta la ruta según tu configuración
    };

    const goToTastes = () => {
        router.push("/Tastes"); // Ajusta la ruta según tu configuración
    };

    const gotoSizes = () =>{
        router.replace("/home")
    };

    return (
        <View style={estilos.container}>
            {/* Header */}
            <View style={estilos.header}>
                <Image
                    source={require("../assets/lotties/giverappdefi.png")}
                    style={estilos.logo}
                />
            </View>

            {/* Contenido Principal (Scrollable) */}
            <ScrollView contentContainerStyle={estilos.content}>
                <View style={estilos.circle}></View>
                <Text style={estilos.centrado}>Enrique Gonzalez</Text>
                <Text style={estilos.sizes}>Sizes (us)</Text>
                <View style={estilos.grid}>
                    <View style={estilos.cuadro}>
                        <Text style={estilos.talla}>{sizeShirt}</Text>
                        <Image
                            source={require("../assets/lotties/shirts.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Text style={estilos.talla}>{sizePants}</Text>
                        <Image
                            source={require("../assets/lotties/pants.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Text style={estilos.talla}>{sizeShoes}</Text>
                        <Image
                            source={require("../assets/lotties/shoes.png")}
                            style={estilos.camisa}
                        />
                    </View>
                </View>
                <Text style={estilos.sizes}>Brands</Text>
                <View style={estilos.grid2}>
                    
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/shirts.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/pants.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/shoes.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/shirts.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/pants.png")}
                            style={estilos.camisa}
                        />
                    </View>
                    <View style={estilos.cuadro}>
                        <Image
                            source={require("../assets/lotties/shoes.png")}
                            style={estilos.camisa}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={estilos.footer}>
                <TouchableOpacity style={estilos.moveon} onPress={gotoSizes}>
                    <Image source={require("../assets/lotties/gancho.png")} />
                    <Text>My Sizes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.moveon} onPress={goToTastes}>
                    <Image source={require("../assets/lotties/plus.png")} />
                    <Text>New Tastes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.moveon} onPress={goToFriends}>
                    <Image source={require("../assets/lotties/Friends.png")} />
                    <Text>Friends</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        backgroundColor: "#f9f9f9",
    },
    header: {
        padding: 20,
        alignItems: "center",
        height:80
    },
    content: {
        flexGrow: 1, // Permite que el contenido crezca y sea scrollable
        padding: 20,
        alignItems: "center",
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#f9f9f9",
        backgroundColor: "#f9f9f9",
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#ccc",
        borderWidth: 2,
        borderColor: "#000",
        marginRight: 10,
    },
    centrado: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 10,
    },
    sizes: {
        alignSelf: "flex-start",
        paddingLeft: 10,
        paddingVertical: 5,
        fontWeight: "600",
    },
    camisa: {},
    grid: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
        padding:10
    },
    talla: {
        fontSize: 18,
        fontWeight: "700",
        paddingLeft: 10,
    },
    logo: {
        width: 150,
        height: 80,
    },
    cuadro: {
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "#000",
        paddingBottom: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 5,
        height: 80,
        width: 100,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    grid2: {
        padding: 10,
        gap: 7,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "100%",
    },
    moveon: {
        justifyContent: "center",
        alignItems: "center",
    },
});