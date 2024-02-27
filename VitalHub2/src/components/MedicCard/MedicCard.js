import { MedicCardBottomData, MedicCardBoxTop, MedicCardData, MedicCardDataSub, MedicCardText, MedicCardTitle, MedicCardView } from "./Style"

export const MedicCard = () => {
    MedicName,
    ocupacao,
    onPress,
    color

    return (
        <MedicCardView
            color={color}
            onPress={onPress}
        >
            <MedicCardData>
                <MedicCardBoxTop >
                    <MedicCardTitle>{MedicName}</MedicCardTitle> 
                </MedicCardBoxTop>

                <MedicCardBottomData>
                    {/* Icone */}
                    <MedicCardDataSub>
                        <MedicCardText> {ocupacao}</MedicCardText>
                    </MedicCardDataSub>
                </MedicCardBottomData>
            </MedicCardData>
        </MedicCardView >
    )
}