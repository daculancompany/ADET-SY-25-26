import React, { useState, useCallback } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    RefreshControl,
    StatusBar,
    Platform,
} from "react-native";

export default function App() {
    // Sample product state
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Smartphone" },
        { id: 3, name: "Headphones" },
        { id: 4, name: "Keyboard" },
        { id: 5, name: "Monitor" },
        { id: 6, name: "Mouse" },
        { id: 7, name: "Tablet" },
        { id: 8, name: "Smartwatch" },
        { id: 9, name: "Camera" },
        { id: 10, name: "Printer" },
        { id: 11, name: "Speaker" },
        { id: 12, name: "Microphone" },
        { id: 13, name: "Webcam" },
        { id: 14, name: "Router" },
        { id: 15, name: "Hard Drive" },
        { id: 16, name: "SSD" },
        { id: 17, name: "Graphics Card" },
        { id: 18, name: "Power Bank" },
        { id: 19, name: "Charger" },
        { id: 20, name: "USB Cable" },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    // Pull-to-refresh logic
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            //   setProducts(prev => [
            //     ...prev,
            //     { id: prev.length + 1, name: `New Product ${prev.length + 1}` },
            //   ]);
            setRefreshing(false);
        }, 1500);
    }, []);

    return (
        <>
            <View style={styles.statusBarSpacer} />

            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {products.map((product) => (
                    <View key={product.id} style={styles.box}>
                        <Text style={styles.text}>{product.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
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
    container: { flex: 1, padding: 16 },
    box: {
        backgroundColor: "#4ADE80",
        padding: 20,
        marginBottom: 12,
        borderRadius: 12,
    },
    text: { color: "#fff", fontWeight: "bold" },
});
