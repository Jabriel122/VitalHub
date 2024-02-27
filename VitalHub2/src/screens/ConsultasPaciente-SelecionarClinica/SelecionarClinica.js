import { useState } from "react"
import { Button, ButtonAjust } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { AjustTitle, ButtonQuitTitle, Title } from "../../components/Title/Style"
import { AjustCardList, ClinicCardList } from "./Style"
import { MedicCard } from "../../components/MedicCard/MedicCard"

const Clinica = [
    { id: 1, nome: "Clínica Natureh", nota: "4,5", estado: "São Paulo, SP", calendario: "Seg-Sex" },
    { id: 2, nome: "Diamond Pró-Mulher", nota: "4,8", estado: "São Paulo, SP", calendario: "Seg-Sex" },
    { id: 3, nome: "Clinica Villa Lobos", nota: "4,2", estado: "Taboão, SP", calendario: "Seg-Sab" },
    { id: 4, nome: "SP Oncologia Clínica", nota: "4,2", estado: "Taboão, SP", calendario: "Seg-Sab" },
    { id: 5, nome: "Clinica Ilko", nota: "4,8", estado: "São Paulo, SP", calendario: "Seg-Sab" },
]
const Medico = [
    { id: 1, nome: "Dr.GALADRIEL",ocupacao: "Demartologa, Esteticista"},
    { id: 2, nome: "Dr.LEONARDO", ocupacao: "Cirurgião, Neurologista "},
    { id: 3, nome: "Dr.Mathias", ocupacao: "Clinioco, ortopedista"},
    { id: 4, nome: "Dr.Fabiano", ocupacao: "Clinico Geral"  },
    { id: 5, nome: "Dra.Patricia", ocupacao: "Clínico, Pediatra" },
]



export const SelecionarClinica = () => {
    const [clinicaSelect, setClinicaSelect] = useState("");
    const [medicSelect, setMedicSelect] = useState("")
    const [status, setStatus] = useState("")


    return (

        <Container>


            <AjustTitle
                fontSize={20}
                color={"33303E"}
                marginBottom={5}
                marginTop={40}
            >
                Selecionar {status}
            </AjustTitle>
            {
                status == "clínica" ? (
                    <AjustCardList>
                        <ClinicCardList
                            data={Clinica}
                            keyExtractor={item => item.id}

                            renderItem={({ item }) => <ClinicCard
                                // modalVisible={() => setModalVisible(modalVisible)}
                                ClinicName={item.nome}
                                nota={item.nota}
                                estado={item.estado}
                                calendario={item.calendario}
                                color={clinicaSelect == item.id}
                                onPress={() => clinicaSelect == item.id ? setClinicaSelect(item.id) : setClinicaSelect(item.id)}
                            />}
                        />
                    </AjustCardList>

                ) : status == "médico" ? (
                    <AjustCardList>
                    <ClinicCardList
                        data={Medico}
                        keyExtractor={item => item.id}

                        renderItem={({ item }) => <MedicCard
                            // modalVisible={() => setModalVisible(modalVisible)}
                            MedicName={item.nome}
                            ocupacao={item.ocupacao}
                            color={medicSelect == item.id}
                            onPress={() => medicSelect == item.id ? setMedicSelect(item.id) : setMedicSelect(item.id)}
                        />}
                    />
                </AjustCardList>
                ) : (
                    <></>
                )
                
            }



            <ButtonAjust
                fieldwidth={90}
                fieldheigth={53}
                color={"496BBA"}
                mrginTop={0}
                borderColor={"496BBA"}

                onPress={() => {
                    switch (status) {
                        case "":
                            setStatus("clínica")
                            break;
                        case "clínica":
                            setStatus("médico")
                            break;
                        case "médico":
                            setStatus("data")
                            break;

                        default:
                            setStatus("data")
                            break;
                    }
                }}
            >
                <ButtonQuitTitle>
                    Confirmar
                </ButtonQuitTitle>
            </ButtonAjust>


            <LinkOppacityMarginTop
                onPress={() => {
                    switch (status) {
                        case "data":
                            setStatus("médico")
                            break;
                        case "médico":
                            setStatus("clínica")
                            break;

                        default:
                            setStatus("clínica")
                            break;
                    }
                }}
            >
                <TextAccountLink >Cancelar</TextAccountLink>
            </LinkOppacityMarginTop>
        </Container>
    )
}