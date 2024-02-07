import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';

// Importar Fonts

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';

//instÂncia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegação 

    //Container
    //StackNavigator
    //StackSrceen

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Navegação'

          component={Navegacao}

          option={{ title: 'Navegacao' }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name='VerificarEmail'
          component={VerificarEmail}
          options={{ title: "VerificarEmail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

