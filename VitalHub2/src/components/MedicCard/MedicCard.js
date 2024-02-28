import { MedicCardBottomData, MedicCardBoxTop, MedicCardData, MedicCardDataSub, MedicCardText, MedicCardTitle, MedicCardView, MedicImage } from "./Style"

export const MedicCard = ({
    MedicName,
    ocupacao,
    onPress,
    color
}) => {


    return (
        <MedicCardView
            color={color}
            onPress={onPress}
        >

            <MedicImage source={require("../../assets/PofilePicture/Cillian Murphy.png")}/>
            <MedicCardData>
                <MedicCardBoxTop >
                    <MedicCardTitle>{MedicName}</MedicCardTitle>
                </MedicCardBoxTop>

                <MedicCardBottomData>
                    {/* Icone */}
                    <MedicCardDataSub>
                        <MedicCardText color={"8C8A97"}> {ocupacao}</MedicCardText>
                    </MedicCardDataSub>
                </MedicCardBottomData>
            </MedicCardData>
        </MedicCardView >
    )
}