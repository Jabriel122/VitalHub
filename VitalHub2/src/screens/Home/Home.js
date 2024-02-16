import { BoxRow, BoxUser } from "../../components/Box/Style"
import { LittleButtons } from "../../components/Button/Style"
import { CalendarHome } from "../../components/CalandarHome/CalendarHome"
import { Container, ContainerFB } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ButtonGoogleTitle, ButtonTitle, TitleLitteButton } from "../../components/Title/Style"
import { LineBtw } from "./Style"

export const Home = ({ fieldwidth, bkcolor, bcolor, color, fsize }) => {
    return (
        <ContainerFB>
            {/* Header */}
            <Header />

            <CalendarHome />

            <LineBtw>
                <LittleButtons
                    fieldwidth={30}
                    bkcolor={'496BBA'}
                    bcolor={'496BBA'}
                >
                    <TitleLitteButton
                        fsize={12}
                        color={'FBFBFB'}
                    >
                        Agendadas
                    </TitleLitteButton>
                </LittleButtons>
                <LittleButtons
                    fieldwidth={30}
                    bkcolor={'FBFBFB'}
                    bcolor={'496BBA'}
                >
                    <TitleLitteButton
                        fsize={12}
                        color={'496BBA'}
                    >
                        Realizadas
                    </TitleLitteButton>
                </LittleButtons>
                <LittleButtons
                    fieldwidth={30}
                    bkcolor={'FBFBFB'}
                    bcolor={'496BBA'}
                >
                    <TitleLitteButton
                        fsize={12}
                        color={'496BBA'}
                    >
                        Realizadas
                    </TitleLitteButton>
                </LittleButtons>
            </LineBtw>

            
        </ContainerFB>
    )

}