import { View } from "react-native"
import { Container, ScrollForm } from "../../../components/Container/Style"
import { ProfilePicture } from "../../../components/PofilePicture/Style"
import { ButtonQuitTitle, ButtonTitle, Title } from "../../../components/Title/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { Label, TextLabel, TitleLabel } from "../../../components/Label/Style"
import { Button, ButtonEditar } from "../../../components/Button/Style"
import { LinkOppacityMarginBottom, LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Box, BoxInput, BoxRow, BoxShadow, BoxTitleLabel } from "../../../components/Box/Style"

export const Perfil02 = ({ fieldwidth }) => {

    return (

        <Container>

            <ScrollForm>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfilePicture source={require("../../../assets/PofilePicture/Cillian Murphy.png")} />
                    <BoxShadow>
                        <Title>Gabriel NadaMArchetti</Title>

                        <Subtitle>
                            gabs@femail.com
                        </Subtitle>
                    </BoxShadow>


                    <BoxTitleLabel>
                        <TitleLabel>Data de Nascimento:</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>04/05/1999</TextLabel>
                    </Label>

                    <BoxTitleLabel>
                        <TitleLabel>CPF</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel> 859********</TextLabel>
                    </Label>

                    <BoxTitleLabel>
                        <TitleLabel>Endereço</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>
                            Rua Vicenso Silva, 987
                        </TextLabel>
                    </Label>

                    <BoxRow>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>Cep</TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={90}>
                                <TextLabel>
                                    06548-909
                                </TextLabel>
                            </Label>
                        </BoxInput>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>
                                    Cidade
                                </TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={80}>
                                <TextLabel>
                                    Moema-SP
                                </TextLabel>
                            </Label>
                        </BoxInput>


                    </BoxRow>

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </Button>

                    <LinkOppacityMarginBottom>
                        <ButtonEditar>
                            <ButtonQuitTitle>
                                Sair do App
                            </ButtonQuitTitle>
                        </ButtonEditar>
                    </LinkOppacityMarginBottom>

                </View>
            </ScrollForm>
        </Container>

    )
}