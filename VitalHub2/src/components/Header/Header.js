import { Touchable, TouchableOpacity } from "react-native";
import { Box, BoxUser } from "../Box/Style"
import { ContainerHeader } from "../Container/Style"
import { Title } from "../Title/Style"
import { DataUser, ImageUser, Line, NameUser, TextDefault } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinkOppacity } from "../Links/Style";
export const Header = ({navigation}) => {
    return (
        <ContainerHeader>
            <Line>
                <BoxUser onPress={() => navigation.navigate("Perfil02")}>
                    <ImageUser source={{ uri: "https://github.com/Jabriel122.png" }} />
                    <DataUser>
                        <TextDefault>  Bem Vindo </TextDefault>
                        <NameUser> Gabriel</NameUser>
                    </DataUser>
                </BoxUser>

                <LinkOppacity>
                    <MaterialCommunityIcons name="bell" size={24} color="white" />
                </LinkOppacity>
                {/* Importa - Material icons */}
            </Line>
        </ContainerHeader>
    )
}