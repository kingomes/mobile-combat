import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fight For Glory!</Text>
      <Image style={styles.image} source={require('../assets/SampleHW2Assets/swordAndShield.jpg')} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CharacterCreationScreen')}>
        <Text style={styles.text}>Start Game</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  text: {
    color: '#000000ff',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '65%',
    resizeMode: 'contain',
    margin: 20,
  },
  button: {
    borderColor: '#add8e6ff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    backgroundColor: '#add8e6ff',
  }
});

export default WelcomeScreen;