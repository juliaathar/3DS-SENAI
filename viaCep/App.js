//Import Styled
import { ContainerApp } from './styles';

//Fonts
import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

//Components
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';

export default function App() {

  //hooks para useFonts (fontes)
  const [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,Roboto_700Bold
  });

  //validação de carregamento de fontes
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
  <ContainerApp>
      <Header/>   
      <Home/>
    </ContainerApp> 
  );
}