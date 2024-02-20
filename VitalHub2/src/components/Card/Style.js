import styled from "styled-components";

export const CardView = styled.View`
    height: 103px;
    width: 323px;
    padding: 5px;
    background-color: #FFFFFF;
    margin: 12px 30px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
    

`

export const CardDataSub = styled.View`
    flex-direction: row;
`

export const CardGreen = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    background-color: ${props => `#${props.color}`};
    width: 100px;
`

export const CardText = styled.Text`
    color: ${props => `#${props.color}`};
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    padding-left: 5px;
`

export const CardDefinition = styled.Text`
    font-family: "MontserratAlternates_500Medium";
    font-size: 12px;
    color: ${props => `#${props.color}`} ;
`

export const CardImage = styled.Image`
    height: 80px;
    width: 77px;
    margin-left: 5px;
    border-radius: 5px;
`

export const CardData = styled.View`
    flex-direction: column;
    margin-left: 10px;
`

export const CardTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
`

export const CardIdade = styled.Text`
    font-family: "Quicksand_400Regular";
    font-size: 14px;
    color: grey;
`

export const CardEmergencia = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    color: grey;
`

export const CardBottomData = styled.View`
    /* border: 1px solid red; */
    justify-content: space-between;
    flex-direction: row;
    width: 82%;
    
`


