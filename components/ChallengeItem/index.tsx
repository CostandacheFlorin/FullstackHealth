import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChallengeItem = () => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
});

export default ChallengeItem;
