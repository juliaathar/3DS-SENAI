import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useFonts, Rubik_600SemiBold, Rubik_500Medium} from '@expo-google-fonts/rubik'
import { Container } from './src/components/Container/Container';


export default function App() {

  const [fontLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_600SemiBold
  });

  if(!fontLoaded){
    return null;
  }

  const [count, setCount] = useState(0);

//funcao de incremento
  const increment = () => {
    setCount(count+1)
  }

//funcao de decremento
  const decrement = () => {
    setCount(count-1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>
      <Text style={styles.txt_count}>Contador: {count}</Text>
    
      <TouchableOpacity style={styles.btn} onPress={increment}>
        <Text style={styles.txt_btn}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={decrement}>
        <Text>Decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  txt_count: {
    fontFamily: 'Rubik_500Medium'
  },
  btn: {
    width: '60%',
    height: 40,
    // backgroundColor: ''
  }

});
