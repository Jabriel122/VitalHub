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

export const LittleButtons = styled.TouchableOpacity`
    height: 45px;
    width: ${props => `${props.fieldwidth}%`};
    background-color: ${props => `#${props.bkcolor}`};
    border-width:1px;
    border-radius: 5px;
    border-color: ${props => `#${props.bcolor}`};
    color: ${props => `#${props.color}`} ;
    /* margin-left: 10px; */
    margin-top: 30px;

    justify-content: center;
    align-items: center;

`

