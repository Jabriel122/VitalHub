import { Button, View } from "react-native"
import { NavigationBox } from "./Styled"
import { Title } from "../../components/Title/Style"

export const Navegacao = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <NavigationBox>
                <Title>Parte Cadastro</Title>

                <Button
                    title="Login"
                    onPress={() => navigation.navigate("Login")}
                />
                <Button
                    title="Recuperar Senha"
                    onPress={() => navigation.navigate("RecuperarSenha")}
                />
                <Button
                    title="Verificar Email"
                    onPress={() => navigation.navigate("VerificarEmail")}
                />
                <Button
                    title="Redefinir Senha"
                    onPress={() => navigation.navigate("RedefinirSenha")}
                />
                <Button
                    title="Criar Conta"
                    onPress={() => navigation.navigate("CriarConta")}
                />

                <Title>Medico</Title>
                <Button
                    title="Insercao Pontuario"
                    onPress={() => navigation.navigate("InsercaoPontuario")}
                />
                <Button
                    title=" InsercaoPontuarioEditable"
                    onPress={() => navigation.navigate("InsercaoPontuarioEditable")}
                />


                <Title>Home</Title>
                <Button
                    title=" Home"
                    onPress={() => navigation.navigate("Home")}
                />

                <Title>PACIENTE</Title>
                <Button
                    title=" ConsultasPaciente"
                    onPress={() => navigation.navigate("ConsultasPaciente")}
                />
                <Button
                     title=" SelecionarClinica"
                     onPress={() => navigation.navigate("SelecionarClinica")}
                />
                <Button
                     title=" LocalConsulta"
                     onPress={() => navigation.navigate("LocalConsulta")}
                />
                <Button
                    title=" Perfil01"
                    onPress={() => navigation.navigate("Perfil01")}
                />
                <Button
                    title=" Perfil02"
                    onPress={() => navigation.navigate("Perfil02")}
                />
                <Button
                    title=" ConsultaVizualizarP"
                    onPress={() => navigation.navigate("ConsultaVizualizarP")}
                />

                <Title>TESTE</Title>
                <Button
                    title=" Teste"
                    onPress={() => navigation.navigate("Teste")}
                />
            </NavigationBox>

        </View>
    )
}

