import {View, Text, StyleSheet} from 'react-native';
import PlayerStats from '../components/PlayerStats';
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.statToChange) {
        case 'strength':
            if (state.points + action.amount < 2 || state.strength + action.amount < 1) {
                return state;
            }
            return {
                ...state,
                strength: state.strength + action.amount, 
                points: state.points - action.amount};
        case 'health':
            if (state.points + action.amount < 2 || state.health + action.amount < 1) {
                return state;
            }
            return {
                ...state, 
                health: state.health + action.amount,
                points: state.points - action.amount};
        case 'magic':
            if (state.points + action.amount < 2 || state.magic + action.amount < 1) {
                return state;
            }
            return {
                ...state, 
                magic: state.magic + action.amount,
                points: state.points - action.amount};
        default:
            return state;
    }
}

const CharacterCreationScreen = () => {
    const [state, dispatch] = useReducer(reducer, {strength: 1, health: 10, magic: 1, points: 15});
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Grow in Power!</Text>
            <PlayerStats name="strength" value={state.strength} dispatch={dispatch}/>
            <PlayerStats name="health" value={state.health} dispatch={dispatch}/>
            <PlayerStats name="magic" value={state.magic} dispatch={dispatch}/>
            <Text style={styles.text}>Points remaining: {state.points}</Text>
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