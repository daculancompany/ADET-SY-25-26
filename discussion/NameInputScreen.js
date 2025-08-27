import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// ----------------- Header Component -----------------
function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to My App</Text>
        </View>
    );
}

// ----------------- Content Component -----------------
function Content({ name, setName }) {
    return (
        <View style={styles.content}>
            <Text style={styles.label}>Enter your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                value={name}
                onChangeText={(text) => setName(text)} // updates parent state
            />

            <Text style={styles.displayText}>
                {name ? `Hello, ${name}! 👋` : "Your name will appear here."}
            </Text>
        </View>
    );
}

// ----------------- Footer Component -----------------
function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 My App</Text>
        </View>
    );
}

// ----------------- Main Screen -----------------
export default function NameInputScreen() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Header />
            <Content name={name} setName={setName} />
            <Footer />
        </View>
    );
}

// ----------------- Styles -----------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        padding: 20,
        backgroundColor: "#4a90e2",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        width: "80%",
        marginBottom: 20,
        backgroundColor: "white",
    },
    displayText: {
        fontSize: 18,
        fontStyle: "italic",
    },
    footer: {
        padding: 15,
        backgroundColor: "#333",
        alignItems: "center",
    },
    footerText: {
        color: "white",
        fontSize: 14,
    },
});
