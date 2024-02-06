import { Button, Image, Text, TextInput, View } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Styled"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"

export const Login = () => {
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
            <LinkMedium>Esqueceu sua senha?</LinkMedium>



            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>
            <ButtonGoogle>
                <ButtonGoogleTitle></ButtonGoogleTitle>
            </ButtonGoogle>
            <ContentAccount>
                <TextAccount>Não tem conta? Crie uma conta agora!</TextAccount>
            </ContentAccount> */}



        </Container>
    )
}