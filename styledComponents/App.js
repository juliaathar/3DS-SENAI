import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useFonts, Rubik_600SemiBold, Rubik_500Medium } from '@expo-google-fonts/rubik'
import { Container } from './src/components/Container/Container';
import { Button, ButtonDecrement } from './src/components/Button/Button';
import { Gradient } from './src/components/Gradient/Gradient';
import { Title } from './src/components/Title/Title';
import { ButtonText } from './src/components/ButtonText/ButtonText';
import logo from './src/assets/images/ampulheta.png';



export default function App() {

  const [fontLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_600SemiBold
  });

  // if(!fontLoaded){
  //   return null;
  // }

  const [count, setCount] = useState(0);

  //funcao de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //funcao de decremento
  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Gradient
      colors={['#2E335A', '#1C1B33']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Container>
        <Title>
          Contador: {count}
        </Title>

        <Image source={logo} style={{width: 50, height: 50}} />


        <Button onPress={increment}>
          <ButtonText>Incrementar</ButtonText>
        </Button>

        <ButtonDecrement onPress={decrement}>
          <ButtonText>Decrementar</ButtonText>
        </ButtonDecrement>

        <StatusBar style="auto" />
      </Container>
    </Gradient>
  );
}


