import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useRouter } from "expo-router"
import LottieView from "lottie-react-native";





export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isAuthenticated = true;
    if (isAuthenticated) {
      router.replace("/home"); // Redirige a Home
    }
  };

  const Gotoreg = () => {
    router.replace("/register"); // Redirige a Home
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LottieView source={require("@/assets/lotties/giver splashscreen.json")}></LottieView>
      </View>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="correo@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.textp}>Password</Text>
        <TextInput
          placeholder="*********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.sugerencia}>Still do  you don't <br /> have an account?</Text>
        <TouchableOpacity onPress={Gotoreg} style={styles.botonregi}>
          <Text style={styles.link}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleLogin} style= {styles.botonlog}>
          <Text style={styles.linklog}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    width:150,
    height:150,
    transform: [{ scale: 2.5 }]
  },
  logo: {
  
   
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },

  textp:{
    marginTop:10
  },
  input: {
    width: 250, // Ocupa todo el ancho disponible
    height: 45, // Altura del TextInput
    borderBottomWidth: 3, // Línea en la parte inferior
    borderBottomColor: '#999', // Color de la línea
    paddingHorizontal: 1,
    
    
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width:250

  },
  sugerencia: {
    fontSize: 14,
    color: "gray",
  },
  botonregi: {
    marginTop: 10,
  },

  botonlog:{
    backgroundColor: "#000",
    color: "#f9f9f9",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth:3,
    borderStyle:"solid",
    padding: 10,
    paddingHorizontal:30,
    marginTop:30
  },
  link: {
    fontSize: 14,
    color: "black",
    fontWeight:"600",
    padding:12,
    borderRadius: 10,
    borderColor: "black",
    borderWidth:3,
    borderStyle:"solid"
  },

  linklog:{
    color: "#f9f9f9",
  }
});
