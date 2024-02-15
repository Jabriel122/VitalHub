import styled from "styled-components"

export const Box = styled.View`
    background-color: #49B3BA26;
    width: auto;
    height: auto;
    border-radius: 40px;
    padding: 5px;
    
    /* justify-content: center;
    align-self: center; */

    margin-right: 34px;
    margin-top: 10px;
   
`

export const BoxMarginDown = styled.View`
    /* border: 1px solid red; */
    margin-bottom: 20px;
    width: 90%;
`

export const BoxInput = styled.View`
    width: ${props => `${props.fieldwidth}%`};
`

export const BoxRow = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 90%;

`

export const BoxTitleLabel = styled.View`
    justify-content: flex-start;
    width: 90%;
    /* border: 1px solid red; */
`

export const BoxShadow = styled.View`
    width: 80%;
    background-color: white;
    border-radius: 5px;
    padding: 10px;

    position: relative;
    top: -30px;
    
    justify-content: center;
    align-items: center;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
`
export const BoxUser = styled.View`
    flex-direction: row;
    align-items: center;
`