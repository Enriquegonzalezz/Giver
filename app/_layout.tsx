import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import SplashScreenComp from '@/components/Splashscreen';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Estado para verificar registro
  const colorScheme = useColorScheme();
  const router = useRouter();

  //ando simulando
  const checkRegistration = async () => {
    // Aquí puedes usar AsyncStorage, una API, etc.
    const userIsRegistered = false; // Cambia esto según tu lógica
    setIsRegistered(userIsRegistered);
  };

  //Efecto para redirigir después de la Splash Screen si esta registardo para home y si no para login o register
  useEffect(() => {
    if (isSplashFinished && isAppReady) {
      if (isRegistered) {
        router.replace("/(tabs)"); // Redirige a Home si está registrado
      } else {
        router.replace("/login"); // Redirige a Login si no está registrado
      }
    }
  }, [isSplashFinished, isAppReady, isRegistered]);

  //Efecto para verificar el registro al inicio 
  useEffect(() => {
    checkRegistration();
  }, []);

  if (!isAppReady) {
    return (
      <SplashScreenComp
        onFinish={(isCancelled) => {
          if (!isCancelled) {
            console.log("Splash finalizado, cargando app...");
            setIsAppReady(true);
            setIsSplashFinished(true);
          }
        }}
      />
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        
        <Stack.Screen name="login" options={{ headerShown: false }} />
        
        <Stack.Screen name="register" options={{ headerShown: false }} />
        
        <Stack.Screen name="home" options={{ headerShown: false }} />

        <Stack.Screen name="Tastes" options={{ headerShown: false }} />

        <Stack.Screen name="friends" options={{ headerShown: false }} />
      
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}