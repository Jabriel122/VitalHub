
import { BoxInput, BoxRow, BoxTitleLabel } from "../../components/Box/Style"
import { Container, ScrollForm } from "../../components/Container/Style"
import { Label, TextLabel, TitleLabel } from "../../components/Label/Style"
import { ProfilePicture } from "../../components/PofilePicture/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { Title } from "../../components/Title/Style"
import MapView, { Marker } from 'react-native-maps';
import { mapskey } from "./mapsKey"
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { BoxRowMap } from "./Style"
import { useEffect, useRef, useState } from "react"
import { LocationAccuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location"
import MapViewDirections from "react-native-maps-directions"

export const LocalConsulta = ({ navigation }) => {
    const [initialPosition, setInitialPosition] = useState(null)
    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.6944,
        longitude: -46.5654,
    })
    const mapReference = useRef(null)

    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const captureLocation = await getCurrentPositionAsync()

            setInitialPosition(captureLocation)

            console.log(initialPosition)
        }
    }


    async function RecarregarVisualizacaoMapa() {
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates(
                [
                    { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
                    { latitude: finalPosition.latitude, longitude: finalPosition.longitude }

                ],
                {
                    edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
                    animated: true
                }
            )
        }
    }

    useEffect(() => {
        CapturarLocalizacao()

        //Monitora em tempo real
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1,

        }, async (response) => {

            //Recebe e guarda a nova localização
            await initialPosition(response)

            //Animação e deixa o mapa em 3D
            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
            console.log(response)
        })
    }, [1000])

    useEffect(() => {
        RecarregarVisualizacaoMapa()
    }, [initialPosition])

    return (
        <Container>
            {
                initialPosition != null ? (
                    <MapView
                        ref={mapReference}
                        style={styles.map}
                        initialRegion={{
                            latitude: initialPosition.coords.latitude,
                            longitude: initialPosition.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
                        }}
                        customMapStyle={grayMapStyle}
                    >
                        <MapViewDirections
                            origin={initialPosition.coords}
                            destination={{
                                latitude: -23.6944,
                                longitude: -46.5654,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                            strokeWidth={5}
                            strokeColor='blue'
                            apikey={mapskey}
                        />

                        <Marker
                            coordinate={{
                                latitude: initialPosition.coords.latitude,
                                longitude: initialPosition.coords.longitude,
                            }}
                            title='Onde você quer ir'
                            description='Objetivo'
                            pinColor={'blue'}
                        />
                        <Marker
                            coordinate={{
                                latitude: -23.6944,
                                longitude: -46.5654,
                            }}
                            title='Onde você está'
                            description='Posição atual'
                            pinColor={'red'}
                        />

                    </MapView>
                ) : (
                    <>
                        <Title> localização não encontrado</Title>

                        <ActivityIndicator />
                    </>

                )
            }





            <ScrollForm>
                <View style={{ justifyContent: "center", alignItems: "center" }}>

                    <Title>CLinica</Title>

                    <Subtitle>
                        São Paulo, SP
                    </Subtitle>

                    <BoxTitleLabel>
                        <TitleLabel>Endereço:</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>Rua Vicenso Silva, 987</TextLabel>
                    </Label>

                    <BoxRowMap>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>Número</TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={90}>
                                <TextLabel>
                                    578
                                </TextLabel>
                            </Label>
                        </BoxInput>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>
                                    Bairro
                                </TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={80}>
                                <TextLabel>
                                    Moema-SP
                                </TextLabel>
                            </Label>
                        </BoxInput>
                    </BoxRowMap>
                    <LinkOppacityMarginTop onPress={() => navigation.replace("Main")}>
                        <TextAccountLink >Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>
                </View>
            </ScrollForm>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        width: '100%',
    },
});

const grayMapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#E1E0E7",
            },
        ],
    },
    {
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: -5,
            },
            {
                lightness: -5,
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#33303E",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#66DA9F",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1B1B1B",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#C6C5CE",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ACABB7",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#8EA5D9",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#E52C00",
            },
        ],
    },
]