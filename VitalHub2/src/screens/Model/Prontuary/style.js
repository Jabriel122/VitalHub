import styled from "styled-components";
import Modal from "react-native-modal";

export const ModelData = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 23px;
    padding-left: 24px;
    padding-right: 24px;
    
`

export const ModalBody = styled(Modal)`
    width: 90%;
    position: fixed;
    justify-content: center;
    align-items: center;
`
export const ImageProntuary = styled.Image`
    border-radius: 10px;
    width: 285px;
    height: 181px;
    margin-top: 30px;

`

export const SubtitleBox = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: auto;
`