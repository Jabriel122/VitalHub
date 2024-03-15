import { Image } from "react-native"
import { ModelContainer } from "../../../components/Container/Style"
import { BoxRowCamera, BtnCancel, BtnUpload, ModalBody, ModalCamContainet } from "./Style"
import { BoxRow } from "../../../components/Box/Style"
import { CameraBtn } from "../../Camera/Style"
import { FontAwesome } from '@expo/vector-icons'
import { Title } from "../../../components/Title/Style"


export const CameraModal = ({ visible, uriPhoto = "", onRequestClose, onRequestSave }) => {
    
    return (
        <ModalBody
            isVisible={visible}
            animationIn={"flipInX"}
            animationOut={"flipOutX"}
        >
            <ModalCamContainet>
                {/* <Title>
                    {uriPhoto}
                </Title> */}
                <Image
                    style={{ width: '100%', height: 500, borderRadius: 10 }}
                    source={{ uri: `${uriPhoto}` }}
                />

                <BoxRowCamera>
                    <BtnCancel onPress={onRequestClose}>
                        <FontAwesome name='trash' size={23} color={'#ff0000'} />
                    </BtnCancel>

                    <BtnUpload>
                        <FontAwesome name='save' size={23} color={'#121212'} />
                    </BtnUpload>
                </BoxRowCamera>
            </ModalCamContainet>
        </ModalBody>
    )
}