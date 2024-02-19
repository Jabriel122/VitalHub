import { CardData, CardDataSub, CardIdade, CardImage, CardEmergencia, CardTitle, CardView, CardText, CardGreen, CardDefinition, CardBottomData } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Card = ({ color }) => {
    return (
        <CardView>
            <CardImage source={{ uri: "https://github.com/Jabriel122.png" }} />
            <CardData>
                <CardTitle>Gabriel MArchas</CardTitle>
                <CardDataSub>
                    <CardIdade>20 anos</CardIdade>
                    <Entypo name="dot-single" size={24} color="grey" />
                    <CardEmergencia>Urgência</CardEmergencia>
                </CardDataSub>

                <CardBottomData>
                    {/* Icone */}
                    <CardGreen color={"E8FCFD"}>
                        <AntDesign name="clockcircle" size={14} color={"#49B3BA"} />
                        <CardText color={"49B3BA"}>15:00</CardText>
                    </CardGreen>
                    <TouchableOpacity>
                        <CardDefinition color={"C81D25"}>Cancelar</CardDefinition>
                    </TouchableOpacity>

                </CardBottomData>
            </CardData>
        </CardView>
    )
}