import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ContactList = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "+1234567890",
      about: "Software Engineer at ABC Corp",
      status: "Available",
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "+9876543210",
      about: "Marketing Manager at DEF Inc.",
      status: "Busy",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phoneNumber: "+5551234567",
      about: "Sales Representative at GHI Ltd.",
      status: "Offline",
    },
    {
      id: 4,
      name: "Alice Brown",
      phoneNumber: "+7778901234",
      about: "Graphic Designer at JKL Studios",
      status: "Available",
    },
    {
      id: 5,
      name: "Mike Davis",
      phoneNumber: "+9998765432",
      about: "CEO at MNO Corp.",
      status: "Busy",
    },
    {
      id: 6,
      name: "Emily Chen",
      phoneNumber: "+6665551234",
      about: "Data Analyst at PQR Inc.",
      status: "Offline",
    },
    {
      id: 7,
      name: "Kevin White",
      phoneNumber: "+3332221111",
      about: "Software Developer at STU Tech.",
      status: "Available",
    },
    {
      id: 8,
      name: "Sarah Lee",
      phoneNumber: "+4445556666",
      about: "HR Manager at VWX Corp.",
      status: "Busy",
    },
    {
      id: 9,
      name: "David Kim",
      phoneNumber: "+2223334444",
      about: "Product Manager at YZC Inc.",
      status: "Offline",
    },
    {
      id: 10,
      name: "Lisa Nguyen",
      phoneNumber: "+1112223333",
      about: "UX Designer at ABCD Studios",
      status: "Available",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        {people.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.status}>{item.status}</Text>
            <View style={styles.header}>
              <MaterialCommunityIcons
                name="account"
                size={24}
                color="black"
                style={{
                  backgroundColor: "gray",
                  padding: 5,
                  borderRadius: 50,
                }}
              />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.about}>{item.about}</Text>
              <Text style={styles.phoneNumber}>
                Phone No:- {item.phoneNumber}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap:10,
    padding:10,
  },
  card: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  status: {
    color: "green",
    paddingHorizontal: 5,
    fontWeight: "600",
    textAlign: "right",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  contact: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
  phoneNumber: {
    fontWeight: "bold",
  },
});
