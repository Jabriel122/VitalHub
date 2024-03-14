import { TouchableOpacity, View } from "react-native"
import { Container, ScrollForm } from "../../components/Container/Style"
import { ButtonAjustTitleImage, ButtonQuitTitle, ButtonTitle, Title } from "../../components/Title/Style"
import { ProfilePicture } from "../../components/PofilePicture/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { BoxRow, BoxTitleLabel } from "../../components/Box/Style"
import { Label, LabelImage, TextLabel, TitleLabel } from "../../components/Label/Style"
import { Button, ButtonAjust, ButtonAjustImage } from "../../components/Button/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardDefinition } from "../../components/Card/Style"
import { BoxRowAjust, Divider } from "./Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"

export const ConsultaVizualizarP = ({navigation}) => {
    return (
        <Container>

            <ScrollForm>
                <ProfilePicture source={require("../../assets/PofilePicture/Cillian Murphy.png")} />
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Title>Dr.Claudio</Title>

                    <Subtitle>
                        Clinico geral   CRM-15286
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

                    <BoxTitleLabel>
                        <TitleLabel>Exames médicos</TitleLabel>
                    </BoxTitleLabel>
                    <LabelImage fieldwidth={90}>
                        <TextLabel>
                            Nenhuma foto informada
                        </TextLabel>
                    </LabelImage>

                    <BoxRowAjust
                        fieldwidth={90}
                    >
                        <ButtonAjustImage
                            fieldwidth={172}
                            fieldheigth={44}
                            color={"49B3BA"}
                            mrginTop={0}
                            borderColor={"49B3BA"}
                        >
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                            <ButtonAjustTitleImage
                                fontSize={14}
                                marginBottom={0}
                                color={"FFFFFF"}
                                marginTop={0}
                                onPress={() => navigation.navigate("Cameras")}

                            >
                                Enviar
                            </ButtonAjustTitleImage>
                        </ButtonAjustImage>

                        <TouchableOpacity>
                            <CardDefinition color={"C81D25"}>Cancelar</CardDefinition>
                        </TouchableOpacity>
                    </BoxRowAjust>

                    <Divider/>

                    <Label fieldwidth={90}>
                        <TextLabel>
                           Resultado do exame de sangue : tudo normal
                        </TextLabel>
                    </Label>

                    <LinkOppacityMarginTop onPress={() => navigation.replace("Main")}>
                        <TextAccountLink >Voltar</TextAccountLink>
                    </LinkOppacityMarginTop>



                </View>
            </ScrollForm>
        </Container>


    )
}