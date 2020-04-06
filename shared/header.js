import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View
      // source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      {/*Icon for header */}
      <MaterialIcons
        name='menu'
        size={30}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
});
