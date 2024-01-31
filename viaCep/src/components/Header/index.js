import { HeaderContainer, HeaderContent, TextHeader } from "./styles";

export function Header(params) {
    return (
        //HeaderContainer - View 
        //HeaderContent - SafeAreaView
        //TextHeader - Text

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>
                    Consumo da API ViaCep
                </TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}