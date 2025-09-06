import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>List Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'green'
    }
});

export default ListScreen;