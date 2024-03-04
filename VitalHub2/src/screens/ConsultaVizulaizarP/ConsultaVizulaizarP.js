import { View } from "react-native"
import { Container, ScrollForm } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { ProfilePicture } from "../../components/PofilePicture/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { BoxTitleLabel } from "../../components/Box/Style"
import { Label, TextLabel, TitleLabel } from "../../components/Label/Style"
import { Button } from "../../components/Button/Style"

export const ConsultaVizualizarP = () => {
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
                        <TitleLabel>Descrição da consulta</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>O paciente possuí uma infecção no
                            ouvido. Necessário repouse de 2 dias
                            e acompanhamento médico constante</TextLabel>
                    </Label>

                    <BoxTitleLabel>
                        <TitleLabel>Diagnóstico do paciente</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>Infecção no ouvido</TextLabel>
                    </Label >

                    <BoxTitleLabel>
                        <TitleLabel>Prescrição médica</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>
                            Medicamento: Advil
                            Dosagem: 50 mg
                            Frequência: 3 vezes ao dia
                            Duração: 3 dias
                        </TextLabel>
                    </Label>


                </View>
            </ScrollForm>
        </Container>


    )
}