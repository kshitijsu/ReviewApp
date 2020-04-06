import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.nameText}>About Screen</Text>
    </View>
  );
}
