import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity, Image } from 'react-native';

const PlayerStatsCreation = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => props.dispatch({type: 'changeStat', statToChange: props.name, amount: -1})}>
                <Image style={styles.image} source={require('../assets/SampleHW2Assets/minusSign.png')} />
            </TouchableOpacity>
            <Text style={styles.text}>Current {props.name}: {props.value}</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.dispatch({type: 'changeStat', statToChange: props.name, amount: 1})}>
                <Image style={styles.image} source={require('../assets/SampleHW2Assets/plusSign.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        margin: 20,
    },
});

export default PlayerStatsCreation;