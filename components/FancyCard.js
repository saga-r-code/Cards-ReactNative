import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FancyCard = () => {
  const [show, setShow] = useState(false);
  const desc = () => {
    setShow(!show);
  };
  return (
    <View style={styles.conatiner}>
      <Text style={styles.headingText}>Trending Place</Text>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/tree.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.highLight}>Sunset</Text>
        <TouchableOpacity style={styles.descBtn} onPress={desc}>
          <Text style={{ fontSize: 20, color: "white" }}>⬇</Text>
        </TouchableOpacity>
        <View
          style={[
            { display: "none" },
            show ? { display: "flex" } : { display: "none" },
            styles.description,
          ]}
        >
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis n
            atibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  imageContainer: {
    margin: 10,
    width: "100vw",
    height: 200,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    opacity: 0.8,
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },

  highLight: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    right: 20,
    top: 10,
  },

  descBtn: {
    backgroundColor: "gray",
    marginHorizontal: 100,
    marginVertical: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  descText: {
    padding: 10,
  },

  description: {
    margin: 10,
    position: "absolute",
    top: 60,
    backgroundColor: "gray",
    height: 130,
  },
});
