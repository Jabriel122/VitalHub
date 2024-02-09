import { BoxInput, BoxMarginDown } from "../../components/Box/Style"
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium, LinkOppacity, LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"

export const CriarConta = ({navigation}) => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo4.png")} />

            <Title>Criar Conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>
            <BoxInput>
                <Input placeholder="Usuário ou E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirmar Senha" />
            </BoxInput>


            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkOppacityMarginTop>
                <TextAccountLink onPress={() => navigation.navigate("Login")} >Cancelar</TextAccountLink>
            </LinkOppacityMarginTop>

        </Container>
    )
}