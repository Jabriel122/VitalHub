import Modal from "react-native-modal";
import styled from "styled-components";

export const AppointmentBody = styled(Modal)`
   flex: 0.9;
   width: 90%;
   background-color: #FBFBFB;
   border-radius: 10px;
   align-items: center;
   align-self: center;
   /* justify-content: center; */
   margin-top: 40px;
`

export const AppointmentContainer = styled.View`
    width: 100%;
    /* height:100%; */
    align-items: center;
    /* justify-content: space-between; */
    justify-self: center;
`


export const AppointmentHead = styled.View`
    width: 90%;
    /* border: 1px solid red; */
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

export const AppointmentMiddle = styled.View`
    width: 90%;
    /* border: 1px solid red; */
    justify-content: flex-start;
    flex-direction: center;
`

export const DataTitle = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-left: 10px;
`

export const DataSubTitle = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    margin-left: 10px;
    margin-top: 10px;
`

export const BoxData = styled.View`
    margin-top: 15px;
    justify-content: center;
    width: auto;
`

export const AppointmentLow = styled.View`
    /* border: 1px solid black; */
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: 20px;
`