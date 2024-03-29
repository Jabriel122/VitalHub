import { useState } from "react"
import { LittleButtons } from "../../components/Button/Style"
import { CalendarHome } from "../../components/CalandarHome/CalendarHome"
import { Card } from "../../components/Card/Card"
import { Container, ContainerFB } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ButtonGoogleTitle, ButtonTitle, TitleLitteButton } from "../../components/Title/Style"
import { CardList, LineBtw } from "./Style"
import { Apointments } from "../../components/Apointments/Apointments"
import { CancelarConsutlaModel } from "../Model/CancelarConsultaModel/CancelarConsultaModel"
import { Modal } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProntuaryModal } from "../Model/Prontuary/ProntuaryModal"
import { NewConsul } from "../ConsultasPaciente/Style"
import { ScheduleModel } from "../Model/ScheduleModel/ScheduleModel"
import { DoctorModal } from "../Model/DoctorModal/DoctorModal"
import * as Notification from "expo-notifications";

const Consulta = [
    { id: 1, nome: "GABS", situacao: "pendente", email: "gbielmarch@gmail.com", idade: "19 anos", username: "dixx_marchasss" },
    { id: 2, nome: "Luis", situacao: "realizado", email: "Luis@gmail.com", idade: "32 anos", username: "https://github.com/Jabriel122 .png" },
    { id: 3, nome: "Nayas", situacao: "pendente", email: "Nayascat@gmail.com", idade: "22 anos", username: "sr_batatotato" },
    { id: 4, nome: "Lucass", situacao: "realizado", email: "saCul@gmail.com", idade: "9 anos", username: "lusk4_xnr" },
    { id: 5, nome: "Diogo", situacao: "cancelado", email: "Diggas@gmail.com", idade: "29 anos", username: "dixx__luquinhasz" },
]

//Solicitar as permissões de notidicação ao iniciar o app
Notification.requestPermissionsAsync();

//Definir como as notificações devem ser tratadas quando recebidas
Notification.setNotificationHandler({
    handleNotification: async () => ({
        //Mostra o alerta quando a notificação for recebida
        shouldShowAlert: true,

        //Ele reproduz ou não um som ao receber a notificação
        shouldPlaySound: false,

        //AConfigura número de notificações no ícone do app
        shouldSetBadge: false
    })
})

export const Home = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPromptuary, setModalPromptuary] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [agendarConsultaModla, setAgendarConsultaModla] = useState(false);
    const [doctorModal, setDoctorModal] = useState(false);

    const [profile, setProfile] = useState("Paciente")

    const handleNotification = async () => {
        //Obtem o status das permissões
        const { status } = await Notification.getPermissionsAsync();

        //Verifica se o usuario concedeu permissão para notificação
        if (status !== "granted") {
            alert("Você não deixou  as notificações ativas");
            return;
        }

        // //obter o token de envio de notificação 
        // const token = await Notification.getExpoPushTokenAsync()
        // console.log(token);

        

        //Agendar uma notificação para ser exibida após 5 segundo 
        await Notification.scheduleNotificationAsync({
            content: {
                title: "Consulta Cancelada",
                body: "Consulta foi cancelada"
            },
            trigger: {
                seconds: 5
            }
        })
    }


    return (
        <>

            <ContainerFB>
                {/* Header */}
                <Header navigation={navigation} />

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
                                navigation={navigation}
                                onPressCard={() => {
                                    setModalPromptuary(true);
                                    setItemSelecionado(item);
                                }}
                                statusLista={statusLista}
                                profile={profile}
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
                                profile={profile}
                                navigation={navigation}
                                statusLista={statusLista}
                                onPressAppointment={() => {
                                    profile === "Paciente" ? (
                                        navigation.navigate('ConsultaVizualizarP')
                                    ) : (
                                        setModalPromptuary(true), setItemSelecionado(item)
                                    )

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
                {profile == "Paciente" ? (
                    <NewConsul
                        onPress={() => setAgendarConsultaModla(true)}>
                        <MaterialCommunityIcons name="stethoscope" size={32} color="#FBFBFB" />
                    </NewConsul>

                ) : (<></>)}


            </ContainerFB >
            <CancelarConsutlaModel
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
                onPressConfirma={handleNotification}
            />
            <ProntuaryModal
                visible={modalPromptuary}
                onRequestClose={() => { setModalPromptuary(false) }}
                nome={itemSelecionado?.nome}
                email={itemSelecionado?.email}
                idade={itemSelecionado?.idade}
                situacao={statusLista}
                profile={profile}
                navigation={navigation}
            // username={itemSelecionado?.username}
            />
            <ScheduleModel
                visible={agendarConsultaModla}
                navigation={navigation}
                onRequestClose={() => { setAgendarConsultaModla(false) }}
            />

            <DoctorModal
                visible={doctorModal}
                onRequestClose={() => { setDoctorModal(false) }}
                nome={itemSelecionado?.nome}
                codigo={itemSelecionado?.codigo}
                ocupacao={itemSelecionado?.ocupacao}
                situacao={itemSelecionado?.situacao}
                navigation={navigation}
            />
        </>
    )

}