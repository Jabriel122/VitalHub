import { Button } from "../../components/Button/Style"
import { Container, TopContainer } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';
import { Box, BoxInput } from "../../components/Box/Style"
import { BoxMarginDown } from "../../components/Box/Style"


export const RecuperarSenha = ({ navigation }) => {
    return (

        <Container>
            <TopContainer>
                <Box >
                    <AntDesign onPress={() => navigation.navigate("Login")} name="arrowleft" size={24} color="#34898F" />
                </Box>
                <Logo source={require("../../assets/VitalHub_Logo4.png")} />
            </TopContainer>




            <Title>Recuperar senha</Title>
            <Subtitle>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </Subtitle>

            <BoxMarginDown>
                <Input
                    placeholder="Usuario de Email"
                />
            </BoxMarginDown>


            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )

}