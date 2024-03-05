//importar o reurso do Bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home"
import { Perfil02 } from "../Perfil/Perfil02/Perfil02"
import { Login } from "../Login/Login"
import {FontAwesome, FontAwesome5} from "@expo"
const BottomTab = createBottomTabNavigator()
export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({route}) => ({
                tabBarStyle:{backgroundColor: "#FFFFF", height:80, paddingTop: 10},
                tabBarActiveBackgroundColor:"transparent", 
                tabBarShowLabel: false, 
                headerShown: false,

                tabBarIcon: ({focused}) =>{
                    if(route.name === "Home")
                    {
                        return(
                            <>
                                
                            </>
                        )
                    }else{

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