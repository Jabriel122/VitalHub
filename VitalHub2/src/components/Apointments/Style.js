import styled from "styled-components";

export const LittleButtons = styled.TouchableOpacity`
    height: 45px;
    width: ${props => `${props.fieldwidth}%`};
   
    
    background-color: ${props => props.clickButton ? "#496BBA" : "transparent"};
    border: 2px solid #496BBA;
    
    /* background-color: ${props => `#${props.bkcolor}`}; */
    border-radius: 5px;
    /* border-color: ${props => `#${props.bcolor}`};
    color: ${props => `#${props.color}`} ; */
    margin-left: 10px;
    margin-top: 10px;

    justify-content: center;
    align-items: center;

`

export const TitleLitteButton = styled.Text`
    font-size: ${props => `${props.fsize}px`} ;
    font-family: "MontserratAlternates_700Bold";
    color: ${props => props.clickButton ? "#FBFBFB" : "#496BBA"};
`