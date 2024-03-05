import styled from "styled-components";

export const Title = styled.Text`
    font-size: 20px;
    color: #33303e;
    font-family: 'MontserratAlternates_600SemiBold';
    margin-bottom: 5px;
    margin-top: 25px;
    align-self: center;

    
`

export const AjustTitle = styled.Text`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `#${props.color}`};
    margin-bottom:  ${props => `${props.marginBottom}px`};
    margin-top:  ${props => `${props.marginTop}px`};
    font-family: 'MontserratAlternates_600SemiBold';
    align-self: center;
`
export const ButtonAjustTitleImage = styled(AjustTitle)`
    margin-left: 20px;
`

export const ButtonTitle = styled.Text`
    font-size: 15px;
    font-family: "MontserratAlternates_700Bold";
    color: white;
    text-transform: uppercase;
`

export const ButtonQuitTitle = styled(ButtonTitle)`
        margin-right: 40px;
    margin-left: 40px;
`

export const ButtonGoogleTitle = styled(ButtonTitle)`
    color: #496BBA;
`
export const ButtonGoogleTitleG = styled.Image`
    width: 20px;
    height: 20px;   
`

