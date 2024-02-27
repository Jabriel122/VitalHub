
import { Subtitle } from "../Subtitle/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ClinicCardBottomData, ClinicCardBoxTop, ClinicCardData, ClinicCardDataSub, ClinicCardGreen, ClinicCardStarBox, ClinicCardText, ClinicCardTitle, ClinicCardView, StarText } from "./Style";
import { BoxRow } from "../Box/Style";
import { Touchable, TouchableOpacity } from "react-native";



export const ClinicCard = ({

    ClinicName = "Clínica Natureh",
    nota,
    estado,
    calendario,
    status,
    onPress,
    color

}) => {
    return (
        <ClinicCardView
            color={color}
            onPress={onPress}
        >
            <ClinicCardData>
                <ClinicCardBoxTop >
                    <ClinicCardTitle>{ClinicName}</ClinicCardTitle>
                    <ClinicCardStarBox>
                        <AntDesign name="star" size={24} color="#F9A620" />
                        <ClinicCardText color={"F9A620"}>
                           {nota}
                        </ClinicCardText>
                    </ClinicCardStarBox>
                </ClinicCardBoxTop>





                <ClinicCardBottomData>
                    {/* Icone */}
                    <ClinicCardDataSub>
                        <ClinicCardText> {estado}</ClinicCardText>
                    </ClinicCardDataSub>

                    <ClinicCardGreen
                        color={"F1F0F5"}
                    >
                        <MaterialCommunityIcons name="calendar" size={24} color="#49B3BA" />
                        <ClinicCardText color={"49B3BA"}>{calendario}</ClinicCardText>
                    </ClinicCardGreen>

                </ClinicCardBottomData>
            </ClinicCardData>
        </ClinicCardView >
    )

}