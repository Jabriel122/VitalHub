import styled from "styled-components";

export const ClinicCardView = styled.View`
    border: 1PX solid green;
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

export const ClinicCardData = styled.View`
    flex-direction: column;
    margin-left: 10px;
    border: 1PX solid green;
`

export const ClinicCardTitle = styled.Text`
      font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
`

export const ClinicCardDataSub = styled.View`
    flex-direction: row;
`

export const ClinicCardBottomData = styled.View`
       justify-content: space-between;
    flex-direction: row;
    width: auto;
    border: 1px solid yellow;
`

export const ClinicCardGreen = styled.View`
      /* border: 1px solid red; */
      justify-content: space-between;
    flex-direction: row;
    background-color: #E8FCFD;

`

export const ClinicCardStarBox = styled.View`
    border: 1px solid red;
    flex-direction: row;
    
`

export const StarText = styled.Text`
    color: #F9A620;
`

export const ClinicCardText = styled.Text`
        font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: ${props => `#${props.color}`};
`

export const ClinicCardBoxTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid blue; */
`
