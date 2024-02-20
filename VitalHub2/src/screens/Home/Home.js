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

const Consulta = [
    { id: 1, nome: "GABS", situacao: "pendente" },
    { id: 2, nome: "Felipe", situacao: "realizado" },
    { id: 3, nome: "Nayas", situacao: "pendente" },
    { id: 4, nome: "Lucass", situacao: "realizado" },
    { id: 5, nome: "Diogo", situacao: "cancelado" },
]

export const Home = () => {

    const [statusLista, setStatusLista] = useState();
    const [modalVisible, setModalVisible] = useState(false);


    return (
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

            <CardList
                data={Consulta}
                renderItem={(item) => <Card 
                    modalVisible={() => setModalVisible(modalVisible)}
                    situacao={item.situacao}
                    nome={item.nome}
                    />}
                keyExtractor={item => item.id}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <CancelarConsutlaModel modalVisible={() => setModalVisible(!modalVisible)}/>
            </Modal>



        </ContainerFB >
    )

}