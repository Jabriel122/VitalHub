import { Box, BoxMarginDown } from "../../components/Box/Style"
import { Container, TopContainer } from "../../components/Container/Style"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";

export const RedefinirSenha = ({navigation }) => {
    return (
        <Container>
            <TopContainer>
                <Box>
                    <AntDesign name="close" size={24} color="#34898F" />
                </Box>
                <Logo source={require("../../assets/VitalHub_Logo4.png")} />
            </TopContainer>

            <Title>Redefinir senha</Title>
            <Subtitle>Insira e confirme a sua nova senha</Subtitle>


            <BoxMarginDown>
                <Input placeholder="Nova Senha" />
                <Input placeholder="Confirmar nova Senha" />
            </BoxMarginDown>

            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Button>
        </Container>
    )
}