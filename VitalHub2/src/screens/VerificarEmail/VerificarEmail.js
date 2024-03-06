import { Touchable, TouchableOpacity } from "react-native"
import { Button } from "../../components/Button/Style"
import { Container, TopContainer } from "../../components/Container/Style"
import { LinkMedium, LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CodeContent, InputContent } from "./Styled"
import { AntDesign } from '@expo/vector-icons';
import { Box } from "../../components/Box/Style"

export const VerificarEmail = ({navigation }) => {

    return (
        <Container>
            <TopContainer>
                <Box>
                    <AntDesign name="close" size={24} color="#34898F" />
                </Box>
                <Logo source={require("../../assets/VitalHub_Logo4.png")} />
            </TopContainer>

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para username@email.com</Subtitle>

            <CodeContent>
                <InputContent placeholder="0" keyboardType="numeric" maxLength={1} />
                <InputContent placeholder="0" keyboardType="numeric" maxLength={1} />
                <InputContent placeholder="0" keyboardType="numeric" maxLength={1} />
                <InputContent placeholder="0" keyboardType="numeric" maxLength={1} />
            </CodeContent>

            <Button onPress={() => navigation.navigate("RedefinirSenha")} >
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkOppacityMarginTop>
                <TextAccountLink>Reenvia Código</TextAccountLink>
            </LinkOppacityMarginTop>


        </Container>

    )
}