import styled from "styled-components";

export const Label = styled.View`
    background-color: #F5F3F3;
    border: 2px solid #F5F3F3;
    border-radius: 5px;
    width: ${props => `${props.fieldwidth}%`};
    height: auto;
    margin-top: 10px;
`



export const TextLabel = styled.Text`
    font-family: "MontserratAlternates_500Medium";
    font-size: 14px;
    padding: 16px;
   
`

export const TitleLabel = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-top: 24px;

`