import {View, Text, StyleSheet} from 'react-native';

const MonsterStatsCombat = (props) => {
    const monster = props.state.currentMonster === 1 ? props.state.monster1 : props.state.monster2;

    if (monster === props.state.monster1) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Monster Stats</Text>
                <Text style={styles.text}>Health: {monster.monsterHealth}</Text>
                <Text style={styles.text}>Strength: {monster.monsterStrength}</Text>
                <Text style={styles.text}>Magic: {monster.monsterMagic}</Text>
            </View>
        )
    }
    else if (monster === props.state.monster2) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Monster Stats</Text>
                <Text style={styles.text}>Health: {monster.health}</Text>
                <Text style={styles.text}>Strength: {monster.strength}</Text>
                <Text style={styles.text}>Defense: {monster.defense}</Text>
            </View>
        )
    }
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