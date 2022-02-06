import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading"; // expo install expo-app-loading
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStackNavigation from "./DrawerNavigation/AuthenticationStackNavigation";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "319624225408-7htgm1g049thu3lr42plth5v7v7sas53.apps.googleusercontent.com",
    });
  }, []);

  let [fontsLoaded] = useFonts({
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-semiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading error={(error) => console.log("Error: ", error)} />;
  } else {
    return (
      <>
        <NavigationContainer>
          <AuthenticationStackNavigation />
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
