import {View, Text, StyleSheet} from 'react-native';
import { useGame } from '../GameContext';

import PlayerStatsCreation from '../components/PlayerStatsCreation';
import CompleteCharacterCreation from '../components/CompleteCharacterCreation';

const CharacterCreationScreen = ({navigation}) => {
    const { state, dispatch } = useGame();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Grow in Power!</Text>
            <PlayerStatsCreation name="playerStrength" value={state.playerStrength} dispatch={dispatch}/>
            <PlayerStatsCreation name="playerHealth" value={state.playerHealth} dispatch={dispatch}/>
            <PlayerStatsCreation name="playerMagic" value={state.playerMagic} dispatch={dispatch}/>
            <Text style={styles.text}>Points remaining: {state.points}</Text>
            <CompleteCharacterCreation name="points" value={state.points} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default CharacterCreationScreen;