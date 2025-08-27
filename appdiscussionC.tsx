import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {
    return (
        <View style={{ backgroundColor:'#fff', flex: 1, marginTop: 50 }} >
            <StatusBar style="auto" />
            <Ionicons name="checkmark-circle" size={32} color="green" />
            <Text style={{ color:'yellow', fontSize: 20, fontWeight: 'bold' }} >Hello, Wo11111</Text>
            <Text style={styles.text}>Testeee</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: 'blue',
        fontSize:30,
    }
    
});
