import styled from "styled-components";

export const ChoiceButtons = styled.TouchableOpacity`
    height: 45px;
    width: ${props => `${props.fieldwidth}%`};
   
    
    background-color: ${props => props.clickButton ? "#60BFC5" : "transparent"};
    border: 2px solid #60BFC5;
    
    /* background-color: ${props => `#${props.bkcolor}`}; */
    border-radius: 5px;
    /* border-color: ${props => `#${props.bcolor}`};
    color: ${props => `#${props.color}`} ; */
    margin-left: 10px;
    margin-top: 10px;

    justify-content: center;
    align-items: center;

`

export const TitleChoiceButtons = styled.Text`
    font-size: ${props => `${props.fsize}px`} ;
    font-family: "MontserratAlternates_700Bold";
    color: ${props => props.clickButton ? "#FBFBFB" : "#34898F"};
`