//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {

    //hooks -- states

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');


    //hooks -- effect

    useEffect(() => {
        const buscarDados = async () => {
            if (cep !== "" && cep.length === 8) {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    if (response.data) {
                        setLogradouro(response.data.logradouro);
                        setBairro(response.data.bairro);
                        setCidade(response.data.localidade);
                        setEstado(response.data.uf);
                        setUf(response.data.uf);
                    } else {
                        alert("verifique o cep");
                    }
                } catch (error) {
                    console.log("erro ao buscar cep", error);
                }
            }
        };

        buscarDados();
    }, [cep]);


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
                    onChangeText={tx => setLogradouro(tx)}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                    onChangeText={tx => setBairro(tx)}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                    onChangeText={tx => setCidade(tx)}
                />
                <ViewUF>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth="70"
                        fieldValue={estado}
                        onChangeText={tx => setEstado(tx)}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth="20"
                        fieldValue={uf}
                        onChangeText={tx => setUf(tx)}
                    />
                </ViewUF>
            </ContainerForm>
        </ScrollForm>

    )
}