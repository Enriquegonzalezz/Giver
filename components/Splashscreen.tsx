import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import logo from "@/assets/lotties/giver splashscreen.json";

export default function SplashScreenComp({
  onFinish = (isCancelled) => {},
}: {
  onFinish?: (isCancelled: boolean) => void;
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <LottieView
        source={logo}
        onAnimationFinish={() => {
          console.log("Splash finalizado"); // Debugging
          onFinish(false);
        }}
        autoPlay
        loop={false}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      />
    </SafeAreaView>
  );
}
