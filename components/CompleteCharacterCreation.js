import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity, Image } from 'react-native';

const CompleteCharacterCreation = (props) => {
    if (props.name === 'points' && props.value > 0) {
        return (
            <Text style={styles.text}>Spend all your points to continue!</Text>
        )
    }
    else if (props.name === 'points' && props.value === 0) {
        return (
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CombatScreen')}>
                <Text style={styles.text}>Click Me to Embark on your Journey!</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    button: {
        borderColor: '#add8e6ff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#add8e6ff',
  }
});

export default CompleteCharacterCreation;