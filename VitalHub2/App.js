import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//instÂncia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Navegação 

    //Container
    //StackNavigator
    //StackSrceen

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='navegação'

          component={Navegacao}

          option={{title: 'Navegacao'}}
        >
        
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

