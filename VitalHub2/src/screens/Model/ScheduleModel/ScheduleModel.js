import { Input } from "../../../components/Input/Style"
import { ScheduleApointments } from "../../../components/ScheduleApointments/ScheduleApointments"
import { Title } from "../../../components/Title/Style"
import { AddData, BoxNivel, ContainerSchedule, DataSchedule, NivelTitle, ScheduleBody } from "./Style"

export const ScheduleModel = ({ visible, onRequestClose }) => {
    return (
        <ScheduleBody
            isVisible={visible}
        >
            <ContainerSchedule>
                <DataSchedule>
                    <Title>
                        Agendar consulta
                    </Title>

                    <BoxNivel>
                        <NivelTitle>
                            Qual o nivel da Consulta
                        </NivelTitle>
                        <AddData>
                           <ScheduleApointments textButton={"Rotinas"}/>
                           {/* <ScheduleApointments textButton={"Exame"}/>
                           <ScheduleApointments textButton={"Urgência"}/> */}
                        </AddData>
                    </BoxNivel>

                </DataSchedule>
            </ContainerSchedule>

        </ScheduleBody>
    )

}