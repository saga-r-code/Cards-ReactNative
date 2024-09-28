import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ElevatedCard = () => {
  const arr = [
    {
      colors: "purple",
    },
    {
      colors: "orange",
    },
    {
      colors: "teal",
    },
    {
      colors: "magenta",
    },
    {
      colors: "silver",
    },
    {
      colors: "coral",
    },
    {
      colors: "lime",
    },
    {
      colors: "turquoise",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>

      <ScrollView
        style={styles.container}
        horizontal={true}
        // showsHorizontalScrollIndicator={false} scroll line
        // contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {arr.map((item, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: item.colors }]}
          >
            <Text>
              {item.colors.charAt(0).toUpperCase() + item.colors.slice(1)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  container: {
    backgroundColor: "black",
    padding: 10,
    width: "95%",
    margin: "auto",
  },

  card: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#CDC2A5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
});
