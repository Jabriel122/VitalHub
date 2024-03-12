import { Button, ButtonAjust } from "../../../components/Button/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonGoogleTitle, ButtonQuitTitle, Title } from "../../../components/Title/Style"
import { AppointmentBody, AppointmentContainer, AppointmentHead, AppointmentLow, AppointmentMiddle, BoxData, DataSubTitle, DataTitle } from "./Style"

export const ScheduleAppointmentModal = ({ visible, onRequestClose, navigation }) => {
    return (
        <AppointmentBody
            isVisible={visible}
        >
            <AppointmentContainer>
                <AppointmentHead>
                    <Title>
                        Agendar consulta
                    </Title>
                    <Subtitle>
                        Consulte os dados selecionados para a sua consulta
                    </Subtitle>
                </AppointmentHead>

                <AppointmentMiddle>
                    <BoxData>
                        <DataTitle>
                            Data da Consulta
                        </DataTitle>
                        <DataSubTitle>
                            1 de Novembro de 2023
                        </DataSubTitle>
                    </BoxData>
                    <BoxData>
                        <DataTitle>
                            Médico(a) da consulta
                        </DataTitle>
                        <DataSubTitle>
                            Dra Alessandra
                            Demartologa, Esteticista
                        </DataSubTitle>
                    </BoxData>
                    <BoxData>
                        <DataTitle>
                            Local da consulta
                        </DataTitle>
                        <DataSubTitle>
                            São Paulo, SP
                        </DataSubTitle>
                    </BoxData>
                    <BoxData>
                        <DataTitle>
                            Tipo da consulta
                        </DataTitle>
                        <DataSubTitle>
                            Rotina
                        </DataSubTitle>
                    </BoxData>

                </AppointmentMiddle>

                <AppointmentLow>
                    <ButtonAjust
                        fieldwidth={100}
                        fieldheigth={44}
                        color={"496BBA"}
                        mrginTop={30}
                        borderColor={"496BBA"}
                        onPress={() => navigation.navigate('ConsultasPaciente')}
                    >
                        <ButtonQuitTitle>
                            Confirmar
                        </ButtonQuitTitle>
                    </ButtonAjust>

                    <LinkOppacityMarginTop onPress={onRequestClose}>
                        <TextAccountLink >Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>
                </AppointmentLow>

            </AppointmentContainer>

        </AppointmentBody>

    )
}