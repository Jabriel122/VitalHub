import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 53px;
    background-color: #496BBA;
    margin-top: 30px;
    border-radius: 5px;
    border: #496BBA;

    justify-content: center;
    align-items: center;

`

export const ButtonEditar = styled(Button)`
    background-color: #ACABB7;
    border: 1px solid #ACABB7;
`

export const ButtonGoogle = styled(Button)`
    border: 1px solid #496BBA;
    background-color: white;
    flex-direction: row;

    justify-content: space-evenly;
`