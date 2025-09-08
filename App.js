import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import CharacterCreationScreen from './screens/CharacterCreationScreen';
import CombatScreen from './screens/CombatScreen';
import { GameProvider } from './GameContext';

let Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="CharacterCreationScreen" component={CharacterCreationScreen} />
          <Stack.Screen name="CombatScreen" component={CombatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}