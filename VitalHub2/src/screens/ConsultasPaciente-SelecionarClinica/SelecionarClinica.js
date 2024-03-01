import { useState } from "react"
import { Button, ButtonAjust } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { AjustTitle, ButtonQuitTitle, Title } from "../../components/Title/Style"
import { AddData, AjustCardList, BoxNivel, ClinicCardList, NivelTitle } from "./Style"
import { MedicCard } from "../../components/MedicCard/MedicCard"
import { CalendarApp } from "../../components/CalendarApp/CalendarApp"
import { Input } from "../../components/Input/Style"
import { StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import SelectDropdown from "react-native-select-dropdown"
import { ScheduleAppointmentModal } from "../Model/ScheduleAppointmentModal/ScheduleAppointmentModal"

const Clinica = [
    { id: 1, nome: "Clínica Natureh", nota: "4,5", estado: "São Paulo, SP", calendario: "Seg-Sex" },
    { id: 2, nome: "Diamond Pró-Mulher", nota: "4,8", estado: "São Paulo, SP", calendario: "Seg-Sex" },
    { id: 3, nome: "Clinica Villa Lobos", nota: "4,2", estado: "Taboão, SP", calendario: "Seg-Sab" },
    { id: 4, nome: "SP Oncologia Clínica", nota: "4,2", estado: "Taboão, SP", calendario: "Seg-Sab" },
    { id: 5, nome: "Clinica Ilko", nota: "4,8", estado: "São Paulo, SP", calendario: "Seg-Sab" },
]
const Medico = [
    { id: 1, nome: "Dr.GALADRIEL", ocupacao: "Demartologa, Esteticista" },
    { id: 2, nome: "Dr.LEONARDO", ocupacao: "Cirurgião, Neurologista " },
    { id: 3, nome: "Dr.Mathias", ocupacao: "Clinioco, ortopedista" },
    { id: 4, nome: "Dr.Fabiano", ocupacao: "Clinico Geral" },
    { id: 5, nome: "Dra.Patricia", ocupacao: "Clínico, Pediatra" },
]

const Horarios = [
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00"
]



export const SelecionarClinica = () => {
    const [clinicaSelect, setClinicaSelect] = useState("");
    const [medicSelect, setMedicSelect] = useState("")
    const [status, setStatus] = useState("clínica")
    const [modalAppointementVisible, setModalAppointementVisible] = useState(false);


    return (
        <>
            <Container>


                <AjustTitle
                    fontSize={20}
                    color={"33303E"}
                    marginBottom={5}
                    marginTop={100}
                >
                    Selecionar {status}
                </AjustTitle>
                {
                    status == "clínica" ? (
                        <AjustCardList
                            fieldWidth={100}
                        >
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
                        <AjustCardList
                            fieldWidth={100}
                        >
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
                        <AjustCardList
                            fieldWidth={90}
                        >
                            <CalendarApp />

                            <BoxNivel>
                                <NivelTitle>
                                    Informe a localização desejada
                                </NivelTitle>
                                <AddData>
                                    <SelectDropdown
                                        data={Horarios}
                                        // defaultValueByIndex={1}
                                        // defaultValue={'Egypt'}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index);
                                        }}
                                        defaultButtonText={'Selecionar horário'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item;
                                        }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={'#34898F'} size={22} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown1DropdownStyle}
                                        rowStyle={styles.dropdown1RowStyle}
                                        rowTextStyle={styles.dropdown1RowTxtStyle}
                                    />
                                </AddData>
                            </BoxNivel>
                        </AjustCardList>

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
                            case "data":
                                setModalAppointementVisible(true)
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

            <ScheduleAppointmentModal
                visible={modalAppointementVisible}
                onRequestClose={()=> (setModalAppointementVisible(false))}
            />
        </>

    )
}

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: '100%',
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#60BFC5',
        marginTop: 10
    },
    dropdown1BtnTxtStyle: { color: '#34898F', textAlign: 'left', fontFamily: 'MontserratAlternates_600SemiBold', fontSize: 14 },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#60BFC5' },
    dropdown1RowTxtStyle: { color: '#34898F', textAlign: 'center', fontSize: 20 },
});