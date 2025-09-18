import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';

const CompleteCharacterCreation = (props) => {
    const [characterName, setCharacterName] = React.useState('');

    function getTextInput() {
        if (props.state.currentMonster === 1) {
            return (
                <TextInput style={styles.textInput} placeholder='Character Name' onChangeText={setCharacterName} value={characterName}/>
            )
        }
        else {
            return '';
        }
    }

    if (props.state.points > 0) {
        return (
            <Text style={styles.text}>Spend all your points to continue!</Text>
        )
    }
    else if (props.state.points === 0) {
        return (
            <View>
                {getTextInput()}
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CombatScreen', { characterName })}>
                    <Text style={styles.text}>Click Me to Embark on your Journey!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
    button: {
        borderColor: '#add8e6ff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#add8e6ff',
        margin: 20,
        width: '80%',
        height: 40,
        justifyContent: 'center',
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 200,
        height: 40,
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default CompleteCharacterCreation;