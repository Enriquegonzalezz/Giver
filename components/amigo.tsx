
import React from "react";
import { View, Image, Text} from "react-native"
import { StyleSheet } from "react-native";

interface propsAmigo{
    name: string;
    picture: string;
    update: string;


}


const Amigo: React.FC<propsAmigo> = ({name, picture, update}) =>
    {
        return(
            <View style={estilos.card}>

                <Image source={{uri: picture}} style={estilos.cardPicture} />
                <View style={estilos.flex}>
                    <Text style={estilos.nome}>{name}</Text>
                    <Text style={estilos.update}>{update}</Text>
                </View>
            </View>
        )
}

const estilos = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        borderRadius:10,
        borderWidth:3,
        borderColor: '#000',
        margin: 10,
        },
    cardPicture:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#ccc",
        borderWidth: 2,
        borderColor: "#000",
        marginRight: 10,
    },
    flex:{
        flexDirection:"column"

    },

    nome:{
        fontSize: 18,
        fontWeight: 'bold',

    },
    update:{
        color:"#ccc"
    }
  }
);

export default Amigo