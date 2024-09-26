import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import FaltCards from "./components/FaltCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";

const App = () => {
  const [theme, setTheme] = useState(false);
  const toggle = () => {
    setTheme(!theme);
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="gray"></StatusBar>
      <ScrollView>
        <FaltCards />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    paddingTop:20
  },
  mode:{
    backgroundColor:"black",
    color:"white",
    fontSize:16,
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:10

  }
});
