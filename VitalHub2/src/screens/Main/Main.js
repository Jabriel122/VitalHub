//importar o reurso do Bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home"
import { Perfil02 } from "../Perfil/Perfil02/Perfil02"
import { Login } from "../Login/Login"
import { ContentIcon, TextIcon } from "./Style"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
const BottomTab = createBottomTabNavigator()
export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10, width: "100%", margin: 0, elevation: 0, alignItems: 'center' },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color="#4E4B59" />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name='user-circle' size={18} color="#4E4B59" />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )

                    }
                }
            })}
        >


            {/* Rota da Home */}
            <BottomTab.Screen
                name="Home"
                component={Home}
            />

            {/* Rota do Perfil */}
            <BottomTab.Screen
                name="Perfil"
                component={Perfil02}
            />
        </BottomTab.Navigator>

    )
}