import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
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
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            &uarr;
          </Text>
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
    height: 200,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },

  highLight: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    position: "absolute",
    right: 20,
    top: 10,
  },

  descBtn: {
    backgroundColor: "black",
    marginHorizontal: 130,
    marginVertical: 10,
    borderRadius: 20,
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  descText: {
    marginHorizontal: 15,
    marginVertical: 10,
    color: "white",
  },

  description: {
    margin: 10,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // adjust the opacity to achieve the desired glass effect
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    filter: "blur(5px)", // keep the blur effect
    backdropFilter: "blur(5px)", // add this line to apply a blur effect to the background
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // add a subtle shadow to enhance the glass effect
  },
});
