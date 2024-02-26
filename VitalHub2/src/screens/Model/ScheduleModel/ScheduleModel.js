import { useState } from "react"
import { Button } from "../../../components/Button/Style"
import { Input } from "../../../components/Input/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { ScheduleApointments } from "../../../components/ScheduleApointments/ScheduleApointments"
import { ButtonQuitTitle, Title } from "../../../components/Title/Style"
import { AddData, BoxDivider, BoxNivel, ContainerSchedule, DataSchedule, NivelTitle, ScheduleBody } from "./Style"

export const ScheduleModel = ({ visible, onRequestClose }) => {

    const [status, setStatus] = useState("Rotina");
    return (
        <ScheduleBody
            isVisible={visible}
        >
            <ContainerSchedule>
                <DataSchedule>

                    <BoxDivider>
                        <Title>
                            Agendar consulta
                        </Title>
                        <BoxNivel>
                            <NivelTitle>
                                Qual o nivel da Consulta
                            </NivelTitle>
                            <AddData>
                                <ScheduleApointments
                                    textButton={"Rotinas"}
                                    clickButton={status === "Rotinas"}
                                    onPress={() => setStatus("Rotinas")}
                                />
                                <ScheduleApointments
                                    textButton={"Exame"}
                                    clickButton={status === "Exame"}
                                    onPress={() => setStatus("Exame")}
                                />
                                <ScheduleApointments 
                                    textButton={"Urgência"} 
                                    clickButton={status === "Urgência"}
                                    onPress={() => setStatus("Urgência")}
                                    />
                            </AddData>
                        </BoxNivel>
                        <BoxNivel>
                            <NivelTitle>
                                Informe a localização desejada
                            </NivelTitle>
                            <AddData>
                                <Input placeholder="Informe a localização" />
                            </AddData>
                        </BoxNivel>
                    </BoxDivider>

                    <BoxDivider>
                        <Button >
                            <ButtonQuitTitle>
                                Confirmar
                            </ButtonQuitTitle>
                        </Button>


                        <LinkOppacityMarginTop onPress={onRequestClose}>
                            <TextAccountLink >Cancelar</TextAccountLink>
                        </LinkOppacityMarginTop>
                    </BoxDivider>
                </DataSchedule>
            </ContainerSchedule>

        </ScheduleBody >
    )

}