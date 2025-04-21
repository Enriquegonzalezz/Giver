import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Nombre, setNombre] = useState("");
  const router = useRouter();

  const Gotoreg = () =>{
    router.replace('/home')
  }

  return (

    <View style={estilos.contregister}>
        
      <View style={estilos.logoContainer}>
       
        <LottieView source={require("@/assets/lotties/giver splashscreen.json")}></LottieView>
      </View>
      <View>
        <Text style={estilos.text}>Email</Text>
        <TextInput
          placeholder="correo@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={estilos.input}
        />

        <Text style={estilos.textp}>Password</Text>
        <TextInput
          placeholder="*********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={estilos.input}
        />

        <Text style={estilos.textp}>Name and surname</Text>
        <TextInput
          placeholder="Enrique gonzalez"
          value={Nombre}
          onChangeText={setNombre}
          style={estilos.input}
        />

        {/* Nuevo View con el círculo y el botón */}
        <View style={estilos.imagePickerContainer}>
          <View style={estilos.circle}></View>
          <TouchableOpacity style={estilos.choosePictureButton}>
            <Text style={estilos.choosePictureText}>Choose picture</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.centry}>
            <TouchableOpacity style={estilos.entradahome} onPress={Gotoreg}>Get in!</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contregister: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    transform: [{scale:2}]
    
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  textp: {
    marginTop: 10,
  },
  input: {
    width: 250,
    height: 45,
    borderBottomWidth: 3,
    borderBottomColor: "#999",
    paddingHorizontal: 1,
  },
  imagePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent:"center",
    gap:20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
  },
  choosePictureButton: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    paddingVertical: 8,          //si el codigo es spanglish  porque yo me la doy de gringou 
    paddingHorizontal: 12,
  },
  choosePictureText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  centry:{
 justifyContent:"center",
    alignItems:"center"
  },
  entradahome: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderWidth: 3,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor:"#000",
    marginTop:20,
    width:150,
    color:"#fff",
    textAlign: "center"
   

  },
});