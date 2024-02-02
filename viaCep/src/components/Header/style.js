import styled from "styled-components"

//HeaderContainer - VIEW
//HeaderConteiner - SAFE AREA VIEW
//TextHeader

export const HeaderContainer = styled.View`
    background-color: #fecc2b;
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 15px 15px;
    shadow-color: black;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius: 15px;
    elevation: 5;
`
export const HeaderContent = styled.SafeAreaView`
    margin-top: 45;
`
export const TextHeader = styled.Text`
    font-family: 'Roboto_700Bold';
    font-size: 24px;
    text-align: center;
    color: #333E33
`
