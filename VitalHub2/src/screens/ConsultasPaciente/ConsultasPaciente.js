import { useState } from "react"
import { LittleButtons } from "../../components/Button/Style"
import { CalendarHome } from "../../components/CalandarHome/CalendarHome"
import { Card } from "../../components/Card/Card"
import { Container, ContainerFB } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { Apointments } from "../../components/Apointments/Apointments"
import { CancelarConsutlaModel } from "../Model/CancelarConsultaModel/CancelarConsultaModel"
import { Modal, TouchableHighlightBase, TouchableOpacity } from "react-native"
import { ProntuaryModal } from "../Model/Prontuary/ProntuaryModal"
import { CardList, LineBtw } from "../Home/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewConsul } from "./Style"
import { ScheduleModel } from "../Model/ScheduleModel/ScheduleModel"
import { DoctorModal } from "../Model/DoctorModal/DoctorModal"

const Consulta = [
    { id: 1, nome: "Dr.GALADRIEL", situacao: "pendente", email: "gbielmarch@gmail.com", idade: "19 anos", ocupacao: "Clinico Geral", codigo:"CRM-15286" },
    { id: 2, nome: "Dr.LEONARDO", situacao: "realizado", email: "Luis@gmail.com", idade: "32 anos", ocupacao: "Psicologo", codigo:"CRM-12983"},
    { id: 3, nome: "Dr.Mathias", situacao: "pendente", email: "Nayascat@gmail.com", idade: "22 anos", ocupacao: "Cirurgião", codigo:"CRM-12092"},
    { id: 4, nome: "Dr.Fabiano", situacao: "realizado", email: "saCul@gmail.com", idade: "9 anos", ocupacao: "NeuroCirugião", codigo:"CRM-09990"},
    { id: 5, nome: "Dra.Patricia", situacao: "cancelado", email: "Diggas@gmail.com", idade: "29 anos", ocupacao: "Quiroprta" , codigo:"CRM-78912"},
]
export const ConsultasPaciente = ({navigation}) => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPromptuary, setModalPromptuary] = useState(false);
    const [agendarConsultaModla, setAgendarConsultaModla] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [doctorModal, setDoctorModal] = useState(false);
    return (
        <>
            <ContainerFB>
                {/* Header */}
                <Header navigation ={navigation}/>

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
                                profile={profile}
                                statusLista={statusLista}
                                onPressCancel={() => setModalVisible(true)}
                                onPressDoctor={() => {
                                    setDoctorModal(true);
                                    setItemSelecionado(item);
                                }}
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
                navigation = {navigation}
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
                situacao={itemSelecionado?.situacao}
                navigation = {navigation}
            // username={itemSelecionado?.username}
            />

            <DoctorModal
                visible={doctorModal}
                onRequestClose={() => { setDoctorModal(false)}}
                nome={itemSelecionado?.nome}
                codigo={itemSelecionado?.codigo}
                ocupacao={itemSelecionado?.ocupacao}
                situacao={itemSelecionado?.situacao}
            />
        </>
    )
}