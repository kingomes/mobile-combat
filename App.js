import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import CharacterCreationScreen from './screens/CharacterCreationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="CharacterCreationScreen" component={CharacterCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}