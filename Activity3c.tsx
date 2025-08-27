import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.color1}>Name: Niel Daculan</Text>
            <Text style={styles.color2}>Adress: Niel Daculan</Text>
            <Text style={styles.color3}>Section: BSIT-3C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    color1:{
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
    },
    color2:{
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
    },
    color3:{
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
    }
});
