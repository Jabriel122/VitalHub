import { useEffect, useRef, useState } from "react";
import { CameraContianer, Container, ModelContainer } from "../../components/Container/Style"
import { Camera, CameraOrientation, CameraType } from 'expo-camera';
import { BoxBtnCamera, CameraBtn } from "./Style";
import { AjustTitle, Title } from "../../components/Title/Style";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'
import { CameraModal } from "../Model/CameraModal/CameraModal";

export const Cameras = ({navigation}) => {
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)
    const [photo, setPhoto] = useState()
    const [cameraModal, setCameraModal] = useState(false)

    const cameraRef = useRef(null)

    async function CapturePhoto() {
        //Verificando se a CameraRef está vázio
        if (cameraRef) {
            const data = await cameraRef.current.takePictureAsync()
            
            setPhoto(data.uri)

            setCameraModal(true)
            // console.log(data.uri)
            if(photo == null){
                console.log("Algo deu errado nessa merda do caraio filha da puta")
            }else{
                console.log(data.uri)
                console.log(photo)
                console.log("Deu certo eu acho")
            }
            
            // console.log(data)
        }

    }

    async function SavePhoto() {
        //Verificação se tem uma foto para ser salva
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(() => {
                    alert('Sucesso', 'Foto salva na galeria')
                }).catch(error => {
                    alert("Erro ao processar foto")
                    console.log(error)
                })
        }
    }

    async function ClearPhoto() {
        // setPhoto(null)

        setCameraModal(false)
    }

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        })();
    }, [])

    return (
        <>
            <CameraContianer>
                {/* <Title>AQUI</Title> */}
                <Camera
                    ref={cameraRef}
                    type={tipoCamera}
                    style={styles.CameraAjust}
                    ratio="16:9"
                >
                    <BoxBtnCamera>
                        <CameraBtn onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
                            <MaterialCommunityIcons name="camera-flip-outline" size={23} color={'#fff'} />
                        </CameraBtn>

                        <CameraBtn onPress={() => CapturePhoto()}>
                            <FontAwesome name='camera' size={23} color={'#fff'} />
                        </CameraBtn>

                        <CameraBtn onPress={() => navigation.navigate("ConsultaVizualizarP")}>
                            <AjustTitle
                                fontSize={14}
                                color={"fff"}
                                marginBottom={0}
                                marginTop={0}
                            > 
                                Sair
                            </AjustTitle>
                        </CameraBtn>
                       

                    </BoxBtnCamera>
                </Camera>
            </CameraContianer>

            <CameraModal
                uriPhoto={photo}
                visible={cameraModal}
                onRequestClose={() => { ClearPhoto(false) }}
                onRequestSave={() => {SavePhoto()}}

            />
        </>

    )
}

const styles = StyleSheet.create({
    CameraAjust: {
        flex: 1,
        width: '100%',
        height: '80%'
    }
});