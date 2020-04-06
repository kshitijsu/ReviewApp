import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

async function getFonts() {
  await Font.loadAsync({
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "nunito-italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
  });
}

import Home from "./screens/home";

export default function App() {
  const [fontsLoad, setFontsLoaded] = useState(false);

  if (fontsLoad) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
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
