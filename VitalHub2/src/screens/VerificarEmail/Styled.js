import styled from "styled-components";

export const CodeContent = styled.View`
    /* border: 1px solid red; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin-top: 20px;
`

export const InputContent = styled.TextInput.attrs({ placeholderTextColor: "#77CACF" })`
    width: 20%;
    border: 2px solid #77CACF;
    border-radius: 5px;
    font-size: 52px;
    font-family: 'Quicksand_600SemiBold';
    /* padding-left: 22px; */
    text-align: center;

    margin-top: 20px;
    margin-bottom: 30px;
`



