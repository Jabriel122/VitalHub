import styled from "styled-components";
import Modal from "react-native-modal";

export const ContainerSchedule = styled.View`
    width: 90%;
    height:90%;
    align-items: center;
    justify-content: space-between;


`

export const DataSchedule = styled.View`
  border: 1px solid red ;
`

export const ScheduleBody = styled(Modal)`
   height: 60%;
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
    justify-content: center;
    align-items: center;
`

export const NivelTitle = styled.Text`
    font-family: "Quicksand_600SemiBold";
` 

export const AddData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`