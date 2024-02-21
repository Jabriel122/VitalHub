import { Button } from "../../../components/Button/Style"
import { ModelContainer } from "../../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Subtitle } from "../../../components/Subtitle/Style"
import { ButtonQuitTitle, Title } from "../../../components/Title/Style"
import { ModalBody, ModelData } from "./Style"

export const CancelarConsutlaModel = ({ visible, onRequestClose}) => {

    return (
        <ModalBody
            isVisible={visible}
        >
            <ModelContainer>
                <ModelData>
                    <Title>
                        Cancelar consulta
                    </Title>
                    <Subtitle>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </Subtitle>

                    <Button >
                        <ButtonQuitTitle>
                            Confirmar
                        </ButtonQuitTitle>
                    </Button>


                    <LinkOppacityMarginTop onPress ={onRequestClose}>
                        <TextAccountLink >Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>
                </ModelData>

            </ModelContainer>
        </ModalBody>

    )
}