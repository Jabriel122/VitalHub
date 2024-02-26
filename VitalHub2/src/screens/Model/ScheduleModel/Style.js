import styled from "styled-components";
import Modal from "react-native-modal";

export const ContainerSchedule = styled.View`
    width: 90%;
    height:90%;
    align-items: center;
    justify-content: space-between;


`

export const DataSchedule = styled.View`
  /* border: 1px solid red ; */
  justify-content: space-between;
  height: 100%;
`

export const ScheduleBody = styled(Modal)`
   height: 85%;
   width: 100%;
   background-color: #FBFBFB;
   border-radius: 10px 10px 0px 0px;
   align-items: center;
   align-self: center;
   position: absolute;
   bottom: 0px;
   margin: 0px;
`

export const BoxNivel = styled.View`
    margin-top: 15px;
    justify-content: flex-start;
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

export const BoxDivider = styled.View`
      justify-content: center;
    align-items: center;
`