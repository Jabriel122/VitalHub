import { ChoiceButtons, TitleChoiceButton } from "./Style"

export const ScheduleApointments = ({ clickButton = false, textButton, onPress }) => {
    return (

        <ChoiceButtons
            clickButton = {clickButton}
            onPress = {onPress}
            fieldwidth={30}

        >
            <TitleChoiceButton
                fsize={12}
                clickButton = {clickButton}
            >
                {textButton}
            </TitleChoiceButton>
        </ChoiceButtons>

    )
}