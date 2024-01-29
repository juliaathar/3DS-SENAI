import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Outfit_600SemiBold } from "@expo-google-fonts/outfit"

export default function App() {

  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Outfit_600SemiBold
  });

  if(!fontLoaded){
    return null;
  }

  const peopleList = [
    {id: '1', name: 'Júlia', age: 18},
    {id: '2', name: 'Gabi', age: 18},
    {id: '3', name: 'Paulo', age: 23},
    {id: '4', name: 'Lucas', age: 18},
  ]

  return (
    <SafeAreaView>
      {/* <StatusBar /> */}

      {/* usando flatlist */}
      <FlatList
        data = {peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          //exibir cada item da lista
          <Person name={item.name} age= {item.age}/>
        )}
      />


    </SafeAreaView>
  );
}

