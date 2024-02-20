import styled from "styled-components";
// import lib linear LinearGradient
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: white;
`
export const ContainerFB = styled(Container)`
    background-color: #FBFBFB;
`

export const ScrollForm = styled.ScrollView`
    flex: 1;
    width: 100%;
    margin-bottom: 30px;
    
`


export const TopContainer = styled.View`
    align-items: flex-start;
    flex-direction: row;
    width: 90% ;
    /* border: 2px solid red; */
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 }
})`
    width:100%;
    height: 144px;
    border-radius: 0px 0px 15px 15px ;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
    
`

export const ContainerFooter = styled.View`
    width:100%;
    height: 61px;
    border-radius: 15px 15px 0px 0px  ;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    
    margin-top: 20px;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
    
`

export const ModelContainer = styled.View`
    border-radius: 10px;
    width: 80%;
    justify-content: center;
    align-items: center;
    

`



