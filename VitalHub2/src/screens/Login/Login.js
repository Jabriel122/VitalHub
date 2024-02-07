import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Styled"
import { ButtonGoogleTitle, ButtonTitle, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium, LinkOppacity, TextAccountLink } from "../../components/Links/Style"
import { ButtonGoogle, Button } from "../../components/Button/Style"
import { Fontisto } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./Style"

export const Login = ({ navigation }) => {
    return (
        <Container>

            <Logo source={require("../../assets/VitalHub_Logo4.png")} />
            <Title>Entrar ou criar conta</Title>




            <Input
                placeholder="Email"
            />
            <Input
                placeholder="Senha"
                secureTextEntry={true}

            />
            <LinkOppacity>
                <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>Esqueceu sua senha?</LinkMedium>
            </LinkOppacity>

            {/* <TouchableOpacity></TouchableOpacity> */}

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <ButtonGoogle>
                <Fontisto name="google" size={20} color="#496BBA" />
                <ButtonGoogleTitle> ENTRAR COM GOOGLE</ButtonGoogleTitle>

            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextAccountLink> Crie uma conta agora! </TextAccountLink> </TextAccount>
            </ContentAccount>





        </Container>
    )
}