import styled from "styled-components";

export const BoxRowAjust = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center ;
    justify-self: center;
    width: ${props => `${props.fieldwidth}%`};
    padding: 10px;

    /* border: 1px solid #8C8A97; */

`

export const Divider = styled.View`
    border: 2px solid #8C8A97;
    width: 90%;
    height: auto;
    margin-top: 19px;
    margin-bottom: 21px;
`