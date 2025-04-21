import { TextInput, View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";


export default function NewTastes(){

     const [sizeShirt, setSizeShirt] = useState("?");
        const [sizePants, setSizePants] = useState("?");
        const [sizeShoes, setSizeShoes] = useState("?");

        const [ModalVisible,setModalVisible]= useState(false)
        const router = useRouter();

        const goToFriends = () => {
            router.replace("/friends"); // Ajusta la ruta según tu configuración
        };
    
        const goToTastes = () => {
            router.replace("/Tastes"); // Ajusta la ruta según tu configuración
        };
    
        const gotoSizes = () =>{
            router.replace("/home")
        };

        const brands = [
            { id: 1, name: "Nike", logo: require("../assets/lotties/Friends.png") },
            { id: 2, name: "Adidas", logo: require("../assets/lotties/Friends.png") },
            { id: 3, name: "Puma", logo: require("../assets/lotties/Friends.png") },
            { id: 4, name: "Gucci", logo: require("../assets/lotties/Friends.png") },
        ];



    return(



            <View style={estilos.container}>
                    {/* Header */}
                    <View style={estilos.header}>
                        <Image
                            source={require("../assets/lotties/giverappdefi.png")}
                            style={estilos.logo}
                        />
                    </View>
                    {/* Content*/ }
                    <ScrollView contentContainerStyle={estilos.content}>

                        <View style={estilos.cuadradodetallas}>
                            <View style={estilos.cuadro}>
                                <Text style={estilos.talla}>{sizeShirt}</Text>
                                <Image
                                source={require("../assets/lotties/shirts.png")}
                                style={estilos.camisa}
                                />
                            </View>
                            <Text style={estilos.igual}>=</Text>
                            <View style={estilos.putalla}>
                                <Text style={estilos.quetalla}>What is your <br />size of pants?</Text>
                                <TextInput style={estilos.input} placeholder="XS" value={sizeShirt}/> 
                            </View>
                        </View>
                        <View style={estilos.cuadradodetallas}>
                            <View style={estilos.cuadro}>
                                <Text style={estilos.talla}>{sizePants}</Text>
                                <Image
                                source={require("../assets/lotties/pants.png")}
                                style={estilos.camisa}
                                />
                            </View>
                            <Text style={estilos.igual}>=</Text>
                            <View style={estilos.putalla}>
                                <Text style={estilos.quetalla}>What is your <br />size of pants?</Text>
                                <TextInput style={estilos.input} placeholder="XS" value={sizePants}/> 
                            </View>
                        </View>
                        <View style={estilos.cuadradodetallas}>
                            <View style={estilos.cuadro}>
                                <Text style={estilos.talla}>{sizeShoes}</Text>
                                <Image
                                source={require("../assets/lotties/shoes.png")}
                                style={estilos.camisa}
                                />
                            </View>
                            <Text style={estilos.igual}>=</Text>
                            <View style={estilos.putalla}>
                                <Text style={estilos.quetalla}>What is your <br />size of pants?</Text>
                                <TextInput style={estilos.input} placeholder="XS" value={sizeShoes}/> 
                            </View>
                        </View>
                        <View style={estilos.brand}>
                            <TouchableOpacity
                             style={estilos.       cuadrobrand}
                             onPress={()=> setModalVisible(true)}>
                                <Text style={estilos.press}>Press here to choose your favorites brands</Text>
                            </TouchableOpacity>
                            <Text style={estilos.choose}>Choose the brands <br />what you like</Text>
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

                <Modal
                animationType="slide"               transparent={true}
               visible={ModalVisible}
               onRequestClose={() => {
                   setModalVisible(false); // Cierra el modal al presionar el botón de retroceso en Android
               }}
               >
                                   <View style={estilos.centeredView}>
                                       <View style={estilos.modalView}>
                                           <Text style={estilos.modalTitle}>Elige tus marcas favoritas</Text>
                   
                                           {/* Cuadrícula de marcas */}
                                           <View style={estilos.brandGrid}>
                                               {brands.map((brand) => (
                                                   <TouchableOpacity key={brand.id} style={estilos.brandCard}>
                                                       <Image source={brand.logo} style={estilos.brandLogo} />
                                                       <Text style={estilos.brandName}>{brand.name}</Text>
                                                   </TouchableOpacity>
                                               ))}
                                           </View>
                   
                                           {/* Botón de aceptar */}
                                           <TouchableOpacity
                                               style={estilos.buttonAccept}
                                               onPress={() => setModalVisible(false)} // Cierra el modal
                                           >
                                               <Text style={estilos.buttonText}>Aceptar</Text>
                                           </TouchableOpacity>
                                       </View>
                                   </View>
                   </Modal>
                

            </View>


    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    header: {
        padding: 20,
        alignItems: "center",
        height: 80,
    },
    content: {
        flexGrow: 1,
        padding: 20,
        alignItems: "center",
    },
    cuadradodetallas: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
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
    talla: {
        fontSize: 18,
        fontWeight: "700",
        paddingLeft: 10,
    },
    camisa: {},
    igual: {
        fontSize: 18,
        fontWeight: "700",
    },
    putalla: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    quetalla: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
    },
    input: {
        width: 30,
        textAlign: "center",
        marginTop: 10,
        height: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#999",
        paddingHorizontal: 1,
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
    moveon: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 80,
    },
    cuadrobrand: {
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "#000",
        paddingBottom: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 5,
        height: 130,
        width: 140,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    brand: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        alignItems: "center",
    },
    press: {
        textAlign: "center",
        fontWeight: "500",
    },
    choose: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18,
    },
    // Estilos para el modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    brandGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
    },
    brandCard: {
        width: "48%", // Para que quepan 2 en una fila
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
    },
    brandLogo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    brandName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "500",
    },
    buttonAccept: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});