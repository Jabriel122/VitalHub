import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Styled"
import { Subtitle } from "../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"

export const RecuperarSenha = () => {
    return (

        <Container>
            <Logo source={require("../../assets/VitalHub_Logo4.png")} />

            <Title>Recuperar senha</Title>
            <Subtitle>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </Subtitle>

            <Input
                placeholder="Usuario de Email"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )

}