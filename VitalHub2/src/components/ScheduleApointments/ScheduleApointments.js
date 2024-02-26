import { ChoiceButtons, TitleChoiceButton, TitleChoiceButtons } from "./Style"

export const ScheduleApointments = ({ clickButton = false, textButton, onPress }) => {
    
    return (
        
        <ChoiceButtons
            clickButton = {clickButton}
            onPress = {onPress}
            fieldwidth={30}

        >
            <TitleChoiceButtons
                fsize={12}
                clickButton = {clickButton}
            >
                {textButton}
            </TitleChoiceButtons>
        </ChoiceButtons>

    )
}