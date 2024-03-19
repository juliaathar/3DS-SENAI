import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from "expo-local-authentication"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [history, setHistory] = useState({})

  const [biometricExist, setBiometricExist] = useState(false)

  async function CheckExistAuthenticates() {
    //Validar se o aparelho tem acesso a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setBiometricExist(compatible)
  }

  useEffect(() => {
    CheckExistAuthenticates()

    GetHistory()
  }, [])

  async function handleAuthentication(){
    const biometric = await LocalAuthentication.isEnrolledAsync()

    //validar se existe uma biometria cadastrada
    if(!biometric){
      return Alert.alert("falha ao logar")
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage:'Login com biometria'
    })
    
    setAuthenticated(auth.success)

    if(auth.success){
      SetHistory()
    }
  }

  async function SetHistory(){
    const objectAuth = {
      dataAuthenticate: moment().format("DD/MM/YYYY HH:mm:ss")
    }

    await AsyncStorage.setItem("authenticate", JSON.stringify(objectAuth))

    setHistory(objectAuth)
  }

  async function GetHistory(){
    const objAuth =await AsyncStorage.getItem("authenticate")

    if(objAuth){
      SetHistory(JSON.parse(objAuth))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{biometricExist ? 'compativel' : "nao eh compativel"}</Text>

      <TouchableOpacity onPress={handleAuthentication} style={styles.btn}>
        <Text style={styles.txtBtn}>Autenticar acesso</Text>
      </TouchableOpacity>
        <Text style={[styles.txtReturn, {color: authenticated? 'green' : "red"}]}>{authenticated?"autenticado": "nao autenticado"}</Text>
        {
          history.dataAuthenticate ?
          <Text style={styles.txtAuth}>ultimo acesso {history.dataAuthenticate}</Text> : null
        }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding:16,
    borderRadius:15,
    margin:20,
    backgroundColor: "#ff8800"
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    width: '70%'
  },
  txtBtn: {
    color: 'white',
    fontSize:20,
  },
  txtReturn:{
    fontSize:22,
    textAlign: "center",
    marginTop: 50
  },
  txtAuth:{
    fontSize:16,
    fontWeight:"bold",
    color:"#858383",
    position: "absolute",
    bottom:120
  }
});
