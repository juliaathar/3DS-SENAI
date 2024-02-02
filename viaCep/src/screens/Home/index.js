//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";
import { useEffect, useState } from "react";
import { Axios } from "react-native-axios";
import axios from "axios";

export function Home() {

    //hooks -- states

    const [cep, setCep] = useState('123456789');
    const [logradouro, setLogradouro] = useState('aaaaaaaa');
    const [bairro, setBairro] = useState('bbbbbbb');
    const [cidade, setCidade] = useState('ccccccc');
    const [estado, setEstado] = useState('dddddd');
    const [uf, setUf] = useState('ee');

    //hooks -- effect

    useEffect(async () => {
        //chamada da API

        try {

            if (cep != "" && cep.length === 8) {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

                if(response.error){
                    alert("verifique o cep")
                    return;
                }

                setLogradouro(endereco.data.logradouro);
                setBairro(endereco.data.bairro);
                setCidade(endereco.data.cidade);
                setEstado(endereco.data.uf);
                setUf(endereco.data.uf);
            }          

        } catch (error) {

            console.log("Erro ao buscar o cep");
            console.log(error);
        }

    }, [])

    return (

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
                    //via que recebe o dado
                    fieldValue={cep}
                    //funcao que manipula o state. recebe um valor
                    onChangeText={(tx) => {
                        setCep(tx)
                    }}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                />
                <ViewUF>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth="70"
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth="20"
                        fieldValue={uf}
                    />
                </ViewUF>
            </ContainerForm>
        </ScrollForm>

    )
}