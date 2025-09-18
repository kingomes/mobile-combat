import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PlayerStatsCombat from '../components/PlayerStatsCombat';
import MonsterStatsCombat from '../components/MonsterStatsCombat';

import { useGame } from '../GameContext';

const CombatScreen = ({navigation, route}) => {
    const { state, dispatch } = useGame();

    const characterName = route.params?.characterName;

    const monster = state.currentMonster === 1 ? state.monster1 : state.monster2;
    const monsterHealth = state.currentMonster === 1 ? monster.monsterHealth : monster.health;

    function getLogText() {
        const monsterKey = state.currentMonster === 1 ? 'monster1' : 'monster2';
        const m = state[monsterKey];
        const monsterName = state.currentMonster === 1 ? 'Alien Wizard' : 'Stick Man';
        const monsterStrength = monsterKey === 'monster1' ? m.monsterStrength : m.strength;
        const monsterDefense = monsterKey === 'monster1' ? 0 : m.defense;
        const damage = Math.max(0, state.playerStrength - monsterDefense);

        switch(state.lastAction) {
            case 'attack':
                return `You attack the ${monsterName} for ${damage} damage!\n\nThe ${monsterName} strikes back for ${monsterStrength} damage!`;
            case 'fire':
                return `You cast a fire spell, halving the ${monsterName}'s health!\n\nThe ${monsterName} strikes back for ${monsterStrength} damage! You lose 3 magic points.`;
            case 'heal':
                return `You heal yourself for 7 health points, but lose 1 magic point.`;
            default:
                return `A dangerous foe draws near!`;
        }
}

    function getMonsterImage() {
        if (monsterHealth > 0 && state.currentMonster === 1) {
            return <Image style={styles.enemyImage} source={require('../assets/SampleHW2Assets/alienWizard.png')} />
        }
        else if (monsterHealth <= 0 && state.currentMonster === 1) {
            return <Image style={styles.enemyImage} source={require('../assets/SampleHW2Assets/monsterDead.png')} />
        }
        else if (monsterHealth > 0 && state.currentMonster === 2) {
            return <Image style={[styles.enemyImage, {width: '15%', height: '15%'}]} source={require('../assets/SampleHW2Assets/stickMan.png')} />
        }
        else if (monsterHealth <= 0 && state.currentMonster === 2) {
            return <Image style={[styles.enemyImage, {width: '15%', height: '15%'}]} source={require('../assets/SampleHW2Assets/stickManDead.png')} />
        }
    }

    function getGameOverText() {
        if (state.playerHealth <= 0 && state.currentMonster === 1) {
            return <Text style={[styles.gameOverText, {color: 'red'}]}>You have been defeated! The alien wizard has bested you.</Text>;
        }
        else if (monsterHealth <= 0 && state.currentMonster === 1) {
            return <Text style={[styles.gameOverText, {color: 'green'}]}>You have triumphed! The alien wizard has been vanquished!</Text>;
        }
        else if (state.playerHealth <= 0 && state.currentMonster === 2) {
            return <Text style={[styles.gameOverText, {color: 'red'}]}>You have been defeated! The stick man has bested you.</Text>;
        }
        else if (monsterHealth <= 0 && state.currentMonster === 2) {
            return <Text style={[styles.gameOverText, {color: 'green'}]}>You have triumphed! The stick man has been vanquished!</Text>;
        }
        else {
            return '';
        }
    }

    function getMonsterName() {
        if (state.currentMonster === 1) {
            return "Alien Wizard!";
        }
        else if (state.currentMonster === 2) {
            return "Stick Man!";
        }
    }

    function getGameOverButton() {
        if (state.playerHealth <= 0 || monsterHealth <= 0 && state.currentMonster === 2) {
            return (
                <TouchableOpacity style={styles.button} onPress={() => { dispatch( { type: 'resetStats' } ); navigation.navigate('WelcomeScreen');}}>
                    <Text style={styles.text}>Play Again!</Text>
                </TouchableOpacity>
            )
        }
        else if (monsterHealth <= 0 && state.currentMonster === 1) {
            return (
                <TouchableOpacity style={styles.button} onPress={() => { dispatch( { type: 'nextMonster' } ); navigation.pop();}}>
                    <Text style={styles.text}>Upgrade for the Next Battle!</Text>
                </TouchableOpacity>
            )
        }
        else {
            return '';
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MonsterStatsCombat state={state} dispatch={dispatch}/>
                <PlayerStatsCombat state={state} dispatch={dispatch} characterName={characterName}/>
            </View>
            {getMonsterImage()}
            <Text style={styles.enemyTitle}>{getMonsterName()}</Text>
            <View style={styles.log}>
                <Text style={styles.text}>{getLogText(state)}</Text>
            </View>
            <Text style={styles.text}>How do you defend thyself?</Text>
            <View style={styles.actionOptions}>
                <TouchableOpacity onPress={() => dispatch({type: "attack"})}>
                    <Image style={styles.actionImages} source={require('../assets/SampleHW2Assets/attackIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch({type: "fire"})}>
                    <Image style={styles.actionImages} source={require('../assets/SampleHW2Assets/fireIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch({type: "heal"})}>
                    <Image style={styles.actionImages} source={require('../assets/SampleHW2Assets/healIcon.png')} />
                </TouchableOpacity>
            </View>
            <View>
                {getGameOverText()}
                {getGameOverButton()}
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
        alignSelf: 'flex-start',
        padding: 10,
    },
    enemyTitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    enemyImage: {
        // width: '20%',
        // height: '20%',
        resizeMode: 'contain',
        marginTop: 40,
    },
    log: {
        borderWidth: 5,
        borderColor: 'black',
        width: '95%',
        height: '20%',
        marginTop: 20,
    },
    actionOptions: {
        flexDirection: 'row',
    },
    actionImages: {
        margin: 30,
    },
    gameOverText: {
        fontSize: 30,
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
        alignSelf: 'center',
  }
});

export default CombatScreen;