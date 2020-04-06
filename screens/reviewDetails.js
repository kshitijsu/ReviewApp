import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.nameText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.nameText}>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone Ratings: </Text>
          <Image source={images.ratings[rating]} />
        </View>
        <Button title='Back to Home' onPress={pressHandler} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "red",
  },
});
