import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
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
        </View>
    )
}

