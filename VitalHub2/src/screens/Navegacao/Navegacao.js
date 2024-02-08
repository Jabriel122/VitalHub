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
            </NavigationBox>

        </View>
    )
}
