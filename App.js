import {
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import FaltCards from "./components/FaltCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#F0EBE3"}}>
      <StatusBar backgroundColor="gray"></StatusBar>
      <ScrollView>
        <FaltCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard/>
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


