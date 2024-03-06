import { View } from "react-native"
import { Box, BoxInput, BoxRow, BoxTitleLabel } from "../../../components/Box/Style"
import { Container, ScrollForm } from "../../../components/Container/Style"
import { Label, TextLabel, TitleLabel } from "../../../components/Label/Style"
import { ProfilePicture } from "../../../components/PofilePicture/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../../components/Title/Style"
import { Button, ButtonEditar } from "../../../components/Button/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Input } from "../../../components/Input/Style"
import { useState } from "react"

export const InsercaoPontuarioEditable = ({navigation}) => {
    const [descricaoConsulta, setDescicaoConsulta] = useState("")
    const [dignosticoPaciente, setDignosticoPaciente] = useState("")
    const [prescricaoMedica, setPrescricaoMedica] = useState("")
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
                    <BoxInput fieldwidth = {90}>
                        <Input placeholder="Descrição" />
                    </BoxInput>


                    <BoxTitleLabel>
                        <TitleLabel>Diagnóstico do paciente</TitleLabel>
                    </BoxTitleLabel>
                    <BoxInput fieldwidth={90}>
                        <Input placeholder="Diagnóstico" />
                    </BoxInput>

                    <BoxTitleLabel>
                        <TitleLabel>Prescrição médica</TitleLabel>
                    </BoxTitleLabel>
                    <BoxInput fieldwidth ={90}>
                        <Input placeholder="Prescrição Médica" />
                    </BoxInput>

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>
                    <ButtonEditar>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </ButtonEditar>

                    <LinkOppacityMarginTop onPress={() => navigation.navigate("InsercaoPontuario")}>
                        <TextAccountLink>Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>

                </View>
            </ScrollForm>
        </Container>

    )

}