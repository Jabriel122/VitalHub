import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Styled"
import { Subtitle } from "../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"

export const VerificarEmail = ({}) =>{

    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo4.png")} />

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para username@email.com</Subtitle>

            <CodeContent>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
            </CodeContent>
            
            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkMedium>Reenvia Código</LinkMedium>

        </Container>

    )
}