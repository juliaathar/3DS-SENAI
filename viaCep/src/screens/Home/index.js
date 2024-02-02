//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";

export function Home() {

    //hooks -- states

    //hooks -- effect
        //chamada da API

    return(

        //ScrollForm -- ScrollView
        //ContainerForm -- SafeAreaView
        //BoxInput -- View
            //Label
            //Input
            <ScrollForm>
                <ContainerForm>
                    <BoxInput 
                        textLabel="Informe o CEP"
                        placeholder="Cep..."
                        keyType="numeric"
                        maxLength={9}
                        editable={true}
                        />
                    <BoxInput 
                        textLabel="Logradouro"
                        placeholder="Logradouro..."
                        />
                    <BoxInput 
                        textLabel="Bairro"
                        placeholder="Bairro..."
                        />
                    <BoxInput 
                        textLabel="Cidade"
                        placeholder="Cidade..."
                        />
                    <ViewUF>
                    <BoxInput 
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth= "70"
                        />
                    <BoxInput 
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth= "20"
                        />
                        </ViewUF>
                </ContainerForm>
            </ScrollForm>

    )
}