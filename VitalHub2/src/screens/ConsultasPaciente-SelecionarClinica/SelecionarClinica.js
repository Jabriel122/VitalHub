import { Button } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { LinkOppacityMarginTop, TextAccountLink } from "../../components/Links/Style"
import { ButtonQuitTitle, Title } from "../../components/Title/Style"

export const SelecionarClinica = () => {

    return (

        <Container>
            <Title>
                Selecionar clínica
            </Title>

            <ClinicCard/>




            <Button >
                <ButtonQuitTitle>
                    Confirmar
                </ButtonQuitTitle>
            </Button>


            <LinkOppacityMarginTop>
                <TextAccountLink >Cancelar</TextAccountLink>
            </LinkOppacityMarginTop>
        </Container>
    )
}