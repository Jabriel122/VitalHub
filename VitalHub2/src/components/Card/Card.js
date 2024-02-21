import { CardData, CardDataSub, CardIdade, CardImage, CardEmergencia, CardTitle, CardView, CardText, CardGreen, CardDefinition, CardBottomData } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Card = ({
    color,
    modalVisible,
    situacao,
    statusLista,
    onPressCancel,
    onPressAppointment,
    nome

}) => {
    return (
        <CardView>
            <CardImage source={{ uri: "https://github.com/Jabriel122.png" }} />
            <CardData>
                <CardTitle>{nome}</CardTitle>
                <CardDataSub>
                    <CardIdade>20 anos</CardIdade>
                    <Entypo name="dot-single" size={24} color="grey" />
                    <CardEmergencia>Urgência</CardEmergencia>
                </CardDataSub>

                <CardBottomData>
                    {/* Icone */}
                    <CardGreen
                        situacao={situacao}
                        color={situacao == "pendente" ? "E8FCFD" : "F1F0F5"}
                    >
                        {
                            situacao == "pendente" ? (
                                <AntDesign
                                    situacao={situacao}
                                    name="clockcircle"
                                    size={14}
                                    color={"#49B3BA"}
                                />
                            ) : situacao == "cancelado" ? (
                                <AntDesign
                                    situacao={situacao}
                                    name="clockcircle"
                                    size={14}
                                    color={"#4E4B59"}
                                />
                            ) : (
                                <AntDesign
                                situacao={situacao}
                                name="clockcircle"
                                size={14}
                                color={"#4E4B59"}
                            />
                            )
                        }
                        <CardText color={situacao == "pendente" ? "49B3BA" : "4E4B59"}>15:00</CardText>
                    </CardGreen>

                    {/* Validar e mostrar o tipo de botão conforme a situação */}

                    {
                        situacao == "cancelado" ? (
                            <></>
                        ) : situacao == "pendente" ? (
                            <TouchableOpacity onPress={onPressCancel}>
                                <CardDefinition situacao={situacao} color={"C81D25"}>Cancelar</CardDefinition>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={onPressAppointment}>
                                <CardDefinition situacao={situacao} color={"344F8F"}> Ver Prontuario</CardDefinition>
                            </TouchableOpacity>
                        )
                    }



                </CardBottomData>
            </CardData>
        </CardView>
    )
}