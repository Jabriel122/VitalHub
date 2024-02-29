import styled from "styled-components";

export const ClinicCardList = styled.FlatList`
    width: 100%;
    height: 50%;
    gap: 10px;
    margin-top: 30px;
    /* border: 1px solid red; */
`

export const AjustCardList = styled.View`
    width:${props => `${props.fieldWidth}%`};
    /* justify-content: center; */
    
    flex: 0.95;
    //height: 75%;
`

export const BoxNivel = styled.View`
    margin-top: 15px;
    justify-content: center;
    width: 100%;
`

export const NivelTitle = styled.Text`
    font-family: "Quicksand_600SemiBold";
    margin-left: 10px;
` 

export const AddData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`