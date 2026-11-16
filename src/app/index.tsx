
import { useEffect } from "react";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Image } from "react-native";


export default function SplashScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/intro");
    }, 5000);
    

    return () => clearTimeout(timer);
  }, []);

  return (
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
              <View >
                <Image 
                  source={require("../../assets/interest_icon.png")}
                  style={style.logo}
                />
              </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
  
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"

  },

  logo:{
    height: 200,
    width: 200
  }
})
