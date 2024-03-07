import { BoxRow } from "../../../components/Box/Style"
import { Button } from "../../../components/Button/Style"
import { ModelContainer } from "../../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonQuitTitle, Title } from "../../../components/Title/Style"
import { ImageProntuary, ModalBody, ModelData, SubtitleBox } from "./style"



export const ProntuaryModal = ({ navigation, visible, onRequestClose, nome, email, idade, situacao, profile }) => {

    async function handleClose(screen) {
        await onRequestClose(false)

        navigation.replace(screen)
    }

    return (
        <ModalBody
            isVisible={visible}
        >
            <ModelContainer>
                <ModelData>
                    <ImageProntuary source={{ uri: "https://github.com/Jabriel122.png" }} />
                    <Title>
                        {nome}
                    </Title>

                    <SubtitleBox>
                        <Subtitle>
                            {idade}
                        </Subtitle>
                        <Subtitle>
                            {email}
                        </Subtitle>
                    </SubtitleBox>

                    {situacao != "pendente" ? (

                        <Button onPress={() => handleClose("InsercaoPontuario")}>
                            <ButtonQuitTitle >
                                Inserir Pontuario
                            </ButtonQuitTitle>
                        </Button>


                    ) : (
                        <Button onPress={() => handleClose("LocalConsulta")}>
                            <ButtonQuitTitle >
                                Ver Local da Consulta
                            </ButtonQuitTitle>
                        </Button>

                    )}



                    <LinkOppacityMarginTop onPress={onRequestClose}>
                        <TextAccountLink >Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>
                </ModelData>

            </ModelContainer>
        </ModalBody>

    )
}