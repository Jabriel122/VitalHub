import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

// Importar Fonts
import { useFonts,MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

//instÂncia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium
  });

  if(!fontsLoaded && !fontsError){
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

          option={{title: 'Navegacao'}}
        />
        
        <Stack.Screen
          name='Login'
          component={Login}
          options={{title:"Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

