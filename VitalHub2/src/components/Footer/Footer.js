import { TouchableOpacity, View } from "react-native"
import { ContainerFooter } from "../Container/Style"

export const Footer = () => {

    // FooterButton = TouchableOpacity
    // FooterData = View
    // TextFooter = Text

    return (

        <ContainerFooter>
            <FooterButton>
                <FooterData>
                    {/* Icone */}
                    <TextFooter></TextFooter>
                </FooterData>
            </FooterButton>

        </ContainerFooter>

    )

}