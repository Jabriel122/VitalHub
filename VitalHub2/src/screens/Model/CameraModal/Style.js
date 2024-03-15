import styled from "styled-components";
import Modal from "react-native-modal";

export const ModalBody = styled(Modal)`
    width: 90%;
    position: fixed;
    justify-content: center;
    align-items: center;

`

export const ModalCamContainet = styled.View`
    flex: 1;
    padding: 30px;
    align-items: center;
    background-color: white;
`

export const BtnCancel = styled.TouchableOpacity`

    padding: 20px;
    border: 1px solid red;
    border-radius: 15px;
    width: 'auto';

    align-items: center;
    justify-content: center;
    background-color: transparent ;
`

export const BtnUpload = styled(BtnCancel)`
    border: 1px solid ;
    border-color:#121212;
`

export const BoxRowCamera = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 90%;
`
