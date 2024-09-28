import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ActionCard = () => {
  const openWebsite = (websiteLink) => {
    Linking.openURL(websiteLink);
    // Linking.openURL('https://txtool.netlify.app');
  };
  return (
    <View>
      <Text style={styles.headingText}>TextUtils - Website</Text>
      <View style={styles.conatiner}>
        <Text style={{fontSize:20,color:"#333333", fontWeight:"bold", textDecorationLine:"underline"}}>Linking React-Nativee</Text>
        <Text style={{ fontSize: 16, color: "#A0937D", fontWeight: "bold" }}>
          This website offers a comprehensive text-based utility platform for
          data manipulation and analysis. This Website provide features like
          remove extra space, copy text, text convert into uppercase to
          lowercase
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Check out my first website &darr;
        </Text>
        <TouchableOpacity
          style={styles.buttonLink}
          onPress={() => openWebsite("https://txtool.netlify.app")}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>TextUtils</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  conatiner: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  buttonLink: {
    backgroundColor: "#6482AD",
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
