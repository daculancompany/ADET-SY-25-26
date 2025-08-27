import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    Pressable,
    Switch,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
    Modal,
} from "react-native";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleSwitch = () => setIsEnabled((prev) => !prev);

    const handleButtonPress = () => {
        Alert.alert("Button Pressed", `You typed: ${inputValue}`);
    };

    const handleCustomPress = () => {
        Alert.alert("Custom Button", "Touchable/Pressable button pressed!");
    };

    const showLoader = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Image */}
                    <Text style={styles.label}>Image Example</Text>
                    <Image
                        source={{
                            uri: "https://reactnative.dev/img/tiny_logo.png",
                        }}
                        style={styles.image}
                    />

                    {/* TextInput */}
                    <Text style={styles.label}>TextInput Example</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type something..."
                        value={inputValue}
                        onChangeText={setInputValue}
                    />

                    {/* Button */}
                    <Text style={styles.label}>Button Example</Text>
                    <Button title="Submit" onPress={handleButtonPress} />

                    {/* TouchableOpacity */}
                    <Text style={styles.label}>TouchableOpacity Example</Text>
                    <TouchableOpacity
                        style={styles.customBtn}
                        onPress={handleCustomPress}
                    >
                        <Text style={styles.btnText}>Touch Me</Text>
                    </TouchableOpacity>

                    {/* Pressable */}
                    <Text style={styles.label}>Pressable Example</Text>
                    <Pressable
                        style={styles.customBtnAlt}
                        onPress={handleCustomPress}
                    >
                        <Text style={styles.btnText}>Press Me</Text>
                    </Pressable>

                    {/* Switch */}
                    <Text style={styles.label}>Switch Example</Text>
                    <Switch value={isEnabled} onValueChange={toggleSwitch} />

                    {/* ActivityIndicator */}
                    <Text style={styles.label}>ActivityIndicator Example</Text>
                    {loading ? (
                        <ActivityIndicator size="large" color="#4ADE80" />
                    ) : (
                        <Button title="Show Loader" onPress={showLoader} />
                    )}

                    {/* Modal Example */}
                    <Text style={styles.label}>Modal Example</Text>
                    <TouchableOpacity
                        style={styles.modalBtn}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.btnText}>Open Modal</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>
                                Hello from Modal 🎉
                            </Text>
                            <Text style={styles.modalText}>
                                This is a simple modal with design.
                            </Text>

                            <TouchableOpacity
                                style={styles.closeBtn}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        marginTop: 20,
        fontWeight: "600",
        fontSize: 16,
    },
    image: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    customBtn: {
        backgroundColor: "#4ADE80",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    customBtnAlt: {
        backgroundColor: "#3B82F6",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    modalBtn: {
        backgroundColor: "#F59E0B",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    closeBtn: {
        backgroundColor: "#EF4444",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
    },
});
