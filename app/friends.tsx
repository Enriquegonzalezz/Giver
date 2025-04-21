import Amigo from "@/components/amigo";
import { useRouter } from "expo-router";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function friends() {
    const router = useRouter();
    const goToFriends = () => {
        router.replace("/friends"); // Ajusta la ruta según tu configuración
    };

    const gotoSizes = () => {
        router.replace("/home");
    };

    const goToTastes = () => {
        router.push("/Tastes"); // Ajusta la ruta según tu configuración
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

            {/* Contenido Scrollable */}
            <ScrollView contentContainerStyle={estilos.content}>
                {/* Barra de búsqueda */}
                <View style={estilos.searchbar}>
                    <TextInput
                        style={estilos.input}
                        placeholder="Buscar..."
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Lista de amigos */}
                <Amigo picture="" name="Enrique Gonzalez" update="" />
                <Amigo picture="" name="Angelo Polgrossi" update="" />
                <Amigo picture="" name="Samuel Molina" update="" />
                <Amigo picture="" name="Sony Gomez" update="" />
                <Amigo picture="" name="Maria Garcia" update="" />
            </ScrollView>

            {/* Footer */}
            <View style={estilos.footer}>
                <TouchableOpacity style={estilos.moveon} onPress={gotoSizes}>
                    <Image source={require("../assets/lotties/gancho.png")} style={estilos.icon} />
                    <Text style={estilos.footerText}>My Sizes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.moveon} onPress={goToTastes}>
                    <Image source={require("../assets/lotties/plus.png")} style={estilos.icon} />
                    <Text style={estilos.footerText}>New Tastes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.moveon} onPress={goToFriends}>
                    <Image source={require("../assets/lotties/Friends.png")} style={estilos.icon} />
                    <Text style={estilos.footerText}>Friends</Text>
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
    logo: {
        width: 150,
        height: 80,
    },
    content: {
        flexGrow: 1, // Permite que el contenido crezca y sea scrollable
        padding: 20,
        backgroundColor:"#f9f9f9"
    },
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        paddingHorizontal: 10,
        margin:10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: "#000",
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#f9f9f9",
        backgroundColor: "#f9f9f9", // Fondo blanco para el footer
    },
    moveon: {
        alignItems: "center",
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 5, // Espacio entre el icono y el texto
    },
    footerText: {
        fontSize: 12,
        color: "#000", // Color del texto del footer
    },
}); 

