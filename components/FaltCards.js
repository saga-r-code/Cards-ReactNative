import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FaltCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Falt Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>yellow</Text>
        </View>
      </View>
    </View>
  );
};

export default FaltCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },

  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  cardOne: {
    backgroundColor: "red",
  },
  cardTwo: {
    backgroundColor: "green",
  },
  cardThree: {
    backgroundColor: "blue",
  },
  cardFour: {
    backgroundColor: "yellow",
  },
});
