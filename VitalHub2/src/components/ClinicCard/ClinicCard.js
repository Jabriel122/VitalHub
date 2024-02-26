
import { Subtitle } from "../Subtitle/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ClinicCardBottomData, ClinicCardBoxTop, ClinicCardData, ClinicCardDataSub, ClinicCardGreen, ClinicCardStarBox, ClinicCardText, ClinicCardTitle, ClinicCardView, StarText } from "./Style";
import { BoxRow } from "../Box/Style";

export const ClinicCard = ({

    ClinicName = "Clínica Natureh"

}) => {
    return (

        <ClinicCardView>
            <ClinicCardData>
                <ClinicCardBoxTop >
                    <ClinicCardTitle>{ClinicName}</ClinicCardTitle>
                    <ClinicCardStarBox>
                        <AntDesign name="star" size={24} color="#F9A620" />
                        <ClinicCardText color={"F9A620"}>
                            4,8
                        </ClinicCardText>
                    </ClinicCardStarBox>
                </ClinicCardBoxTop>





                <ClinicCardBottomData>
                    {/* Icone */}
                    <ClinicCardDataSub>
                        <ClinicCardText> São Paulo, SP</ClinicCardText>
                    </ClinicCardDataSub>

                    <ClinicCardGreen
                        color={"F1F0F5"}
                    >
                        <MaterialCommunityIcons name="calendar" size={24} color="#49B3BA" />
                        <ClinicCardText color={"49B3BA"}>Seg-Sex</ClinicCardText>
                    </ClinicCardGreen>

                </ClinicCardBottomData>
            </ClinicCardData>
        </ClinicCardView >
    )

}