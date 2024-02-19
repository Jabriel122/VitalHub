import { LittleButtons, TitleLitteButton } from "./Style"

export const Apointments = ({ clickButton = false, textButton, onPress }) => {
    return (

        <LittleButtons
            clickButton = {clickButton}
            onPress = {onPress}
            fieldwidth={30}

        >
            <TitleLitteButton
                fsize={12}
                clickButton = {clickButton}
            >
                {textButton}
            </TitleLitteButton>
        </LittleButtons>

    )
}