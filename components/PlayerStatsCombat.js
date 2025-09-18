import {View, Text, StyleSheet} from 'react-native';

const PlayerStatsCombat = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.characterName}'s Stats</Text>
            <Text style={styles.text}>Health: {props.state.playerHealth}</Text>
            <Text style={styles.text}>Strength: {props.state.playerStrength}</Text>
            <Text style={styles.text}>Magic: {props.state.playerMagic}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    text: {
        textAlign: 'center',
    },
});

export default PlayerStatsCombat;