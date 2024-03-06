import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';



// Importar Fonts

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';

//Importar Páginas
import { Login } from './src/screens/Login/Login'
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { InsercaoPontuario } from './src/screens/Medico/InsercaoPontuario/InsercaoPontuario';
import { useState } from 'react';
import { InsercaoPontuarioEditable } from './src/screens/Medico/InsercaoPontuario/InsercaoPontuario-Editable';
import { Perfil01 } from './src/screens/Perfil/Perfil01/Perfil01';
import { Perfil02 } from './src/screens/Perfil/Perfil02/Perfil02';
import { Home } from './src/screens/Home/Home';
import Teste from './src/components/Teste/TEste';
import { ConsultasPaciente } from './src/screens/ConsultasPaciente/ConsultasPaciente';
import { SelecionarClinica } from './src/screens/ConsultasPaciente-SelecionarClinica/SelecionarClinica';
import { ConsultaVizualizarP } from './src/screens/ConsultaVizulaizarP/ConsultaVizulaizarP';
import { LocalConsulta } from './src/screens/LocalConsulta/LocalConsulta';
import { Main } from './src/screens/Main/Main';


//instÂncia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_400Regular, Quicksand_600SemiBold,
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />
        
        <Stack.Screen
          name='Main'

          component={Main}

        />
        {/* <Stack.Screen
          name='Navegação'

          component={Navegacao}

          option={{ title: 'Navegacao' }}
        /> */}



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

        <Stack.Screen
          name='Perfil02'
          component={Perfil02}
          options={{ title: "Perfil02" }}
        />

        <Stack.Screen
          name='ConsultasPaciente'
          component={ConsultasPaciente}
          options={{ title: "ConsultasPaciente" }}
        />
        <Stack.Screen
          name='SelecionarClinica'
          component={SelecionarClinica}
          options={{ title: "SelecionarClinica" }}
        />

        <Stack.Screen
          name='ConsultaVizualizarP'
          component={ConsultaVizualizarP}
          options={{ title: "ConsultaVizualizarP" }}
        />
        <Stack.Screen
          name='LocalConsulta'
          component={LocalConsulta}
          options={{ title: "LocalConsulta" }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name='Teste'
          component={Teste}
          options={{ title: "Teste" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

