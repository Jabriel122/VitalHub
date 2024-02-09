import { View } from "react-native"
import { Box, BoxInput, BoxRow } from "../../../components/Box/Style"
import { Container, ScrollForm } from "../../../components/Container/Style"
import { Label, TextLabel, TitleLabel } from "../../../components/Label/Style"
import { ProfilePicture } from "../../../components/PofilePicture/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonTitle, Title } from "../../../components/Title/Style"
import { Button, ButtonEditar } from "../../../components/Button/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Input } from "../../../components/Input/Style"

export const InsercaoPontuarioEditable = ({ }) => {
    return (
        <Container>

            <ScrollForm>
                <ProfilePicture source={require("../../../assets/PofilePicture/Cillian Murphy.png")} />
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Title>NOME</Title>

                    <Subtitle>
                        IDADE Email
                    </Subtitle>


                    <TitleLabel>Descrição da consulta</TitleLabel>
                    <BoxInput>
                        <Input placeholder="Descrição" />
                    </BoxInput>



                    <TitleLabel>Diagnóstico do paciente</TitleLabel>
                    <BoxInput>
                        <Input placeholder="Diagnóstico"/>
                    </BoxInput>

                    <TitleLabel>Prescrição médica</TitleLabel>
                    <BoxInput>
                        <Input placeholder="Prescrição Médica"/>
                    </BoxInput>

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>
                    <ButtonEditar>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </ButtonEditar>

                    <LinkOppacityMarginTop>
                        <TextAccountLink>Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>

                </View>
            </ScrollForm>
        </Container>

    )

}