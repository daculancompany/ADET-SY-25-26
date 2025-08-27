import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";




// Header Component
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My React Native App</Text>
    </View>
  );
};

// Profile Component
const Profile = ({ name }) => {
  return (
    <View style={styles.profile}>
      <Text style={styles.profileText}>
        {name ? `Hello, ${name}! 👋` : "Enter your name above"}
      </Text>
    </View>
  );
};

// Body Component
const Body = ({ name, setName }) => {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Type your name..."
        value={name}
        onChangeText={setName} // handles input change
      />
      <Profile name={name} />
    </View>
  );
};

// Main App Component
export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Body name={name} setName={setName} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  header: {
    padding: 15,
    backgroundColor: "#6200ee",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  body: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  profile: {
    padding: 15,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  profileText: {
    fontSize: 18,
  },
});
// activity
//https://chatgpt.com/c/68ac22e8-d05c-8320-bedd-a0e9c7ce3f33