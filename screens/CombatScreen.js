import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PlayerStatsCombat from '../components/PlayerStatsCombat';
import MonsterStatsCombat from '../components/MonsterStatsCombat';

import { useGame } from '../GameContext';

const CombatScreen = () => {
    const { state, dispatch } = useGame();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MonsterStatsCombat state={state} dispatch={dispatch}/>
                <PlayerStatsCombat state={state} dispatch={dispatch}/>
            </View>
            <Image style={styles.image} source={require('../assets/SampleHW2Assets/alienWizard.png')} />
            <Text style={styles.text}>Alien Wizard!</Text>
            <View style={styles.log}>
                <Text style={styles.text}>A dangerous foe draws near!</Text>
            </View>
            <View>
                <Text style={styles.text}>How do you defend thyself?</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.dispatch({statToChange: props.name, amount: -1})}>
                    <Image style={styles.image} source={require('../assets/SampleHW2Assets/attackIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.dispatch({statToChange: props.name, amount: -1})}>
                    <Image style={styles.image} source={require('../assets/SampleHW2Assets/fireIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.dispatch({statToChange: props.name, amount: -1})}>
                    <Image style={styles.image} source={require('../assets/SampleHW2Assets/healIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    },
    image: {
        // width: '50%',
        // height: '50%',
        resizeMode: 'contain',
        marginTop: 40,
    },
    log: {
        borderWidth: 5,
        borderColor: 'black',
        width: '95%',
        height: '20%',
        marginTop: 20,
    }
});

export default CombatScreen;