import{ useFonts, Roboto_500Medium, Roboto_700Bold  } from "@expo-google-fonts/roboto"
import { ContainerApp } from './styles';
import { StatusBar } from "react-native";
import { Header } from "./src/components/Header";

export default function App() {
  
  const [fontLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>
      <Home/>
    </ContainerApp>
  );
}
