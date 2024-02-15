import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonGoogleTitle, ButtonTitle, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium, LinkOppacity, TextAccountLink } from "../../components/Links/Style"
import { ButtonGoogle, Button } from "../../components/Button/Style"
import { Fontisto } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./Style"
import { BoxInput, BoxMarginDown } from "../../components/Box/Style"

export const Login = ({ navigation, fieldwidth }) => {
    return (
        <Container>

            <Logo source={require("../../assets/VitalHub_Logo4.png")} />
            <Title>Entrar ou criar conta</Title>



            <BoxInput fieldwidth={90}>
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </BoxInput>

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
                <TextAccount>Não tem conta? <TextAccountLink onPress={() => navigation.navigate("CriarConta")}> Crie uma conta agora! </TextAccountLink> </TextAccount>
            </ContentAccount>





        </Container>
    )
}