import { Button, ButtonAjust } from "../../../components/Button/Style"
import { ModelContainer } from "../../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../../components/Links/Style"
import { Subtitle, SubtitleDoctor } from "../../../components/Subtitle/Style"
import { AjustTitle, ButtonQuitTitle, Title } from "../../../components/Title/Style"
import { ImageDoctor, ModalBody, ModelData, SubtitleBox } from "./Style"

export const DoctorModal = ({ visible, onRequestClose, nome, codigo, ocupacao,situacao }) => {
    return (

        <ModalBody
            isVisible={visible}
        >
            <ModelContainer>
                <ModelData>
                    <ImageDoctor source={{ uri: "https://github.com/Jabriel122.png" }} />
                    <Title>
                        {nome}
                    </Title>

                    <SubtitleBox>
                        <SubtitleDoctor>
                             {ocupacao}
                        </SubtitleDoctor>
                        <SubtitleDoctor>
                            {codigo}
                        </SubtitleDoctor>
                    </SubtitleBox>

                    
                    <ButtonAjust 
                        fieldwidth={100}
                        fieldheigth={44}
                        color={"496BBA"}
                        mrginTop={30}
                        borderColor={"496BBA"}
                    
                    >
                        <AjustTitle
                            fontSize={14}
                            color={"FFFFFF"}
                            marginBottom={0}
                            marginTop={0}
                        >
                            Ver local da consulta
                        </AjustTitle>
                    </ButtonAjust>


                    <LinkOppacityMarginTop onPress={onRequestClose}>
                        <TextAccountLink >Cancelar</TextAccountLink>
                    </LinkOppacityMarginTop>
                </ModelData>

            </ModelContainer>

        </ModalBody>

    )
}