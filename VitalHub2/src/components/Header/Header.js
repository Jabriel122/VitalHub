import { Box, BoxUser } from "../Box/Style"
import { ContainerHeader } from "../Container/Style"
import { Title } from "../Title/Style"
import { ImageUser } from "./Style"

export const Header = () => {
    return(
        <ContainerHeader>
            <Title>Boo</Title>
            <BoxUser>
                <ImageUser source = {{ uri:"https://github.com/Jabriel122.png"}}/>
                {/* <DataUser>
                    <TextDefault></TextDefault>
                    <NameUser></NameUser>
                </DataUser> */}
            </BoxUser>
            {/* Importa - Material icons */}
        </ContainerHeader>
    )
}