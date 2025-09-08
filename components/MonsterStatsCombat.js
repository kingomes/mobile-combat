import {View, Text, StyleSheet} from 'react-native';

const MonsterStatsCombat = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Monster Stats</Text>
            <Text style={styles.text}>Health: {props.state.monsterHealth}</Text>
            <Text style={styles.text}>Strength: {props.state.monsterStrength}</Text>
            <Text style={styles.text}>Magic: {props.state.monsterMagic}</Text>
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

export default MonsterStatsCombat;