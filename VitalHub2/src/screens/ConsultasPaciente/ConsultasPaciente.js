import { useState } from "react"
import { LittleButtons } from "../../components/Button/Style"
import { CalendarHome } from "../../components/CalandarHome/CalendarHome"
import { Card } from "../../components/Card/Card"
import { Container, ContainerFB } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { Apointments } from "../../components/Apointments/Apointments"
import { CancelarConsutlaModel } from "../Model/CancelarConsultaModel/CancelarConsultaModel"
import { Modal } from "react-native"
import { ProntuaryModal } from "../Model/Prontuary/ProntuaryModal"
import { CardList, LineBtw } from "../Home/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewConsul } from "./Style"
import { ScheduleModel } from "../Model/ScheduleModel/ScheduleModel"

const Consulta = [
    { id: 1, nome: "Dr.GALADRIEL", situacao: "pendente", email: "gbielmarch@gmail.com", idade: "19 anos", username: "dixx_marchasss" },
    { id: 2, nome: "Dr.LEONARDO", situacao: "realizado", email: "Luis@gmail.com", idade: "32 anos", username: "https://github.com/Jabriel122 .png" },
    { id: 3, nome: "Dr.Mathias", situacao: "pendente", email: "Nayascat@gmail.com", idade: "22 anos", username: "sr_batatotato" },
    { id: 4, nome: "Dr.Fabiano", situacao: "realizado", email: "saCul@gmail.com", idade: "9 anos", username: "lusk4_xnr" },
    { id: 5, nome: "Dra.Patricia", situacao: "cancelado", email: "Diggas@gmail.com", idade: "29 anos", username: "dixx__luquinhasz" },
]
export const ConsultasPaciente = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPromptuary, setModalPromptuary] = useState(false);
    const [agendarConsultaModla, setAgendarConsultaModla] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    return (
        <>

            <ContainerFB>
                {/* Header */}
                <Header />

                <CalendarHome />

                <LineBtw>
                    <Apointments
                        clickButton={statusLista === "pendente"}
                        onPress={() => setStatusLista("pendente")}
                        textButton={"Agendado"}
                    />
                    <Apointments
                        textButton={"Realizado"}
                        clickButton={statusLista === "realizado"}
                        onPress={() => setStatusLista("realizado")}
                    />
                    <Apointments
                        textButton={"Cancelados"}
                        clickButton={statusLista === "cancelado"}
                        onPress={() => setStatusLista("cancelado")}
                    />
                </LineBtw>

                {
                    statusLista == "pendente" ? (
                        <CardList
                            data={Consulta}
                            keyExtractor={item => item.id}

                            renderItem={({ item }) => item.situacao == "pendente" ? <Card
                                // modalVisible={() => setModalVisible(modalVisible)}
                                situacao={item.situacao}
                                nome={item.nome}
                                statusLista={statusLista}
                                onPressCancel={() => setModalVisible(true)}
                            /> : <></>}

                        />
                    ) : statusLista == "realizado" ? (
                        <CardList
                            data={Consulta}
                            keyExtractor={item => item.id}

                            renderItem={({ item }) => item.situacao == "realizado" ? <Card
                                // modalVisible={() => setModalVisible(modalVisible)}
                                situacao={item.situacao}
                                nome={item.nome}
                                email={item.email}
                                statusLista={statusLista}
                                onPressAppointment={() => {
                                    setModalPromptuary(true);
                                    setItemSelecionado(item);
                                }}
                            /> : <></>}

                        />
                    ) : (
                        <CardList
                            data={Consulta}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => item.situacao == "cancelado" ? <Card
                                // modalVisible={() => setModalVisible(modalVisible)}
                                situacao={item.situacao}
                                nome={item.nome}
                                statusLista={statusLista}

                            /> : <></>}

                        />
                    )
                }

                <NewConsul
                    onPress={() => setAgendarConsultaModla(true)}
                >
                    <MaterialCommunityIcons name="stethoscope" size={32} color="#FBFBFB" />
                </NewConsul>

            </ContainerFB >
            <ScheduleModel
                visible={agendarConsultaModla}
                onRequestClose={() => { setAgendarConsultaModla(false) }}
            />

            <CancelarConsutlaModel
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
            />
            <ProntuaryModal
                visible={modalPromptuary}
                onRequestClose={() => { setModalPromptuary(false) }}
                nome={itemSelecionado?.nome}
                email={itemSelecionado?.email}
                idade={itemSelecionado?.idade}
            // username={itemSelecionado?.username}
            />
        </>
    )
}