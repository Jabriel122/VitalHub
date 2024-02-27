import styled from "styled-components";

export const MedicCardView = styled.TouchableOpacity`
    border: ${props => props.color ? "2px solid #496BBA" : "0px"};
    height: 84px;
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

export const MedicCardData = styled.View`
    /* flex-direction: column; */
    width: 90%;
    justify-content: space-between;
    margin-left: 10px;
    /* border: 1PX solid green; */
`

export const MedicCardTitle = styled.Text`
      font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
`

export const MedicCardDataSub = styled.View`
    flex-direction: row;
`

export const MedicCardBottomData = styled.View`
       justify-content: space-between;
    flex-direction: row;
    width: auto;
    /* margin-top: 10px; */
    /* border: 1px solid yellow; */
`

export const MedicCardStarBox = styled.View`
    /* border: 1px solid red; */
    flex-direction: row;
    
`

export const MedicCardText = styled.Text`
        font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: ${props => `#${props.color}`};
`

export const MedicCardBoxTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
    /* border: 1px solid blue; */
`
