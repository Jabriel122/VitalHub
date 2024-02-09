import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import {Login} from './src/screens/Login/Login'
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';

// Importar Fonts

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium,Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { InsercaoPontuario } from './src/screens/Medico/InsercaoPontuario/InsercaoPontuario';
import { useState } from 'react';
import { InsercaoPontuarioEditable } from './src/screens/Medico/InsercaoPontuario/InsercaoPontuario-Editable';
import { Perfil01 } from './src/screens/Perfil/Perfil01/Perfil01';

//instÂncia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  // const [descricaoPontuario, setDescicaoConsulta] = useState("")
  // const [diagnósticoPontuario, setDiagnósticoPontuario ] = useState("")
  // const [prescricaoPontuaio, setPrescricaoPontuaio ] = useState("")

  // function CadastroDePaciente(){
  //     setDescicaoConsulta()
  //     setPrescricaoPontuaio()
  //     setDiagnósticoPontuario()
  // } 

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

        <Stack.Screen
          name='RecuperarSenha'
          component={RecuperarSenha}
          options={{ title: "RecuperarSenha" }}
        />

        <Stack.Screen
          name='RedefinirSenha'
          component={RedefinirSenha}
          options={{ title: "RedefinirSenha" }}
        />

        <Stack.Screen
          name='CriarConta'
          component={CriarConta}
          options={{ title: "CriarConta" }}
        />

        <Stack.Screen
          name='InsercaoPontuario'
          component={InsercaoPontuario}
          options={{ title: "InsercaoPontuario" }}
        />
        <Stack.Screen
          name='InsercaoPontuarioEditable'
          component={InsercaoPontuarioEditable}
          options={{ title: "InsercaoPontuarioEditable" }}
        />
        <Stack.Screen
          name='Perfil01'
          component={Perfil01}
          options={{ title: "Perfil01" }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

