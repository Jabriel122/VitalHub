
import { BoxInput, BoxRow, BoxTitleLabel } from "../../components/Box/Style"
import { Container, ScrollForm } from "../../components/Container/Style"
import { Label, TextLabel, TitleLabel } from "../../components/Label/Style"
import { ProfilePicture } from "../../components/PofilePicture/Style"
import { Subtitle } from "../../components/Subtitle/Style"
import { Title } from "../../components/Title/Style"
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const LocalConsulta = () => {
    return (
        <Container>

            <ScrollForm>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.container}>
                        <MapView style={styles.map} />
                    </View>
                    <Title>NOME</Title>

                    <Subtitle>
                        IDADE Email
                    </Subtitle>

                    <BoxTitleLabel>
                        <TitleLabel>Data de Nascimento:</TitleLabel>
                    </BoxTitleLabel>
                    <Label fieldwidth={90}>
                        <TextLabel>04/05/1999</TextLabel>
                    </Label>

                    <BoxRow>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>Cep</TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={90}>
                                <TextLabel>
                                    06548-909
                                </TextLabel>
                            </Label>
                        </BoxInput>
                        <BoxInput fieldwidth={50}>
                            <BoxTitleLabel>
                                <TitleLabel>
                                    Cidade
                                </TitleLabel>
                            </BoxTitleLabel>
                            <Label fieldwidth={80}>
                                <TextLabel>
                                    Moema-SP
                                </TextLabel>
                            </Label>
                        </BoxInput>


                    </BoxRow>
                </View>
            </ScrollForm>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});