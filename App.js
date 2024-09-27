import {
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FaltCards from "./components/FaltCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#F0EBE3"}}>
      <StatusBar backgroundColor="gray"></StatusBar>
      <ScrollView>
        <FaltCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


