import React, { useState, useCallback } from "react";
import {
    SafeAreaView,
    FlatList,
    View,
    Text,
    StyleSheet,
    RefreshControl,
    StatusBar,
    Platform,
} from "react-native";

export default function App() {
    // Sample product state (20 items)
    const [products, setProducts] = useState([
        { id: "1", name: "Laptop" },
        { id: "2", name: "Smartphone" },
        { id: "3", name: "Headphones" },
        { id: "4", name: "Keyboard" },
        { id: "5", name: "Monitor" },
        { id: "6", name: "Mouse" },
        { id: "7", name: "Tablet" },
        { id: "8", name: "Smartwatch" },
        { id: "9", name: "Camera" },
        { id: "10", name: "Printer" },
        { id: "11", name: "Speaker" },
        { id: "12", name: "Microphone" },
        { id: "13", name: "Webcam" },
        { id: "14", name: "Router" },
        { id: "15", name: "Hard Drive" },
        { id: "16", name: "SSD" },
        { id: "17", name: "Graphics Card" },
        { id: "18", name: "Power Bank" },
        { id: "19", name: "Charger" },
        { id: "20", name: "USB Cable" },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    // Pull-to-refresh logic
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            // Example: add a new product
            setProducts((prev) => [
                ...prev,
                {
                    id: (prev.length + 1).toString(),
                    name: `New Product ${prev.length + 1}`,
                },
            ]);
            setRefreshing(false);
        }, 1500);
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.box}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* StatusBar spacer for Android */}
            <View style={styles.statusBarSpacer} />

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    statusBarSpacer: {
        height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
    },
    listContent: {
        padding: 16,
    },
    box: {
        backgroundColor: "#4ADE80",
        padding: 20,
        marginBottom: 12,
        borderRadius: 12,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
});
