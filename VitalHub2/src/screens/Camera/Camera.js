import { useEffect, useState } from "react";
import { Container, ModelContainer } from "../../components/Container/Style"
import { Camera, CameraOrientation, CameraType } from 'expo-camera';
import { BoxBtnCamera } from "./Style";
import { Title } from "../../components/Title/Style";
import { StyleSheet } from "react-native";

export const Cameras = () => {
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

            //   const {status: mediaStatus} = await MediaLibrary.requestPermissionsAsync();
        })();
    }, [])
    return (
        <ModelContainer>
            <Title>AQUI</Title>
            <Camera
                type={tipoCamera}
                style={styles.CameraAjust}
                ratio="16:9"
            >
                <BoxBtnCamera>

                </BoxBtnCamera>

            </Camera>
        </ModelContainer>
    )
}

const styles = StyleSheet.create({
    CameraAjust:{
        flex: 1,
        width: '100%',
        height: '80%'
    }
});