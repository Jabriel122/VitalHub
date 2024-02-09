import { View } from "react-native"
import { Container, ScrollForm } from "../../../components/Container/Style"
import { ProfilePicture } from "../../../components/PofilePicture/Style"
import { ButtonTitle, Title } from "../../../components/Title/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { Label, TextLabel, TitleLabel } from "../../../components/Label/Style"
import { Button } from "../../../components/Button/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { BoxTitleLabel } from "../../../components/Box/Style"

export const Perfil01 = () => {

    return (

        <Container>

            <ScrollForm>
                <ProfilePicture source={require("../../../assets/PofilePicture/Cillian Murphy.png")} />
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Title>NOME</Title>

                    <Subtitle>
                        IDADE Email
                    </Subtitle>

                    <BoxTitleLabel>
                        <TitleLabel>Data de Nascimento:</TitleLabel>
                    </BoxTitleLabel>
                    <Label>
                        <TextLabel>04/05/1999</TextLabel>
                    </Label>

                    <BoxTitleLabel>
                        <TitleLabel>Diagnóstico do paciente</TitleLabel>
                    </BoxTitleLabel>
                    <Label>
                        <TextLabel>Infecção no ouvido</TextLabel>
                    </Label>

                    <BoxTitleLabel>
                        <TitleLabel>Prescrição médica</TitleLabel>
                    </BoxTitleLabel>
                    <Label>
                        <TextLabel>
                            Medicamento: Advil
                            Dosagem: 50 mg
                            Frequência: 3 vezes ao dia
                            Duração: 3 dias
                        </TextLabel>
                    </Label>

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </Button>

                    <LinkOppacityMarginTop>
                        <TextAccountLink>Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>

                </View>
            </ScrollForm>
        </Container>

    )
}