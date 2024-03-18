import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar recursos da biblioteca
import * as Notifications from "expo-notifications"

//solicitar permissao de notificacao ao iniciar o app 
Notifications.requestPermissionsAsync()

//definir como as notificacoes devem ser tratadas quando recebidas 
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //ativa o som da notificacao
    shouldPlaySound:true,

    //configura exibicao de numero de notificacoes no icone do app
    shouldSetBadge:true
  })
})

export default function App() {

  //funcao pra lidar com chamada da notificacao
  const handleCallNotifications = async () => {
    
    //obtem o status das permissoes 
    const {status} = await Notifications.getPermissionsAsync()

    //verifica se o usuario concedeu permissao pra notificacao 
    if(status !== "granted"){
      alert("voce nao deixou as notificacoes ativas")
      return;
    }

    //agendar uma notificacao pra ser exibida apos 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "gabi devops hacker do bem da silva",
        body:" boa tarde redes"
      },
      trigger:null
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCallNotifications} style={styles.button}>
        <Text style={styles.text}>Clique aqui pra ser hackeado</Text>
      </TouchableOpacity>
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
  button:{
    width: "80%",
    height: 50,
    backgroundColor:"#343434",
    borderRadius:50,
    alignItems: "center",
    justifyContent:"center",
  },
  text: {
    color: "white",
    fontSize:20,
    fontWeight: "500"
  }
});
