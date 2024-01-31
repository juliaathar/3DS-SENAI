import styled from "styled-components";

//HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 0px 0px 15px 15px;
    shadow-color: #000000;
    shadow-offset: 0px 4px;
    shadow-opacity:0.15;
    shadow-radius: 15px;
    elevation:5;
`
export const HeaderContent = styled.SafeAreaView`
`

export const TextHeader = styled.Text`
    font-size: 24;
    font-family: 'Roboto_500Medium';
    color: '#333E33';
`