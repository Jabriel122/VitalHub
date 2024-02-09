import { View } from "react-native"
import { Box, BoxInput, BoxRow } from "../../../components/Box/Style"
import { Container, ScrollForm } from "../../../components/Container/Style"
import { Label, TextLabel, TitleLabel } from "../../../components/Label/Style"
import { ProfilePicture } from "../../../components/PofilePicture/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../../components/Title/Style"
import { Button } from "../../../components/Button/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"

export const InsercaoPontuario = () => {
    return (
        <Container>

            <ScrollForm>
                <ProfilePicture source={require("../../../assets/PofilePicture/Cillian Murphy.png")} />
                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <Title>NOME</Title>

                    <Subtitle>
                        IDADE Email
                    </Subtitle>


                    <TitleLabel>Descrição da consulta</TitleLabel>
                    <Label>
                        <TextLabel>O paciente possuí uma infecção no
                            ouvido. Necessário repouse de 2 dias
                            e acompanhamento médico constante</TextLabel>
                    </Label>

                    <TitleLabel>Diagnóstico do paciente</TitleLabel>
                    <Label>
                        <TextLabel>Infecção no ouvido</TextLabel>
                    </Label>

                    <TitleLabel>Prescrição médica</TitleLabel>
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