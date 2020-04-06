import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: "Pubg", rating: 5, body: "loren ipsum", key: 1 },
    { title: "Call of Duty", rating: 3, body: "loren ipsum", key: 2 },
    { title: "Fortnite", rating: 2, body: "loren ipsum", key: 3 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.modalContent}>
        <Modal visible={modalOpen} animationType='slide'>
          <MaterialIcons
            name='close'
            size={25}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </Modal>
      </View>
      <MaterialIcons
        name='add'
        size={25}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        keyExtractor={(item) => item.key.toString()}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.nameText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
  modalContent: {
    justifyContent: "flex-start",
  },
});
